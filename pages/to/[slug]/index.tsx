import { useRouter } from 'next/router'
import React from 'react'
import DonationBox from '../../../app/components/DonationBox'
import Layout from '../../../app/components/Layout'
import Highlight from '../../../app/components/ui/Highlight'
import { bundles } from '../../../app/mock/data'
import { Bundle } from '../../../app/types'
import Link from 'next/link'
import NonprofitCard from '../../../app/components/NonprofitCard'
import { PrimaryButton } from '../../../app/components/ui/Button'

const BundlePage = () => {
  const router = useRouter()
  const { slug } = router.query

  const bundle: Bundle = Object.values(bundles).find(b => b.slug === slug)

  return (
    <Layout title={bundle.name + ' | Pillar'}>
      <div className="flex justify-center flex-col lg:flex-row relative">
        <div className="max-w-full lg:max-w-3xl mb-12 lg:mb-0">
          <div className="image bg-cover bg-center rounded shadow-xl mb-12" />

          <div className="flex items-baseline mb-2">
            <p className="text-sm uppercase tracking-wide text-gray-800 font-semibold mr-4">
              {bundle.name}
            </p>
          </div>
          <h1 className="text-3xl lg:text-5xl font-black">
            <Highlight color={bundle.primaryCategory.colors.light}>
              {bundle.longTitle}
            </Highlight>
          </h1>

          <p className="mt-12 text-lg leading-loose">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            alias repudiandae aut qui, reiciendis quisquam consequuntur
            necessitatibus. Delectus tempore illum ipsam quidem porro voluptas
            explicabo, cupiditate atque inventore repellat sunt, dolore
            consectetur magni similique? Culpa cum odio consequuntur ut rerum
            harum dolor, provident laboriosam dolores commodi illo, odit quas
            qui.
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-medium">
            What this fund does
          </h2>
          <div className="flex -mx-4">
            <div className="rounded border border-gray-50 px-6 py-3 bg-gray-25 mx-4">
              <p className="font-medium">Coral Reef Restoration</p>
            </div>
            <div className="rounded border border-gray-50 px-6 py-3 bg-gray-25 mx-4">
              <p className="font-medium">De-acidification</p>
            </div>
            <div className="rounded border border-gray-50 px-6 py-3 bg-gray-25 mx-4">
              <p className="font-medium">Sustainable fishing</p>
            </div>
          </div>

          <section>
            <h2 className="text-2xl mt-12 mb-6 font-medium">The nonprofits</h2>
            <p className="text-lg leading-loose">
              All donations are split equally among these nonprofits.
            </p>

            <div className="flex flex-wrap -m-6 my-8">
              {bundle.nonprofits &&
                bundle.nonprofits.map(np => (
                  <div key={np.slug} className="p-6 sm:w-1/2 w-full">
                    <NonprofitCard nonprofit={np} />
                  </div>
                ))}
            </div>
          </section>

          <h2 className="text-2xl mt-12 mb-6 font-medium">
            Why you should trust us
          </h2>
          <p className="text-lg leading-loose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            quos, ipsum est unde nostrum qui iure illum deserunt commodi
            architecto nesciunt necessitatibus adipisci labore pariatur quaerat
            sint eos hic voluptates.
          </p>
        </div>
        <div className="max-w-sm w-full lg:pl-16">
          <div className="sticky">
            <DonationBox bundle={bundle} />
          </div>
        </div>
        {/* <div
          className={
            'fixed bg-gray-25 bottom-0 flex justify-center ' +
            'items-center mb-16 p-6 max-w-3xl mx-auto w-full rounded shadow-xl'
          }
        >
          <p className="font-bold text-lg text-gray-500 mr-4">
            Make a difference:
          </p>
          <PrimaryButton size="lg">Support this Fund</PrimaryButton>
        </div> */}
      </div>
      <style jsx>{`
        .image {
          background-image: url(${bundle.imageUrl});
          height: 300px;
        }

        .sticky {
          position: -webkit-sticky;
          position: sticky;
          top: 20px;
        }
      `}</style>
    </Layout>
  )
}

export default BundlePage
