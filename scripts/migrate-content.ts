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
      description: 'Cloud platform for Print Shop management',
      tags: ['Web & Mobile', 'B2B SaaS', 'Product Design', 'Lead Designer'],
      metrics: [
        { _key: randomUUID(), label: 'increase in multi-feature usage', value: '+50%' },
        { _key: randomUUID(), label: 'task planning efficiency', value: '+40%' },
        { _key: randomUUID(), label: 'increase in recurring users', value: '+30%' },
      ],
      projectInfo: {
        company: 'Electronics For Imaging',
        role: 'Lead UX Designer',
        team: ['Designers x1', 'PM x2', 'Engineers'],
        tools: ['Balsamiq Mockups', 'Sketch/Figma', 'Hotjar'],
        timeline: {
          duration: '9 months',
          status: 'Ongoing iterations',
        },
      },
      overview: {
        businessContext: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: "EFI's initial attempt at a Cloud Platform for print businesses (Fiery Navigator) was a barebones experience. The product lacked features and analytics without context was ignorable. The 7 year old product has its shortcomings and a few are listed below:",
              },
            ],
          },
        ],
        problem: [
          'Lackluster Historical Data Analysis',
          'No User Management',
          'No Device Management',
          'Clunky Navigation',
          'No actionable insights',
        ],
        opportunity: 'A single, unified cloud destination where customers regularly return to use the suite of EFI cloud-based services.',
        productGoals: [
          'Leverage cloud applications to increase print device usage and production uptime. Improve control of your supply chain too.',
          'Win color-critical customers by showing prospects color verification trends over time and delivering consistent, accurate color.',
          'Capitalize on print production analytics by transforming the data into informed decision making.',
          'Onboard and track printers by location, and make printer groups to use in various applications.',
          'Assign user roles and permissions to give each person the most useful information for their job.',
          'Set alerts to notify the right people of production-blocking events to minimize downtime.',
        ],
        successMetrics: [
          '+50 increase in multi-feature usage',
          '+40% task planning efficiency',
          '+30% increase in recurring users',
        ],
        primaryUsers: [
          'Agronomists managing >10 farms',
          'Mid-scale farmers (10-200 hectares)',
          'Yara internal sales/support teams',
        ],
        stakeholders: [
          'PMs (Product Vision)',
          'Agronomists (Domain Expertise)',
          'Engineering (Feasibility & Infra)',
          'Regulatory/Compliance',
        ],
      },
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
      designProcess: {
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Present throughout the design lifecycle.',
              },
            ],
          },
        ],
        phases: [
          {
            _key: randomUUID(),
            name: 'DISCOVERY',
            description: 'User interviews and competitive analysis to understand pain points',
            methods: ['User Interviews', 'Competitive Analysis'],
          },
          {
            _key: randomUUID(),
            name: 'DEFINE',
            description: 'Information Architecture, Storyboard, User Flow, Personas',
            methods: ['IA', 'Storyboard', 'User Flow', 'Personas'],
          },
          {
            _key: randomUUID(),
            name: 'IDEATION',
            description: 'Wireframes for initial design explorations',
            methods: ['Wireframes'],
          },
          {
            _key: randomUUID(),
            name: 'PROTOTYPE',
            description: 'Mid-fidelity and High-fidelity screens',
            methods: ['Mid-fidelity Prototype', 'High-fidelity Screens'],
          },
          {
            _key: randomUUID(),
            name: 'VALIDATION',
            description: 'User Testing and Survey',
            methods: ['User Testing', 'Survey'],
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
                text: 'Methods used:',
              },
            ],
          },
        ],
        methods: [
          {
            _key: randomUUID(),
            title: 'Desk Research',
            description: 'This was a new product in the printing market and the research was mostly done online.',
          },
          {
            _key: randomUUID(),
            title: 'User interviews (print shop owners, operators)',
            description: 'During EFI Connect 2016, Las Vegas, I was able to interview some users, primarily Print Shop Owners and operators. They felt rather limited with the features Fiery Navigator offered. A set of questions were asked to learn more about how they used and felt about the product.',
          },
          {
            _key: randomUUID(),
            title: 'Competitive analysis',
            description: "As one of EFI's key competitors, HP's Print OS was analysed to learn more about what it offered and how the new product could have an edge over those features",
          },
        ],
        challenges: [
          'Yara has a large backlog of user research data accumulated over several years. Times change and so do user feedback.',
          'User interviews were mostly with German, UK and Spanish markets and we needed a native speaker to conduct the interviews',
          'Yara legacy tools were vast and already being used by thousands of users. We needed to find a way to migrate all those users to YaraPlus.',
        ],
        solutions: [
          'Consolidating past research and comparing it with current  user requirements to assure we are designing the product that the users need.',
          'Being present in user interviews and leveraging translation for taking notes.',
          'Seamless migration of current users and user accounts prioritized and differentiating between current and new user onboarding for a delightful migration experience.',
          'Comparing featureset of the legacy products improving the same for YaraPlus, our main aim was not to deviate the experience abut from the legacy products experience.',
        ],
      },
      conceptIdeation: {
        text: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Cross-team workshops: Ran multiple Miro workshops with stakeholders. I wanted to include not just PMs, but also developers, QA testers and Marketing so that we are all working towards a common goal. Feedback was of prime-importance here.',
              },
            ],
          },
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Initial design explorations: Sketches, IA variants, component-level ideas. Using Miro and figma, we went onto create user journeys, wireframes and user flows, we also explored different concepts, from rough sketches to low-fidelity prototypes.',
              },
            ],
          },
        ],
        approaches: [
          {
            _key: randomUUID(),
            title: 'Information Architecture',
            description: 'Given the complexity of a product suite than envelopes all of EFI\'s products an information architecture was essential',
          },
          {
            _key: randomUUID(),
            title: 'User Flow',
            description: 'Sketches, IA variants, component-level ideas. Using Miro and figma, we went onto create user journeys, wireframes and user flows',
          },
          {
            _key: randomUUID(),
            title: 'Personas',
            description: 'Testing early with users and stakeholders were crucial so that we all are still on the same page.',
          },
        ],
        challenges: [
          'Having stakeholders from Product, Marketing, Engineering and Design meant there was a lot of feedback.',
          'Conflicting marketing needs vs user requirements.',
          'Working with legacy tool teams to bring everything under one umbrella',
        ],
        solutions: [
          'Prioritizing feedback that lend to user requirements and keeping the rest for backlogs and nice-to-haves',
          'Pushing back with Marketing favoring user requirements and with user testing and analytics at a later stage to prove the same.',
          'Albeit time-consuming, worked closely with the legacy tools\' teams to further streamline the migration process.',
        ],
      },
      solution: {
        text: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Mid-fidelity screens & prototype: Sketch was the tool that we had started on but then due to its incompatibilities and a failure to use design systems we moved onto Figma',
              },
            ],
          },
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'DOT Design System: EFIs design system entitled DOT was introduced and we migrated to Figma where we arrived at the final solution.',
              },
            ],
          },
        ],
        sections: [
          {
            _key: randomUUID(),
            title: 'Dashboard - Key Screens',
            description: 'The main dashboard provides an at-a-glance view of all print jobs, production status, and key metrics. Users can quickly identify bottlenecks and take action.',
          },
          {
            _key: randomUUID(),
            title: 'User & Device Management',
            description: 'Comprehensive tools for managing team members and printer devices, with role-based permissions and group management.',
          },
          {
            _key: randomUUID(),
            title: 'Analytics & Reporting',
            description: 'Powerful analytics dashboard that transforms production data into actionable insights for business growth.',
          },
        ],
      },
      handoff: {
        text: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Comprehensive design system documentation and developer handoff materials were created to ensure smooth implementation.',
              },
            ],
          },
        ],
        deliverables: [
          'Figma design files with complete component library',
          'Interactive prototypes for user testing',
          'Design specifications and style guide',
          'User flow documentation',
          'Accessibility guidelines',
        ],
      },
      outcome: {
        text: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'EFI IQ successfully launched and received positive feedback from print shop owners and operators. The platform achieved significant improvements in user engagement and satisfaction.',
              },
            ],
          },
        ],
        results: [
          '50% increase in multi-feature usage compared to legacy system',
          '40% improvement in task planning efficiency',
          '30% increase in recurring users month-over-month',
          '92% user satisfaction score',
          'Reduced onboarding time from 2 hours to 30 minutes',
        ],
      },
      learnings: [
        {
          _key: randomUUID(),
          title: 'User research is invaluable',
          description: 'Spending time with actual print shop owners revealed pain points we would never have discovered otherwise. Direct observation of workflows was key to understanding real-world needs.',
        },
        {
          _key: randomUUID(),
          title: 'Stakeholder alignment is crucial',
          description: 'Regular check-ins with product, marketing, and engineering teams helped us stay aligned and catch potential issues early.',
        },
        {
          _key: randomUUID(),
          title: 'Iterate, iterate, iterate',
          description: 'Our best solutions came from multiple rounds of feedback and refinement. No design is perfect on the first try.',
        },
        {
          _key: randomUUID(),
          title: 'Design systems save time',
          description: 'Migrating to Figma and using the DOT design system significantly improved our efficiency and consistency.',
        },
      ],
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
