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

async function migrateCompanies() {
  console.log('Migrating companies...')

  try {
    // Sample companies - you'll need to upload actual logos via Sanity Studio
    const companies = [
      {
        _type: 'company',
        name: 'Ernst & Young (EY)',
        description: 'Professional services firm',
        order: 1,
      },
      {
        _type: 'company',
        name: 'BP',
        description: 'Energy company',
        order: 2,
      },
      {
        _type: 'company',
        name: 'Dolby',
        description: 'Audio technology company',
        order: 3,
      },
      {
        _type: 'company',
        name: 'Electronics For Imaging (EFI)',
        description: 'Digital imaging technology',
        order: 4,
      },
      {
        _type: 'company',
        name: 'Yara International',
        description: 'Agricultural company',
        order: 5,
      },
    ]

    for (const company of companies) {
      await client.create(company)
      console.log(`✅ Created company: ${company.name}`)
    }

    console.log('\n✅ Migration completed successfully!')
    console.log('📝 Remember to upload company logos via Sanity Studio')
  } catch (error) {
    console.error('❌ Migration failed:', error)
    throw error
  }
}

migrateCompanies()
