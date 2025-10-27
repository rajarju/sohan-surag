import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { client } from '@/sanity/lib/client';
import { heroQuery } from '@/sanity/lib/queries';
import createImageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from '@/sanity/env';

export const runtime = 'edge';

// Image URL builder for edge runtime
const builder = createImageUrlBuilder({ projectId, dataset });

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type') || 'default';

    // For case studies and other pages, use the simple layout
    if (type === 'case-study' || searchParams.get('title')) {
      const title = searchParams.get('title') || 'Sohan Surag';
      const description = searchParams.get('description') || 'Product Designer';

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
    }

    // For homepage, fetch hero data from Sanity
    const hero = await client.fetch(heroQuery);

    const greeting = hero?.greeting || 'Hello';
    const name = hero?.name || 'Sohan Surag';
    const title = hero?.title || 'Product designer.';

    // Get profile image URL
    const profileImageUrl = hero?.profileImage
      ? builder.image(hero.profileImage).width(400).height(400).url()
      : null;

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
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

          {/* Main content - Two column layout */}
          <div
            style={{
              display: 'flex',
              width: '100%',
              height: '100%',
              padding: '80px',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
              zIndex: 10,
            }}
          >
            {/* Left Column - Text */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                maxWidth: '600px',
              }}
            >
              {/* Greeting + Name */}
              <div
                style={{
                  fontSize: '40px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: 400,
                }}
              >
                {greeting} {name}
              </div>

              {/* Title */}
              <div
                style={{
                  fontSize: '72px',
                  fontWeight: 400,
                  color: '#fff',
                  lineHeight: 1.1,
                }}
              >
                {title}
              </div>

              {/* Brand accent line */}
              <div
                style={{
                  width: '120px',
                  height: '6px',
                  backgroundColor: '#4A9FFF',
                  borderRadius: '3px',
                  marginTop: '12px',
                }}
              />
            </div>

            {/* Right Column - Profile Image */}
            {profileImageUrl && (
              <div
                style={{
                  display: 'flex',
                  width: '380px',
                  height: '380px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.05)',
                }}
              >
                <img
                  src={profileImageUrl}
                  alt={name}
                  width="380"
                  height="380"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
            )}
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
