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

async function updateCaseStudies() {
  console.log('Updating case studies with new fields...\n')

  // Get existing EFI IQ case study
  const efiIQ = await client.fetch(`*[_type == "caseStudy" && slug.current == "efi-iq"][0]{ _id }`)

  if (efiIQ) {
    console.log('Updating EFI IQ case study...')
    await client
      .patch(efiIQ._id)
      .set({
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
              _key: randomUUID(),
              children: [
                {
                  _type: 'span',
                  _key: randomUUID(),
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
            '+50% increase in multi-feature usage',
            '+40% task planning efficiency',
            '+30% increase in recurring users',
          ],
          primaryUsers: [
            'Print shop owners managing multiple devices',
            'Print operators handling daily production',
            'Shop managers overseeing business operations',
          ],
          stakeholders: [
            'PMs (Product Vision)',
            'Sales Team (Customer Needs)',
            'Engineering (Feasibility & Infra)',
            'Support Team (User Feedback)',
          ],
        },
        designProcess: {
          description: [
            {
              _type: 'block',
              _key: randomUUID(),
              children: [
                {
                  _type: 'span',
                  _key: randomUUID(),
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
          ...efiIQ.research, // Keep existing research text
          methods: [
            {
              _key: randomUUID(),
              title: 'Desk Research',
              description: 'This was a new product in the printing market and the research was mostly done online.',
            },
            {
              _key: randomUUID(),
              title: 'User interviews (print shop owners, operators)',
              description: 'During EFI Connect 2016, Las Vegas, I was able to interview some users, primarily Print Shop Owners and operators.',
            },
            {
              _key: randomUUID(),
              title: 'Competitive analysis',
              description: "As one of EFI's key competitors, HP's Print OS was analysed to learn more about what it offered.",
            },
          ],
          challenges: [
            'Limited time with users at conference',
            'Varied technical expertise among users',
            'Legacy system had established user behaviors',
          ],
          solutions: [
            'Maximized interview efficiency with structured questions',
            'Created adaptive UI for different skill levels',
            'Designed smooth migration path from legacy system',
          ],
        },
        conceptIdeation: {
          text: [
            {
              _type: 'block',
              _key: randomUUID(),
              children: [
                {
                  _type: 'span',
                  _key: randomUUID(),
                  text: 'Cross-team workshops: Ran multiple workshops with stakeholders including PMs, developers, QA testers and Marketing.',
                },
              ],
            },
          ],
          approaches: [
            {
              _key: randomUUID(),
              title: 'Information Architecture',
              description: 'Given the complexity of the product suite, a clear information architecture was essential.',
            },
            {
              _key: randomUUID(),
              title: 'User Flow Mapping',
              description: 'Created detailed user journeys and wireframes to visualize the experience.',
            },
          ],
          challenges: [
            'Balancing feature complexity with ease of use',
            'Conflicting stakeholder priorities',
          ],
          solutions: [
            'Progressive disclosure of advanced features',
            'Data-driven prioritization using user feedback',
          ],
        },
        handoff: {
          text: [
            {
              _type: 'block',
              _key: randomUUID(),
              children: [
                {
                  _type: 'span',
                  _key: randomUUID(),
                  text: 'Comprehensive design system documentation and developer handoff materials were created.',
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
              _key: randomUUID(),
              children: [
                {
                  _type: 'span',
                  _key: randomUUID(),
                  text: 'EFI IQ successfully launched and received positive feedback from print shop owners.',
                },
              ],
            },
          ],
          results: [
            '50% increase in multi-feature usage',
            '40% improvement in task planning efficiency',
            '30% increase in recurring users',
            '92% user satisfaction score',
          ],
        },
        learnings: [
          {
            _key: randomUUID(),
            title: 'User research is invaluable',
            description: 'Direct observation revealed pain points we would never have discovered otherwise.',
          },
          {
            _key: randomUUID(),
            title: 'Stakeholder alignment is crucial',
            description: 'Regular check-ins helped us stay aligned and catch issues early.',
          },
          {
            _key: randomUUID(),
            title: 'Design systems save time',
            description: 'Using a design system significantly improved efficiency and consistency.',
          },
        ],
      })
      .commit()

    console.log('✓ EFI IQ updated successfully')
  } else {
    console.log('✗ EFI IQ case study not found')
  }

  console.log('\n✓ Case study update complete!')
}

updateCaseStudies()
  .then(() => {
    console.log('\nAll done!')
    process.exit(0)
  })
  .catch((err) => {
    console.error('Error updating case studies:', err)
    process.exit(1)
  })
