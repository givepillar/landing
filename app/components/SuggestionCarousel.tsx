import React from 'react'
import { bundles } from '../mock/data'
import BundleCard from './BundleCard'
import SectionTitle from './ui/SectionTitle'

const SuggestionCarousel = () => (
  <section className="flex flex-col flex-wrap">
    <SectionTitle>You Might Like</SectionTitle>
    <p className="mt-2 mb-4 text-gray-600 max-w-sm">
      Bundles curated by our experts, tailored to your interests, and updated
      weekly.
    </p>
    <div className="flex -mx-8 -mb-8 flex-wrap">
      <div className="w-full md:w-1/2 px-8 my-4">
        <BundleCard large bundle={bundles.climate} />
      </div>
      <div className="w-full md:w-1/2 px-8 my-4">
        <BundleCard large bundle={bundles.mental} />
      </div>
      <div className="w-full md:w-1/2 px-8 my-4">
        <BundleCard large bundle={bundles.reproductive} />
      </div>
      {/* <div className="w-full md:w-1/2 px-8 my-4">
        <BundleCard large bundle={bundles.amazon} />
      </div> */}
    </div>
  </section>
)

export default SuggestionCarousel
