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

export const nonprofits = {
  edd: {
    slug: 'edf',
    name: 'Environmental Defense Fund',
    programExpense: 79.1,
    charityNavigator: 98.48,
    programs: 'Climate and energy, oceans, ecosystems',
    imageUrl:
      'https://images.unsplash.com/photo-1508791290064-c27cc1ef7a9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80',
  },
  conservancy: {
    slug: 'nature-conservancy',
    name: 'The Nature Conservancy',
    programExpense: 71.2,
    charityNavigator: 84.35,
    programs:
      'Climate change, fire, fresh water, forests, invasive species, and marine ecosystems',
    imageUrl:
      'https://images.unsplash.com/photo-1544143564-b80b0bf401d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
  nrdc: {
    slug: 'nrdc',
    name: 'Natural Resources Defense Council',
    imageUrl:
      'https://images.unsplash.com/photo-1472525827684-e2203602f702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1945&q=80',
    programExpense: 83.6,
    programs:
      'Climate, land, wildlife, water, oceans, energy, food, sustainable communities',
    charityNavigator: 96.35,
  },
  rivers: {
    slug: 'rivers',
    name: 'American Rivers',
    imageUrl:
      'https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    programs: 'River restoration, federal river management, clean water supply',
    programExpense: 74.9,
    charityNavigator: 88.18,
  },
  trust: {
    slug: 'trust-for-public-land',
    name: 'Trust for Public Land',
    imageUrl:
      'https://images.unsplash.com/photo-1537574957746-0b73f5b105cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
    programExpense: 84,
    programs: 'Park Accesiblity',
  },
  sierra: {
    slug: 'sierra-club',
    name: 'Sierra Club',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/21/Adams_The_Tetons_and_the_Snake_River.jpg',
    programExpense: 88.5,
    charityNavigator: 94.08,
    programs:
      'Beyond Coal, Chapter and Group Education Project, Our Wild America',
  },
}

export const bundles = {
  oceans: {
    name: 'Save the Oceans',
    longTitle:
      'We have 12 years left. We need to protect oceans and the environment.',
    description:
      'Reports show we have 12 years to prevent irreversable damange to our planet. We need to act now to prevent a catastrophe.',
    imageUrl:
      'https://images.unsplash.com/photo-1533713692156-f70938dc0d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
    primaryCategory: Categories.environment,
    slug: 'save-the-oceans',
    nonprofits: [...Object.values(nonprofits)],
  },
  choice: {
    name: 'Right to Choose',
    longTitle: "It's time to stand up and protect the right to choose.",
    description:
      'Many states are launching an assault on reproductive rights. Support organizations which are devoted to protecting choice.',
    primaryCategory: Categories.women,
    imageUrl:
      'https://images.unsplash.com/photo-1488942446680-85dd7de440ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
    slug: 'the-right-to-choose',
  },
  rare: {
    name: 'Rare Diseases',
    longTitle: 'Protect the most vunlerable among us, one disease at a time.',
    description: 'Protect the most vunlerable among us',
    primaryCategory: Categories.health,
    imageUrl:
      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    slug: 'rare-diseases',
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
