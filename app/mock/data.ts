import { PortfolioItem } from '../types'

export const Categories = {
  environment: {
    name: 'Environment',
    colors: {
      dark: '#115245',
      medium: '#65D6AD',
      light: '#E1FFF3',
    },
  },
  women: {
    name: "Women's Rights",
    colors: {
      dark: '#4E4C4A',
      medium: '#FBD38D',
      light: '#FFEFDA',
    },
  },
  health: {
    name: 'Health & Wellness',
    colors: {
      dark: '#4E4A4A',
      medium: '#FEB2B2',
      light: '#FFDADA',
    },
  },
}

export const bundles = {
  oceans: {
    name: 'Save the Oceans',
    description:
      'Reports show we have 12 years to prevent irreversable damange to our planet. We need to act now to prevent a catastrophe.',
    imageUrl:
      'https://images.unsplash.com/photo-1533713692156-f70938dc0d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
    primaryCategory: Categories.environment,
  },
  choice: {
    name: 'Right to Choose',
    description:
      'Many states are launching an assault on reproductive rights. Support organizations which are devoted to protecting choice.',
    primaryCategory: Categories.women,
    imageUrl:
      'https://images.unsplash.com/photo-1488942446680-85dd7de440ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
  },
  rare: {
    name: 'Rare Diseases',
    description: 'Protect the most vunlerable among us',
    primaryCategory: Categories.health,
    imageUrl:
      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
}

export const portfolio: PortfolioItem[] = [
  {
    recipient: bundles.oceans,
    amount: 250,
  },
  {
    recipient: bundles.choice,
    amount: 100,
  },
  {
    recipient: bundles.rare,
    amount: 500,
  },
]
