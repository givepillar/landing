import Link from 'next/link'
import React from 'react'
import { Nonprofit } from '../types'

interface NPCardProps {
  nonprofit: Nonprofit
}

const NonprofitCard: React.SFC<NPCardProps> = ({ nonprofit }) => (
  <Link href="/nonprofit/[slug]" as={`/nonprofit/${nonprofit.slug}`}>
    <a className="block w-full bg-white rounded overflow-hidden shadow-lg">
      <div>
        <div className="image bg-cover bg-center h-24" />
        <div className="px-4 py-3 bg h-full mt-1">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="inline-block font-bold mr-6">
                {/* <Highlight color={bundle.primaryCategory.colors.light}> */}
                {nonprofit.name}
                {/* </Highlight> */}
              </p>
            </div>
            {/* <CategoryTag category={bundle.primaryCategory} /> */}
          </div>

          {/* <p className="text-sm my-5 text-gray-700"> */}
          {/* {nonprofit.shortDescription} */}
          {/* </p> */}
        </div>
        <style jsx>{`
          .image {
            background-image: url(${nonprofit.imageUrl});
          }
        `}</style>
      </div>
    </a>
  </Link>
)

export default NonprofitCard
