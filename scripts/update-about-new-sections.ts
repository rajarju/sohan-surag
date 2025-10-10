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

async function updateAbout() {
  console.log('Adding new sections to About page...')

  try {
    // Update existing document with new fields only
    await client
      .patch('about')
      .set({
        // Experience Introduction
        experienceIntro: [
          "With over 16 years of professional experience including more than 10 years in Product Design I've transitioned from a Generalist role into Design and Product Management, working with startups and established products across E-Commerce, Edtech, Fintech, Agronomy and manufacturing.",
          "My career journey has taken me through dynamic environments where adaptability and curiosity have been my greatest assets.",
        ],

        // Education Section
        education: [
          {
            degree: 'Bachelor of Business Management',
            institution: 'Sree Narayana College, Kannur',
            period: '2004 - 2007',
          },
          {
            degree: 'PG Diploma in Multimedia Technologies (Adobe Certified)',
            institution: 'Auriga Multimedia, Kannur',
            period: '2007 - 2008',
          },
          {
            degree: 'Higher Secondary School',
            institution: "St. Joseph's High School, Thalassery",
            period: '1995 - 2002',
          },
        ],

        // Outside Work Section
        goodreadsUrl: 'https://www.goodreads.com/user/show/YOUR_ID', // Update with actual URL
        favoriteQuote:
          'The only way to do great work is to love what you do.',
        hobbies: [
          'I have been playing videogames ever since SNES launched and I still actively play them. Mostly RPGs, FPS, Action/Adventure & single-player campaigns but occasionally a competitive MMO as well.',
          'Although I have always loved cooking (my specialties being Lasagne and Breakfast burritos), I recently took liking to baking as well - a cheesecake here and pecan pie there.',
          'I am also a bit of a movie-fanatic. Doesnt matter what language it is - I do try to watch whatever that could fit my schedule.',
          'Lastly music - my lifeblood. I dont particularly have a preference and I do listen to whatever that my ears deem good. But I do love Modern rock, Soundtracks, Pop, Techno to name a few.',
        ],
      })
      .commit()

    console.log('✅ About page updated successfully!')
    console.log('\n📝 Remember to:')
    console.log('   1. Update goodreadsUrl with actual Goodreads profile')
    console.log('   2. Update favoriteQuote with your real favorite quote')
  } catch (error) {
    console.error('❌ Update failed:', error)
    throw error
  }
}

updateAbout()
