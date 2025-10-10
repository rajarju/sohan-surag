'use client';

import { useEffect, useRef, useState } from 'react';

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Debug panel state
  const [showDebug, setShowDebug] = useState(false);

  // Default values for reset - Final tuned settings
  const defaultAuroraParams = {
    numLayers: 12,
    speedMultiplier: 0.5,
    pulseSpeed: 0.001,
    radiusMin: 200,
    radiusMax: 500,
    mouseRepelDistance: 300,
    mouseRepelForce: 0.05,
    opacity: 0.15,
    scrollSpeed: 0.3,
  };

  const defaultStardustParams = {
    numParticles: 40,
    speedMultiplier: 0.16,
    sizeMin: 1.1,
    sizeMax: 2.5,
    mouseRepelDistance: 40,
    mouseRepelForce: 0.005,
    friction: 0.999,
    opacityMin: 0.5,
    opacityMax: 0.8,
    scrollSpeed: 0.05,
  };

  // Aurora parameters - Final tuned values
  const [auroraParams, setAuroraParams] = useState(defaultAuroraParams);

  // Stardust parameters - Final tuned values
  const [stardustParams, setStardustParams] = useState(defaultStardustParams);

  // Keyboard shortcut for debug panel (Ctrl/Cmd + K)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setShowDebug((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Reset function
  const handleReset = () => {
    setAuroraParams(defaultAuroraParams);
    setStardustParams(defaultStardustParams);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Mouse tracking
    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Scroll tracking for parallax
    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Aurora configuration
    const auroraColors = [
      { r: 74, g: 159, b: 255, a: auroraParams.opacity },  // #4A9FFF brand blue
      { r: 1, g: 95, b: 223, a: auroraParams.opacity * 0.8 },    // #015FDF - darker blue
      { r: 30, g: 210, b: 252, a: auroraParams.opacity * 0.67 },   // #1ED2FC - lighter cyan
      { r: 138, g: 43, b: 226, a: auroraParams.opacity * 0.53 },  // Purple accent
    ];

    const aurora = {
      colors: auroraColors,
      layers: [] as Array<{
        x: number;
        y: number;
        radius: number;
        color: typeof auroraColors[0];
        speedX: number;
        speedY: number;
        pulseSpeed: number;
        pulsePhase: number;
      }>,
    };

    // Create aurora layers
    for (let i = 0; i < auroraParams.numLayers; i++) {
      aurora.layers.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: auroraParams.radiusMin + Math.random() * (auroraParams.radiusMax - auroraParams.radiusMin),
        color: aurora.colors[i % aurora.colors.length],
        speedX: (Math.random() - 0.5) * auroraParams.speedMultiplier,
        speedY: (Math.random() - 0.5) * auroraParams.speedMultiplier,
        pulseSpeed: auroraParams.pulseSpeed * 0.5 + Math.random() * auroraParams.pulseSpeed,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Create stardust particles
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      velocityX: number;  // Added for smooth momentum
      velocityY: number;  // Added for smooth momentum
      opacity: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }> = [];

    for (let i = 0; i < stardustParams.numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: stardustParams.sizeMin + Math.random() * (stardustParams.sizeMax - stardustParams.sizeMin),
        speedX: (Math.random() - 0.5) * stardustParams.speedMultiplier,
        speedY: (Math.random() - 0.5) * stardustParams.speedMultiplier,
        velocityX: 0,
        velocityY: 0,
        opacity: stardustParams.opacityMin + Math.random() * (stardustParams.opacityMax - stardustParams.opacityMin),
        twinkleSpeed: 0.01 + Math.random() * 0.02,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      // Draw each aurora layer
      aurora.layers.forEach((layer) => {
        // Apply parallax scroll offset (opposite direction for inertia effect)
        const scrollOffset = scrollY * auroraParams.scrollSpeed;

        // Mouse interaction - gentle repulsion (use rendered position)
        const renderX = layer.x;
        const renderY = layer.y - scrollOffset;
        const dx = mouse.x - renderX;
        const dy = mouse.y - renderY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < auroraParams.mouseRepelDistance && distance > 0) {
          const force = (1 - distance / auroraParams.mouseRepelDistance) * auroraParams.mouseRepelForce;
          layer.x -= dx * force;
          layer.y -= dy * force;
        }

        // Update position
        layer.x += layer.speedX;
        layer.y += layer.speedY;

        // Wrap around edges (accounting for scroll offset)
        const wrapMargin = layer.radius * 2;
        if (layer.x < -layer.radius) layer.x = canvas.width + layer.radius;
        if (layer.x > canvas.width + layer.radius) layer.x = -layer.radius;

        // Wrap vertically with scroll offset in mind
        const virtualY = layer.y - scrollOffset;
        if (virtualY < -wrapMargin) {
          layer.y += canvas.height + wrapMargin * 2;
        }
        if (virtualY > canvas.height + wrapMargin) {
          layer.y -= canvas.height + wrapMargin * 2;
        }

        // Pulse effect
        layer.pulsePhase += layer.pulseSpeed;
        const pulse = Math.sin(layer.pulsePhase) * 0.3 + 1;
        const currentRadius = layer.radius * pulse;

        // Create gradient
        const gradient = ctx.createRadialGradient(
          renderX,
          renderY,
          0,
          renderX,
          renderY,
          currentRadius
        );

        gradient.addColorStop(
          0,
          `rgba(${layer.color.r}, ${layer.color.g}, ${layer.color.b}, ${layer.color.a})`
        );
        gradient.addColorStop(
          0.5,
          `rgba(${layer.color.r}, ${layer.color.g}, ${layer.color.b}, ${layer.color.a * 0.5})`
        );
        gradient.addColorStop(
          1,
          `rgba(${layer.color.r}, ${layer.color.g}, ${layer.color.b}, 0)`
        );

        // Draw aurora blob
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(renderX, renderY, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw stardust particles
      ctx.globalCompositeOperation = 'source-over';
      particles.forEach((particle) => {
        // Apply parallax scroll offset (opposite direction for inertia effect)
        const particleScrollOffset = scrollY * stardustParams.scrollSpeed;

        // Mouse interaction - apply force to velocity (use rendered position)
        const particleRenderX = particle.x;
        const particleRenderY = particle.y - particleScrollOffset;
        const dx = mouse.x - particleRenderX;
        const dy = mouse.y - particleRenderY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < stardustParams.mouseRepelDistance && distance > 0) {
          // Smooth ease-in force application
          const forceMagnitude = (1 - distance / stardustParams.mouseRepelDistance);
          const easeInForce = forceMagnitude * forceMagnitude; // Quadratic ease-in
          const force = easeInForce * stardustParams.mouseRepelForce;

          particle.velocityX -= dx * force;
          particle.velocityY -= dy * force;
        }

        // Apply light damping for air-like movement
        particle.velocityX *= stardustParams.friction;
        particle.velocityY *= stardustParams.friction;

        // Update position with base drift + velocity
        particle.x += particle.speedX + particle.velocityX;
        particle.y += particle.speedY + particle.velocityY;

        // Wrap around edges horizontally
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;

        // Wrap vertically with scroll offset in mind
        const particleVirtualY = particle.y - particleScrollOffset;
        if (particleVirtualY < -particle.size * 3) {
          particle.y += canvas.height + particle.size * 6;
        }
        if (particleVirtualY > canvas.height + particle.size * 3) {
          particle.y -= canvas.height + particle.size * 6;
        }

        // Twinkle effect
        particle.twinklePhase += particle.twinkleSpeed;
        const twinkle = Math.sin(particle.twinklePhase) * 0.3 + 0.7;
        const currentOpacity = particle.opacity * twinkle;

        // Draw particle
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(particleRenderX, particleRenderY, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add soft glow for larger particles
        if (particle.size > 1.5) {
          const glowGradient = ctx.createRadialGradient(
            particleRenderX,
            particleRenderY,
            0,
            particleRenderX,
            particleRenderY,
            particle.size * 3
          );
          glowGradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity * 0.3})`);
          glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(particleRenderX, particleRenderY, particle.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [auroraParams, stardustParams]); // Recreate animation when params change

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          mixBlendMode: 'screen',
        }}
      />

      {/* Debug Panel - Toggle with Ctrl/Cmd + K */}
      {showDebug && (
        <div className="fixed top-4 right-4 z-50 w-80 max-h-[90vh] overflow-y-auto bg-black/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-white">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-medium text-[#4A9FFF]">Animation Controls</h2>
            <span className="text-xs text-white/50">⌘K to close</span>
          </div>

          {/* Aurora Section */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-white/90">Aurora</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Layers: {auroraParams.numLayers}
                </label>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={auroraParams.numLayers}
                  onChange={(e) => setAuroraParams({ ...auroraParams, numLayers: Number(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Speed: {auroraParams.speedMultiplier.toFixed(3)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="0.5"
                  step="0.01"
                  value={auroraParams.speedMultiplier}
                  onChange={(e) => setAuroraParams({ ...auroraParams, speedMultiplier: Number(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Pulse Speed: {auroraParams.pulseSpeed.toFixed(4)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="0.005"
                  step="0.0001"
                  value={auroraParams.pulseSpeed}
                  onChange={(e) => setAuroraParams({ ...auroraParams, pulseSpeed: Number(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Opacity: {auroraParams.opacity.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="0.5"
                  step="0.01"
                  value={auroraParams.opacity}
                  onChange={(e) => setAuroraParams({ ...auroraParams, opacity: Number(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Radius Min: {auroraParams.radiusMin}
                </label>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={auroraParams.radiusMin}
                  onChange={(e) => setAuroraParams({ ...auroraParams, radiusMin: Number(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Radius Max: {auroraParams.radiusMax}
                </label>
                <input
                  type="range"
                  min="200"
                  max="1000"
                  step="10"
                  value={auroraParams.radiusMax}
                  onChange={(e) => setAuroraParams({ ...auroraParams, radiusMax: Number(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Mouse Repel Distance: {auroraParams.mouseRepelDistance}
                </label>
                <input
                  type="range"
                  min="0"
                  max="500"
                  step="10"
                  value={auroraParams.mouseRepelDistance}
                  onChange={(e) => setAuroraParams({ ...auroraParams, mouseRepelDistance: Number(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Mouse Repel Force: {auroraParams.mouseRepelForce.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.05"
                  value={auroraParams.mouseRepelForce}
                  onChange={(e) => setAuroraParams({ ...auroraParams, mouseRepelForce: Number(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Parallax Scroll Speed: {auroraParams.scrollSpeed.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={auroraParams.scrollSpeed}
                  onChange={(e) => setAuroraParams({ ...auroraParams, scrollSpeed: Number(e.target.value) })}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Stardust Section */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white/90">Stardust</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Particles: {stardustParams.numParticles}
                </label>
                <input
                  type="range"
                  min="0"
                  max="300"
                  step="10"
                  value={stardustParams.numParticles}
                  onChange={(e) => setStardustParams({ ...stardustParams, numParticles: Number(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Speed: {stardustParams.speedMultiplier.toFixed(3)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="0.2"
                  step="0.005"
                  value={stardustParams.speedMultiplier}
                  onChange={(e) => setStardustParams({ ...stardustParams, speedMultiplier: Number(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Size Min: {stardustParams.sizeMin.toFixed(1)}
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="3"
                  step="0.1"
                  value={stardustParams.sizeMin}
                  onChange={(e) => setStardustParams({ ...stardustParams, sizeMin: Number(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Size Max: {stardustParams.sizeMax.toFixed(1)}
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="5"
                  step="0.1"
                  value={stardustParams.sizeMax}
                  onChange={(e) => setStardustParams({ ...stardustParams, sizeMax: Number(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Mouse Repel Distance: {stardustParams.mouseRepelDistance}
                </label>
                <input
                  type="range"
                  min="0"
                  max="300"
                  step="10"
                  value={stardustParams.mouseRepelDistance}
                  onChange={(e) => setStardustParams({ ...stardustParams, mouseRepelDistance: Number(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Mouse Repel Force: {stardustParams.mouseRepelForce.toFixed(3)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="0.2"
                  step="0.005"
                  value={stardustParams.mouseRepelForce}
                  onChange={(e) => setStardustParams({ ...stardustParams, mouseRepelForce: Number(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Friction: {stardustParams.friction.toFixed(3)} ({((1 - stardustParams.friction) * 100).toFixed(1)}% drag)
                </label>
                <input
                  type="range"
                  min="0.9"
                  max="0.999"
                  step="0.001"
                  value={stardustParams.friction}
                  onChange={(e) => setStardustParams({ ...stardustParams, friction: Number(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Opacity Min: {stardustParams.opacityMin.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={stardustParams.opacityMin}
                  onChange={(e) => setStardustParams({ ...stardustParams, opacityMin: Number(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Opacity Max: {stardustParams.opacityMax.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={stardustParams.opacityMax}
                  onChange={(e) => setStardustParams({ ...stardustParams, opacityMax: Number(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Parallax Scroll Speed: {stardustParams.scrollSpeed.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={stardustParams.scrollSpeed}
                  onChange={(e) => setStardustParams({ ...stardustParams, scrollSpeed: Number(e.target.value) })}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleReset}
              className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all border border-white/20"
            >
              Reset
            </button>
            <button
              onClick={() => {
                const config = { auroraParams, stardustParams };
                console.log('Animation Config:', config);
                alert('Config logged to console! Copy it from there.');
              }}
              className="flex-1 px-4 py-2 bg-[#4A9FFF] hover:bg-[#3A8FEF] text-white rounded-lg transition-all"
            >
              Export
            </button>
          </div>
        </div>
      )}
    </>
  );
}
