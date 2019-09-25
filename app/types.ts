export interface Organization {
  color: string
  name: string
  description: string
  logoUrl?: string
  primaryCategory: string
  tags: string[]
}

export interface Category {
  name: string
  colors: {
    light: string
    medium: string
    dark: string
  }
}

export interface BundleMember {
  nonprofit: Nonprofit
  why: string
}
export interface Bundle {
  name: string
  longTitle: string
  description: string
  longDescription?: string
  imageUrl?: string
  primaryCategory: Category
  slug: string
  tags: string[]
  nonprofits: BundleMember[]
}

export interface Nonprofit {
  name: string
  description?: string
  shortDescription: string
  slug: string
  imageUrl?: string
  logoUrl?: string
  // primaryCategory: Category
}

export interface StyleProps {
  className?: string
  style?: React.CSSProperties
}

export interface PortfolioItem {
  recipient: Bundle
  amount: number
}
