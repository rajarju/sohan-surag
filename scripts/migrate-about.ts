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

async function migrateAbout() {
  console.log('Migrating About page content...')

  try {
    const aboutData = {
      _id: 'about',
      _type: 'about',

      // Hero Section
      tagline1: 'Designer by craft.',
      tagline2: 'Strategist by mindset.',
      tagline3: 'Storyteller at heart.',
      subtitle: 'Bridging people, ideas, and products with thoughtful designs.',
      // Note: heroImage needs to be uploaded via Sanity Studio
      resumeUrl: '', // Add your resume URL here

      // Experience Section
      experienceIntro: [
        "With over 16 years of professional experience including more than 10 years in Product Design I've transitioned from a Generalist role into Design and Product Management, working with startups and established products across E-Commerce, Edtech, Fintech, Agronomy and manufacturing.",
        "My career journey has taken me through dynamic environments where adaptability and curiosity have been my greatest assets.",
      ],

      experience: [
        {
          company: 'Yara International GmbH, Berlin',
          role: 'Senior Product Designer',
          period: 'Jun 2023 - Present',
        },
        {
          company: 'HQ Revenue GmbH (Lighthouse)',
          role: 'Senior Product Designer',
          period: 'Nov 2021 - May 2023',
        },
        {
          company: 'Ernst & Young',
          role: 'Principal Product Designer',
          period: 'Mar 2020 - Sep 2021',
        },
        {
          company: 'Electronics for Imaging',
          role: 'UX Designer',
          period: 'Aug 2016 - Mar 2020',
        },
        {
          company: 'BMS Innolabs',
          role: 'Marketing Manager',
          period: 'Jul 2015 - Aug 2016',
        },
        {
          company: 'Human Interface Technologies',
          role: 'Manager Design/Marketing',
          period: 'Dec 2014 - Jul 2015',
        },
        {
          company: 'Foradian Technologies',
          role: 'Manager Design/Marketing',
          period: 'Feb 2012 - Nov 2014',
        },
        {
          company: 'R & S Electronics',
          role: 'Design Engineer',
          period: 'Mar 2011 - Nov 2011',
        },
        {
          company: 'Prism Technologies Inc',
          role: 'Visual Designer',
          period: 'Jul 2008 - Feb 2011',
        },
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
      goodreadsUrl: 'https://www.goodreads.com/', // Add actual Goodreads profile URL
      favoriteQuote:
        'Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla',
      hobbies: [
        'I have been playing videogames ever since SNES launched and I still actively play them. Mostly RPGs, FPS, Action/Adventure & single-player campaigns but occasionally a competitive MMO as well.',
        'Although I have always loved cooking (my specialties being Lasagne and Breakfast burritos), I recently took liking to baking as well - a cheesecake here and pecan pie there.',
        'I am also a bit of a movie-fanatic. Doesnt matter what language it is - I do try to watch whatever that could fit my schedule.',
        'Lastly music - my lifeblood. I dont particularly have a preference and I do listen to whatever that my ears deem good. But I do love Modern rock, Soundtracks, Pop, Techno to name a few.',
      ],
    }

    // Create or replace the about document
    await client.createOrReplace(aboutData)
    console.log('✅ About page content migrated successfully!')
    console.log('\n📝 Remember to:')
    console.log('   1. Upload hero illustration image via Sanity Studio')
    console.log('   2. Update resumeUrl with actual resume link')
    console.log('   3. Update goodreadsUrl with actual Goodreads profile')
    console.log('   4. Update favorite quote with real quote')
  } catch (error) {
    console.error('❌ Migration failed:', error)
    throw error
  }
}

migrateAbout()
