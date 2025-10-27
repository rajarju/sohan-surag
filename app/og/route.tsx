import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Extract query parameters
    const title = searchParams.get('title') || 'Sohan Surag';
    const description = searchParams.get('description') || 'Product Designer';
    const type = searchParams.get('type') || 'default';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            position: 'relative',
          }}
        >
          {/* Gradient overlay for aurora effect */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(74, 159, 255, 0.3), transparent)',
              display: 'flex',
            }}
          />

          {/* Content container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px',
              zIndex: 10,
              maxWidth: '1000px',
              textAlign: 'center',
            }}
          >
            {/* Title */}
            <div
              style={{
                fontSize: type === 'case-study' ? '64px' : '80px',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '24px',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </div>

            {/* Description */}
            {description && (
              <div
                style={{
                  fontSize: type === 'case-study' ? '32px' : '40px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.4,
                  maxWidth: '900px',
                }}
              >
                {description}
              </div>
            )}

            {/* Brand accent line */}
            <div
              style={{
                width: '120px',
                height: '6px',
                backgroundColor: '#4A9FFF',
                marginTop: '40px',
                borderRadius: '3px',
              }}
            />
          </div>

          {/* Footer branding */}
          <div
            style={{
              position: 'absolute',
              bottom: '60px',
              display: 'flex',
              alignItems: 'center',
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            sohansurag.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    console.error('Error generating OG image:', e);
    return new Response('Failed to generate image', { status: 500 });
  }
}
