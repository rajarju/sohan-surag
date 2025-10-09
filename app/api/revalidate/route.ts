import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Verify the request is from Sanity
    const secret = request.nextUrl.searchParams.get('secret')

    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    const body = await request.json()

    // Get the document type from the webhook payload
    const documentType = body._type

    console.log('Revalidating:', documentType)

    // Revalidate based on document type
    switch (documentType) {
      case 'hero':
      case 'about':
      case 'siteSettings':
      case 'whyMePoint':
      case 'leadershipPoint':
      case 'testimonial':
        // Revalidate homepage for these global content types
        revalidatePath('/')
        break

      case 'caseStudy':
        // Revalidate homepage (case studies list)
        revalidatePath('/')

        // Revalidate specific case study page if slug exists
        if (body.slug?.current) {
          revalidatePath(`/case-studies/${body.slug.current}`)
          console.log('Revalidated case study:', body.slug.current)
        }
        break

      default:
        // Revalidate everything if we don't know the type
        revalidatePath('/', 'layout')
    }

    // Also revalidate about page for about/site settings changes
    if (documentType === 'about' || documentType === 'siteSettings') {
      revalidatePath('/about')
    }

    return NextResponse.json({
      revalidated: true,
      documentType,
      now: Date.now()
    })
  } catch (err) {
    console.error('Error revalidating:', err)
    return NextResponse.json(
      { message: 'Error revalidating', error: String(err) },
      { status: 500 }
    )
  }
}
