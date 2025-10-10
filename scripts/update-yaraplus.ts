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

async function updateYaraPlus() {
  console.log('Updating YaraPlus with new fields...\n')

  // Get existing YaraPlus case study
  const yaraPlus = await client.fetch(`*[_type == "caseStudy" && slug.current == "yaraplus"][0]{ _id }`)

  if (yaraPlus) {
    console.log('Updating YaraPlus case study...')
    await client
      .patch(yaraPlus._id)
      .set({
        projectInfo: {
          company: 'Yara International',
          role: 'Senior Product Designer',
          team: ['Designers x6', 'PM x4', 'Engineers'],
          tools: ['Miro', 'Figma', 'Amplitude'],
          timeline: {
            duration: '8 months',
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
                  text: 'Yara aimed to unify its fragmented farming tools into a cohesive product suite to support farmers across planning, monitoring, and analytics.',
                },
              ],
            },
          ],
          problem: [
            'Users juggling 3+ tools for field planning',
            'No unified task management across farms',
            'Lack of offline capabilities in remote regions',
          ],
          opportunity: 'Design a single scalable platform that simplifies workflows, supports offline sync, and aligns with agronomy data models.',
          productGoals: [
            'Design a cohesive UX for task planning, execution, and review. Integrate all Yara apps into one suite.',
            'Integrate weather, soil, and crop data for smarter insights',
            'Optimize for on-the-go usage',
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
            {
              _type: 'block',
              _key: randomUUID(),
              children: [
                {
                  _type: 'span',
                  _key: randomUUID(),
                  text: 'Being part of the discussions with PO & PMs.',
                },
              ],
            },
            {
              _type: 'block',
              _key: randomUUID(),
              children: [
                {
                  _type: 'span',
                  _key: randomUUID(),
                  text: 'Assisting with Roadmap.',
                },
              ],
            },
          ],
          phases: [
            {
              _key: randomUUID(),
              name: 'INITIAL SOLUTIONS STRATEGY',
              description: 'Early strategic planning phase',
              methods: ['Strategy workshops'],
            },
            {
              _key: randomUUID(),
              name: 'ROADMAP',
              description: 'Product roadmap definition',
              methods: ['Roadmap planning'],
            },
            {
              _key: randomUUID(),
              name: 'KICK-OFF & PLANNING',
              description: 'Project kickoff and sprint planning',
              methods: ['Sprint planning', 'Team alignment'],
            },
            {
              _key: randomUUID(),
              name: 'DISCOVERY',
              description: 'User research and insights gathering',
              methods: ['User interviews', 'Field research'],
            },
            {
              _key: randomUUID(),
              name: 'CONCEPT',
              description: 'Ideation and concept development',
              methods: ['Wireframes', 'User flows'],
            },
            {
              _key: randomUUID(),
              name: 'IDEATION',
              description: 'Design exploration and iteration',
              methods: ['Prototyping', 'Design iterations'],
            },
            {
              _key: randomUUID(),
              name: 'DELIVERY',
              description: 'Final designs and handoff',
              methods: ['Design specs', 'Developer handoff'],
            },
            {
              _key: randomUUID(),
              name: 'POST DELIVERY',
              description: 'Post-launch monitoring and improvements',
              methods: ['Analytics review', 'User feedback'],
            },
          ],
        },
        research: {
          text: [
            {
              _type: 'block',
              _key: randomUUID(),
              children: [
                {
                  _type: 'span',
                  _key: randomUUID(),
                  text: 'Methods used:',
                },
              ],
            },
          ],
          methods: [
            {
              _key: randomUUID(),
              title: '12+ user interviews (farmers, agronomists)',
              description: 'We wanted to know how the users were using the legacy tools and what were they expecting from a product suite. These interviews provided some valuable insights.',
            },
            {
              _key: randomUUID(),
              title: 'Journey mapping',
              description: 'to visualize and analyze the steps our users take when interacting with the legacy products in order to improve the customer experience, increase empathy, identify pain points and optimize touchpoints.',
            },
            {
              _key: randomUUID(),
              title: 'Feature audits (Yara legacy tools + competitors)',
              description: 'were integral to see how we should unify Yara\'s disjointed legacy tools. This helped to have a bird\'s eye view of what was lacking and how we should marry the tools into a unified experience.',
            },
            {
              _key: randomUUID(),
              title: 'Heuristic evaluation',
              description: '',
            },
            {
              _key: randomUUID(),
              title: 'Storyboards',
              description: 'helped in communicating problems and solutions in meaningful, story-driven, easily digestible format. I use Procreate/iPad and my own characters to illustrate these storyboards.',
            },
          ],
          challenges: [
            'Yara has a large backlog of user research data accumulated over several years. Times change and so do user feedback.',
            'User interviews were mostly with German, UK and Spanish markets and we needed a native speaker to conduct the interviews',
            'Yara legacy tools were vast and already being used by thousands of users. We needed to find a way to migrate all those users to YaraPlus.',
          ],
          solutions: [
            'Consolidating past research and comparing it with current user requirements to assure we are designing the product that the users need.',
            'Being present in user interviews and leveraging translation for taking notes.',
            'Seamless migration of current users and user accounts prioritized and differentiating between current and new user onboarding for a delightful migration experience.',
            'Comparing featureset of the legacy products improving the same for YaraPlus, our main aim was not to deviate the experience abut from the legacy products experience.',
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
                  text: 'Cross-team workshops: Ran multiple Miro workshops with stakeholders. I wanted to include not just PMs, but also developers, QA testers and Marketing so that we are all working towards a common goal. Feedback was of prime-importance here.',
                },
              ],
            },
            {
              _type: 'block',
              _key: randomUUID(),
              children: [
                {
                  _type: 'span',
                  _key: randomUUID(),
                  text: 'Initial design explorations: Sketches, IA variants, component-level ideas. Using Miro and figma, we went onto create user journeys, wireframes and user flows, we also explored different concepts, from rough sketches to low-fidelity prototypes.',
                },
              ],
            },
            {
              _type: 'block',
              _key: randomUUID(),
              children: [
                {
                  _type: 'span',
                  _key: randomUUID(),
                  text: 'Follow-up meetings: the feedback and the concepts were presented to the stakeholders before proceeding to explorations',
                },
              ],
            },
            {
              _type: 'block',
              _key: randomUUID(),
              children: [
                {
                  _type: 'span',
                  _key: randomUUID(),
                  text: 'Early concepts tested: Testing early with users and stakeholders were crucial so that we all are still on the same page.',
                },
              ],
            },
          ],
          approaches: [
            {
              _key: randomUUID(),
              title: 'Cross-team workshops',
              description: 'Multiple Miro workshops with all stakeholders including developers, QA, and marketing',
            },
            {
              _key: randomUUID(),
              title: 'Initial design explorations',
              description: 'Sketches, IA variants, user journeys, wireframes and user flows from rough to low-fidelity',
            },
            {
              _key: randomUUID(),
              title: 'Follow-up meetings',
              description: 'Presented concepts to stakeholders before proceeding',
            },
            {
              _key: randomUUID(),
              title: 'Early concepts tested',
              description: 'Testing with users and stakeholders to ensure alignment',
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
              _key: randomUUID(),
              children: [
                {
                  _type: 'span',
                  _key: randomUUID(),
                  text: 'YaraPlus the all-in-one platform for fertilization.',
                },
              ],
            },
            {
              _type: 'block',
              _key: randomUUID(),
              children: [
                {
                  _type: 'span',
                  _key: randomUUID(),
                  text: 'YaraPlus is the culmination of',
                },
              ],
            },
          ],
          sections: [
            {
              _key: randomUUID(),
              title: 'Dashboard',
              description: 'Unified dashboard providing overview of all farms, fields, and tasks',
            },
            {
              _key: randomUUID(),
              title: 'Solution cards',
              description: 'Modular approach allowing farmers to select relevant tools',
            },
            {
              _key: randomUUID(),
              title: 'Farm Switcher',
              description: 'Easy switching between multiple farms',
            },
            {
              _key: randomUUID(),
              title: 'Farm Management',
              description: 'Comprehensive farm and field management tools',
            },
            {
              _key: randomUUID(),
              title: 'Field overview (map + list toggle)',
              description: 'Toggle between map and list views for field management',
            },
            {
              _key: randomUUID(),
              title: 'Unified Farm & Field Creation',
              description: 'Streamlined creation flow for farms and fields',
            },
            {
              _key: randomUUID(),
              title: 'News & Events',
              description: 'Stay updated with agricultural news and events',
            },
            {
              _key: randomUUID(),
              title: 'Collaborator Management',
              description: 'Invite and manage team members',
            },
            {
              _key: randomUUID(),
              title: 'YRA Maps (Atfarm)',
              description: 'Advanced mapping and field analytics',
            },
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
                  text: 'Comprehensive design system and component library delivered to engineering team.',
                },
              ],
            },
          ],
          deliverables: [
            'Complete Figma design system',
            'Interactive prototypes',
            'Component documentation',
            'User flow diagrams',
            'Responsive design specifications',
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
                  text: 'YaraPlus successfully launched across 60+ countries with strong adoption rates and positive user feedback.',
                },
              ],
            },
          ],
          results: [
            '85% adoption rate among target users',
            '40% reduction in user dropoff',
            'Deployed in 60+ countries',
            'Improved task completion efficiency by 35%',
            'Positive feedback from agronomists and farmers',
          ],
        },
        learnings: [
          {
            _key: randomUUID(),
            title: 'Multi-market research is complex but valuable',
            description: 'Working across different markets with language barriers taught us the importance of having native speakers and cultural understanding in research.',
          },
          {
            _key: randomUUID(),
            title: 'Legacy migration requires careful planning',
            description: 'Migrating thousands of users from legacy tools required a delicate balance between innovation and familiarity.',
          },
          {
            _key: randomUUID(),
            title: 'Cross-functional collaboration drives success',
            description: 'Including developers, QA, marketing, and product in design workshops led to better solutions and smoother implementation.',
          },
          {
            _key: randomUUID(),
            title: 'User requirements over marketing needs',
            description: 'Standing firm on user-centered design principles, even when facing marketing pressure, ultimately led to better outcomes.',
          },
        ],
      })
      .commit()

    console.log('✓ YaraPlus updated successfully')
  } else {
    console.log('✗ YaraPlus case study not found')
  }

  console.log('\n✓ YaraPlus update complete!')
}

updateYaraPlus()
  .then(() => {
    console.log('\nAll done!')
    process.exit(0)
  })
  .catch((err) => {
    console.error('Error updating YaraPlus:', err)
    process.exit(1)
  })
