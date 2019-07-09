import Link from 'next/link'
import React from 'react'
import { Bundle } from '../types'
import Card from './ui/Card'
import CategoryTag from './ui/CategoryTag'
import Highlight from './ui/Highlight'

interface BundleCardProps {
  bundle: Bundle
  small?: boolean
  large?: boolean
}

const BundleCard: React.SFC<BundleCardProps> = ({ bundle, small, large }) => (
  <Link href="#">
    <a href="#" className="block">
      <div>
        {!small && (
          <div
            className={
              'image rounded bg-cover bg-center  ' + (large ? 'h-32' : 'h-20')
            }
          />
        )}
        <div className=" py-3 bg h-full mt-1">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="inline-block font-bold mr-6">
                <Highlight color={bundle.primaryCategory.colors.light}>
                  {bundle.name}
                </Highlight>
              </p>
            </div>
            <CategoryTag category={bundle.primaryCategory} />
          </div>

          <div className="mt-1">
            <p className="inline-block text-gray-400 text-sm font-semibold mr-4">
              <i className="fas fa-building text-gray-200 mr-1" /> 11 Nonprofits
            </p>
            <p className="inline-block text-gray-400 text-sm font-semibold mr-2">
              <i className="fas fa-hand-holding-usd text-gray-200 mr-1" />{' '}
              $43,000 given
            </p>
          </div>
          <p className="text-sm my-5 text-gray-700">{bundle.description}</p>
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
