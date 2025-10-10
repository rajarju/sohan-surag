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

async function updateHero() {
  console.log('Updating hero content...')

  try {
    // Fetch existing hero document
    const hero = await client.fetch(`*[_type == "hero"][0]{ _id }`)

    if (hero) {
      console.log('Found existing hero document, updating...')
      await client
        .patch(hero._id)
        .set({
          greeting: 'Hello 👋 I am',
          name: 'Sohan Surag',
          title: 'Product Designer.',
          subtitle: 'Based in Berlin 📍',
          // Note: You'll need to add the profile image manually via Sanity Studio
        })
        .commit()

      console.log('✅ Hero content updated successfully!')
      console.log('📝 Remember to upload a profile image via Sanity Studio')
    } else {
      console.log('No hero document found. Creating new one...')
      await client.create({
        _type: 'hero',
        _id: 'hero',
        greeting: 'Hello 👋 I am',
        name: 'Sohan Surag',
        title: 'Product designer.',
        subtitle: 'Based in Berlin 📍',
      })
      console.log('✅ Hero content created successfully!')
      console.log('📝 Remember to upload a profile image via Sanity Studio')
    }
  } catch (error) {
    console.error('❌ Update failed:', error)
    throw error
  }
}

updateHero()
