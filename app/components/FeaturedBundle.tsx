import Link from 'next/link'
import React from 'react'
import { Bundle } from '../types'
import CategoryTag from './ui/CategoryTag'
import { PrimaryButton } from './ui/Button'
import Highlight from './ui/Highlight'

interface FeaturedProps {
  bundle: Bundle
}

const FeaturedBundle: React.SFC<FeaturedProps> = ({ bundle }) => (
  <Link href="/to/[slug]" as={`/to/${bundle.slug}`}>
    <a href="#" className="flex flex-wrap">
      <div className="max-w-md order-2 md:order-1 bg h-full mt-1">
        <div className="flex items-center">
          <p className="text-3xl font-black text-black mr-6">
            <Highlight color={bundle.primaryCategory.colors.light}>
              {bundle.name}
            </Highlight>
          </p>
        </div>

        <div className="mt-3 flex items-baseline ">
          <p className="inline-block text-gray-400 text-sm font-semibold mr-4">
            <i className="fas fa-building text-gray-200 mr-1" /> 11 Nonprofits
          </p>
          <p className="inline-block text-gray-400 text-sm font-semibold mr-2">
            <i className="fas fa-hand-holding-usd text-gray-200 mr-1" /> $43,000
            given
          </p>
          <CategoryTag category={bundle.primaryCategory} />
        </div>
        <p className="leading-relaxed my-5 text-gray-700">
          {bundle.description} Lorem ipsum dolor sit amet consectetur
          adipisicing elit. A, recusandae esse ipsum nisi officia ipsa delectus
          aut ipsam ad vel.
        </p>
        <PrimaryButton>Learn more</PrimaryButton>
      </div>
      <div className="image rounded min-w-full flex-1 order-1 md:order-2 bg-cover bg-center flex-1 md:ml-16 h-64 md:min-w-0 my-6 md:my-0" />

      <style jsx>{`
        .image {
          background-image: url(${bundle.imageUrl});
          border-color: ${bundle.primaryCategory.colors.medium};
        }
      `}</style>
    </a>
  </Link>
)

export default FeaturedBundle
