import { config } from 'dotenv'
import { createClient } from '@sanity/client'
import { randomUUID } from 'crypto'

// Load environment variables from .env.local
config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

async function migrateContent() {
  console.log('Starting content migration...')

  try {
    // Migrate Hero Section
    console.log('Migrating hero section...')
    await client.createOrReplace({
      _id: 'hero',
      _type: 'hero',
      title: 'Product designer.',
      subtitle: 'Based in Berlin 📍',
    })

    // Migrate About Page
    console.log('Migrating about page...')
    await client.createOrReplace({
      _id: 'about',
      _type: 'about',
      title: 'About Me',
      description: 'Product designer based in Berlin, blending design and management to craft solutions that drive real results.',
      storyParagraphs: [
        "I'm a product designer with over 8 years of experience creating digital products that solve real problems. My journey in design started with a passion for understanding how people interact with technology and a drive to make those interactions more meaningful.",
        "Based in Berlin, I've had the privilege of working with companies across 60+ countries, designing B2B SaaS products that serve millions of users. My approach combines thorough research, strategic thinking, and meticulous attention to detail.",
        "Beyond pixels and prototypes, I'm passionate about mentoring emerging designers and building design systems that empower teams to create consistently excellent experiences.",
      ],
      skills: [
        {
          _key: randomUUID(),
          category: 'Product Design',
          items: [
            'UX/UI Design',
            'Design Systems',
            'Interaction Design',
            'Prototyping',
            'Visual Design',
          ],
        },
        {
          _key: randomUUID(),
          category: 'Research',
          items: [
            'User Research',
            'Usability Testing',
            'User Interviews',
            'Data Analysis',
            'Journey Mapping',
          ],
        },
        {
          _key: randomUUID(),
          category: 'Leadership',
          items: [
            'Team Management',
            'Design Strategy',
            'Stakeholder Management',
            'Mentoring',
            'Process Development',
          ],
        },
      ],
      experience: [
        {
          _key: randomUUID(),
          period: '2020 - Present',
          role: 'Lead Product Designer',
          company: 'Yara International',
          description: 'Leading design for YaraPlus, a global agricultural platform serving farmers in 60+ countries. Achieved 85% adoption rate through user-centered design and continuous iteration.',
        },
        {
          _key: randomUUID(),
          period: '2018 - 2020',
          role: 'Senior Product Designer',
          company: 'Electronics For Imaging (EFI)',
          description: 'Redesigned print shop management system, achieving 92% user satisfaction. Led design system development and mentored junior designers.',
        },
        {
          _key: randomUUID(),
          period: '2016 - 2018',
          role: 'Product Designer',
          company: 'Various Startups',
          description: 'Worked with early-stage startups to establish design processes, create brand identities, and ship products from concept to launch.',
        },
      ],
      recognition: [
        {
          _key: randomUUID(),
          emoji: '🏆',
          title: 'Awwwards Honorable Mention',
          year: '2022',
        },
        {
          _key: randomUUID(),
          emoji: '⭐',
          title: 'FWA Site of the Day',
          year: '2021',
        },
        {
          _key: randomUUID(),
          emoji: '🎨',
          title: 'CSS Design Awards',
          year: '2020',
        },
        {
          _key: randomUUID(),
          emoji: '🚀',
          title: 'Product Hunt Featured',
          year: '2019',
        },
      ],
    })

    // Migrate Site Settings
    console.log('Migrating site settings...')
    await client.createOrReplace({
      _id: 'siteSettings',
      _type: 'siteSettings',
      title: 'Sohan Surag - Product Designer',
      description: 'Product designer based in Berlin. Blending design & management to craft solutions that drive results.',
      email: 'hello@sohansurag.com',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/sohansurag',
      },
      contactCTA: {
        heading: "Let's explore new horizons together",
        subheading: '',
      },
      name: 'Sohan Surag',
    })

    // Migrate Case Studies
    console.log('Migrating case studies...')

    await client.create({
      _type: 'caseStudy',
      title: 'YaraPlus',
      slug: { _type: 'slug', current: 'yaraplus' },
      description: 'The all-in-one platform for crop nutrition',
      tags: ['Agronomy', 'B2B SaaS', 'Web & Mobile', 'Lead Design'],
      metrics: [
        { _key: randomUUID(), label: 'Countries', value: '60+' },
        { _key: randomUUID(), label: 'Avg. Adoption', value: '85%' },
        { _key: randomUUID(), label: 'Dropoff', value: '-40%' },
      ],
      overview: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'YaraPlus is a comprehensive digital platform designed to revolutionize crop nutrition management for farmers and agricultural professionals worldwide. The platform combines data-driven insights, expert recommendations, and real-time monitoring to optimize crop yields and sustainability.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'As Lead Designer, I spearheaded the end-to-end design process, from initial research and strategy to final implementation, working closely with cross-functional teams across 60+ countries.',
            },
          ],
        },
      ],
      challenge: {
        text: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Farmers across different regions faced fragmented tools and inconsistent data for managing crop nutrition. The challenge was to create a unified platform that could adapt to diverse agricultural practices while maintaining ease of use for users with varying technical expertise.',
              },
            ],
          },
        ],
      },
      research: {
        text: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'I designed an intuitive, data-driven platform with a modular architecture that allows for regional customization while maintaining a consistent core experience. Key features include:',
              },
            ],
          },
        ],
        points: [
          {
            _key: randomUUID(),
            title: 'Smart Recommendations',
            description: 'AI-powered nutrition recommendations based on soil analysis, weather data, and crop types.',
          },
          {
            _key: randomUUID(),
            title: 'Real-time Monitoring',
            description: 'Dashboard for tracking crop health, nutrient levels, and field conditions in real-time.',
          },
          {
            _key: randomUUID(),
            title: 'Multi-platform Access',
            description: 'Seamless experience across web and mobile devices, even with limited connectivity.',
          },
          {
            _key: randomUUID(),
            title: 'Expert Network',
            description: 'Direct connection to agricultural experts for personalized support and guidance.',
          },
        ],
      },
      solution: {
        text: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'I designed an intuitive, data-driven platform with a modular architecture that allows for regional customization while maintaining a consistent core experience.',
              },
            ],
          },
        ],
        sections: [],
      },
      impact: {
        text: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'The platform launched successfully across 60+ countries, achieving an 85% adoption rate among target users and reducing user dropoff by 40%. The intuitive design and data-driven approach helped farmers make better decisions, leading to improved crop yields and more sustainable farming practices.',
              },
            ],
          },
        ],
        testimonial: {
          quote: 'The YaraPlus platform transformed how we approach crop nutrition. The interface is incredibly intuitive, and the insights are invaluable.',
          author: 'Agricultural Professional, Netherlands',
        },
      },
      order: 1,
    })

    await client.create({
      _type: 'caseStudy',
      title: 'EFI IQ',
      slug: { _type: 'slug', current: 'efi-iq' },
      description: 'Print Shop Management',
      tags: ['Web & Mobile', 'B2B SaaS', 'Product Design', 'Lead Designer'],
      metrics: [
        { _key: randomUUID(), label: 'Satisfaction', value: '92%' },
        { _key: randomUUID(), label: 'Adoption Rate', value: '78%' },
        { _key: randomUUID(), label: 'Dropoff', value: '-35%' },
      ],
      overview: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'EFI IQ is a comprehensive print shop management solution designed to streamline operations, optimize workflows, and maximize profitability for commercial printing businesses. The platform integrates job management, production tracking, and business analytics into one unified system.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'As Lead Designer, I led the product design process, creating an intuitive interface that simplifies complex print shop operations while providing powerful tools for business growth.',
            },
          ],
        },
      ],
      challenge: {
        text: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Print shops struggled with disconnected systems, manual processes, and limited visibility into operations. Shop owners needed a solution that could handle complex workflows while remaining accessible to staff with varying levels of technical expertise. The existing tools in the market were either too complex or lacked essential features.',
              },
            ],
          },
        ],
      },
      research: {
        text: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'I conducted extensive user research including:',
              },
            ],
          },
        ],
        points: [
          {
            _key: randomUUID(),
            title: 'On-site Observations',
            description: 'Spent time in print shops observing workflows, pain points, and daily operations to understand the real-world context.',
          },
          {
            _key: randomUUID(),
            title: 'User Interviews',
            description: 'Conducted 25+ interviews with shop owners, operators, and production staff to identify key needs and frustrations.',
          },
          {
            _key: randomUUID(),
            title: 'Competitive Analysis',
            description: 'Analyzed existing solutions to identify gaps and opportunities for innovation.',
          },
          {
            _key: randomUUID(),
            title: 'Workflow Mapping',
            description: 'Created detailed maps of print shop workflows to optimize the user experience.',
          },
        ],
      },
      solution: {
        text: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Designed a comprehensive yet intuitive management system with three core pillars:',
              },
            ],
          },
        ],
        sections: [
          {
            _key: randomUUID(),
            title: 'Job Management Dashboard',
            description: 'A central hub for tracking all jobs from quote to delivery, with real-time status updates and automated notifications.',
          },
          {
            _key: randomUUID(),
            title: 'Production Workflow',
            description: 'Streamlined production tracking with drag-and-drop scheduling, resource allocation, and bottleneck identification.',
          },
          {
            _key: randomUUID(),
            title: 'Business Intelligence',
            description: 'Powerful analytics and reporting tools to track profitability, identify trends, and make data-driven decisions.',
          },
        ],
      },
      impact: {
        text: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'EFI IQ achieved a 92% satisfaction rate and 78% adoption rate among target users. The streamlined workflows reduced user dropoff by 35% and helped print shops increase efficiency and profitability. Many customers reported significant time savings and improved visibility into their operations.',
              },
            ],
          },
        ],
        testimonial: {
          quote: 'EFI IQ transformed our shop. What used to take hours now takes minutes, and we have complete visibility into every job.',
          author: 'Print Shop Owner, California',
        },
      },
      order: 2,
    })

    // Migrate Testimonials
    console.log('Migrating testimonials...')

    await client.create({
      _type: 'testimonial',
      name: 'Frank Esteban',
      role: 'Web Development',
      company: 'Tech Corp',
      text: "Sohan is one of the BEST PRODUCT DESIGNERS I've worked with. Her thorough, in-depth research approach, including user interviews, helps better understand the audience and their needs.",
      order: 1,
    })

    await client.create({
      _type: 'testimonial',
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'Design Studio',
      text: "Working with Sohan was an absolute pleasure. Their attention to detail and user-centric approach resulted in a product that exceeded all our expectations.",
      order: 2,
    })

    await client.create({
      _type: 'testimonial',
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      text: "Sohan's ability to translate complex requirements into elegant, intuitive designs is remarkable. They truly understand what users need.",
      order: 3,
    })

    // Migrate Why Me Points
    console.log('Migrating Why Me points...')

    await client.create({
      _type: 'whyMePoint',
      title: 'Years of Experience',
      description: 'Great UX = listen to your users, clear workflows, zero guesswork.',
      icon: '8+',
      order: 1,
    })

    await client.create({
      _type: 'whyMePoint',
      title: 'Successful Projects',
      description: 'Delivered projects that exceeded expectations and drove real business results.',
      icon: '50+',
      order: 2,
    })

    await client.create({
      _type: 'whyMePoint',
      title: 'Happy Clients',
      description: 'Built lasting relationships through quality work and reliable delivery.',
      icon: '25+',
      order: 3,
    })

    // Migrate Leadership Points
    console.log('Migrating Leadership points...')

    await client.create({
      _type: 'leadershipPoint',
      title: 'Team Leadership',
      description: 'Led functional & cross-functional design teams of up to 5 members.',
      icon: '👥',
      order: 1,
    })

    await client.create({
      _type: 'leadershipPoint',
      title: 'Mentorship',
      description: 'Mentored a junior designer to a middle position in 9 months.',
      icon: '🎓',
      order: 2,
    })

    await client.create({
      _type: 'leadershipPoint',
      title: 'Project Management',
      description: 'Led budgeting, resource management, project and client management on a daily basis.',
      icon: '📊',
      order: 3,
    })

    await client.create({
      _type: 'leadershipPoint',
      title: 'Process Development',
      description: 'Developed UX strategy and design process from scratch in 4 months.',
      icon: '⚙️',
      order: 4,
    })

    console.log('✅ Migration completed successfully!')
  } catch (error) {
    console.error('❌ Migration failed:', error)
    throw error
  }
}

migrateContent()
