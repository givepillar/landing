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
export interface Bundle {
  name: string
  description: string
  imageUrl?: string
  primaryCategory: Category
}

export interface Nonprofit {
  name: string
  description: string
  imageUrl: string
  primaryCategory: Category
}

export interface StyleProps {
  className?: string
  style?: React.CSSProperties
}

export interface PortfolioItem {
  recipient: Bundle | Nonprofit
  amount: number
}
