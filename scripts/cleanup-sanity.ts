import { config } from 'dotenv'
import { createClient } from '@sanity/client'

// Load environment variables from .env.local
config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

async function cleanup() {
  console.log('Starting cleanup...')

  try {
    // Delete all documents
    const types = [
      'hero',
      'about',
      'siteSettings',
      'caseStudy',
      'testimonial',
      'whyMePoint',
      'leadershipPoint',
    ]

    for (const type of types) {
      console.log(`Deleting all ${type} documents...`)
      await client.delete({
        query: `*[_type == "${type}"]`,
      })
    }

    console.log('✅ Cleanup completed successfully!')
  } catch (error) {
    console.error('❌ Cleanup failed:', error)
    throw error
  }
}

cleanup()
