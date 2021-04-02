export type navType =
  | 'company'
  | 'product'
  | 'developers'
  | 'resources'
  | 'navigation'
  | 'legal'

const navWords = {
  company: ['About', 'Blog', 'Careers', 'Partners', 'Events', 'Press'],
  product: [
    'Features',
    'Customers',
    'Pricing',
    'Enterprise',
    'FAQ',
    "What's new",
  ],
  developers: [
    'Quick start',
    'Documentation',
    'Sample projects',
    'API reference',
    'API status',
  ],
  resources: [
    'Get started',
    'Support',
    'Community',
    'Contact',
    'Guides',
    'Sitemap',
  ],
  navigation: ['About', 'Blog', 'Product', 'Contact'],
  legal: ['License', 'Terms of service', 'Privacy policy'],
}

export default navWords
