import Link from 'next/link'
import React from 'react'
import { Bundle } from '../types'
import CategoryTag from './ui/CategoryTag'
import Highlight from './ui/Highlight'

interface BundleCardProps {
  bundle: Bundle
  small?: boolean
  large?: boolean
}

const BundleCard: React.SFC<BundleCardProps> = ({ bundle, small, large }) => (
  <Link href="/to/[slug]" as={`/to/${bundle.slug}`}>
    <a className="block ">
      <div>
        {!small && (
          <div
            className={
              'image -m-2 relative z-10 rounded-lg shadow-lg bg-cover bg-center  ' +
              (large ? 'h-32' : 'h-20')
            }
          />
        )}
        <div className="bg-white rounded-lg shadow-lg relative z-0 px-3 pb-3 pt-6 bg h-full mt-1">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="inline-block text-2xl text-gray-700 font-bold mr-6">
                {bundle.name}
              </p>
            </div>
            <p className="inline-block text-gray-400 text-sm font-semibold mr-4">
              <i className="fas fa-stream text-gray-200 mr-1" />{' '}
              {bundle.nonprofits.length} Nonprofits
            </p>
          </div>

          {!small && (
            <p className="text leading-loose mb-5 mt-3 text-gray-600">
              {bundle.description}
            </p>
          )}
        </div>
        <style jsx>{`
          .image {
            background-image: url(${bundle.imageUrl});
            border-color: ${bundle.primaryCategory.colors.medium};
          }
        `}</style>
      </div>
    </a>
  </Link>
)

export default BundleCard
