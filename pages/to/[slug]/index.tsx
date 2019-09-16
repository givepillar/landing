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
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'

const BundleTag = ({ children, slug = '' }) => (
  <Link href={`/tag/${slug}`}>
    <a
      className={
        'bg-white shadow-lg text-gray-700 my-2 mx-4 rounded-full px-6 py-1 text-sm' +
        ' hover:bg-gray-25'
      }
    >
      {children}
    </a>
  </Link>
)

const GET_BUNDLE = gql`
  query getBundle($slug: String!) {
    bundleBySlug(slug: $slug) {
      bundle {
        id
        name
        description
        image {
          url
        }
        callToAction
        lede
        organizations {
          name
          slug
          image {
            url
          }
        }
        donations {
          numberOfDonations
          numberOfSubscribers
          totalAmountReceived
        }
      }
    }
  }
`

const BundlePage = () => {
  const router = useRouter()
  const { slug } = router.query

  const bundle: Bundle = Object.values(bundles).find(b => b.slug === slug)

  const { loading, error, data } = useQuery(GET_BUNDLE, {
    variables: {
      slug: slug,
    },
  })

  console.log(loading)
  console.log(error)
  console.log(data)

  return (
    <Layout title={bundle.name + ' | Pillar'}>
      <div className="flex justify-center flex-col lg:flex-row relative">
        <div className="max-w-full lg:max-w-3xl mb-12 lg:mb-0">
          <div className="image bg-cover bg-center rounded shadow-xl mb-12" />

          <div className="flex items-baseline mb-2">
            <p className="text-xl uppercase tracking-wide text-gray-800 font-semibold mr-4 ">
              <span className="flex-1 w-full">{bundle.name}</span>
              <span className="text-gray-400 ml-3">
                • 100 Donors • $2,500 raised
              </span>
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
          <div className="flex flex-wrap -mx-4">
            <BundleTag>Coral Reef Restoration</BundleTag>
            <BundleTag>De-Acidification</BundleTag>
            <BundleTag>Sustainable Fishing</BundleTag>
            <BundleTag>Climate Change</BundleTag>
            <BundleTag>Environment</BundleTag>
            <BundleTag>Renewable Energy</BundleTag>
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
                    <p
                      className={
                        'mt-4 text-sm text-gray-600 px-4 py-2  ' +
                        'bg-gray-100 rounded'
                      }
                    >
                      <strong>Why?</strong> They are strong and sexy
                    </p>
                  </div>
                ))}
            </div>
          </section>

          <h2 className="text-2xl mt-12 mb-8 font-medium">Who made this?</h2>
          <div className="flex items-center">
            <div className="mr-10">
              <div
                className="w-40 h-40 bg-cover bg-center rounded-full shadow"
                style={{ backgroundImage: `url(/static/Allen_Bill.jpg)` }}
              ></div>
            </div>
            <div className="flex-1 text-lg leading-loose">
              <p>
                <strong>Bill Allen</strong> held senior management positions in
                three local United Ways, most recently as executive vice
                president of community services at the United Way of Rhode
                Island from 1977 to 2004. He was interim president of United Way
                of Rhode Island in 1996.
              </p>
              <a href="#" className="mt-4 link">
                See his other bundles{' '}
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
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
