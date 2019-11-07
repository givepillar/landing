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
import Give from './give'

const BundleTag = ({ children, slug = '' }) => (
  <a
    className={
      'bg-white shadow-lg text-gray-700 my-2 mx-4 rounded-full px-6 py-1 text-sm' +
      ' hover:bg-gray-25'
    }
  >
    {children}
  </a>
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

          <div>
            <span className="uppercase text-gray-500 text-base font-bold tracking-wide">
              Bundle
            </span>
            <span className="ml-6 text-gray-400 font-bold">
              <i className="fas fa-stream text-gray-300 mr-2"></i>{' '}
              {bundle.nonprofits.length} Nonprofits
            </span>
          </div>
          <div className="flex items-baseline mb-10">
            <p className="text-4xl tracking-wide text-gray-900 font-extrabold mr-4 ">
              <span className="flex-1 w-full">{bundle.name}</span>
            </p>
          </div>
          <h1 className="text-2xl lg:text-3xl">
            <Highlight color={bundle.primaryCategory.colors.light}>
              {bundle.longTitle}
            </Highlight>
          </h1>

          <div
            className="mt-12 article text-lg leading-loose"
            dangerouslySetInnerHTML={{
              __html: bundle.longDescription
                ? bundle.longDescription
                : bundle.description,
            }}
          ></div>

          <h2 className="text-2xl mt-12 mb-6 font-medium">
            What this fund does
          </h2>
          <div className="flex flex-wrap -mx-4">
            {bundle.tags.map(tag => (
              <BundleTag key={tag}>{tag}</BundleTag>
            ))}
          </div>

          <section>
            <h2 className="text-2xl mt-12 mb-6 font-medium">The nonprofits</h2>
            <p className="text-lg leading-loose">
              All donations are split equally among these nonprofits.
            </p>

            <div className="flex flex-wrap -m-6 my-8">
              {bundle.nonprofits &&
                bundle.nonprofits.map(member => (
                  <div
                    key={member.nonprofit.slug}
                    className="p-6 sm:w-1/2 w-full"
                  >
                    <NonprofitCard nonprofit={member.nonprofit} />
                    <p
                      className={
                        'mt-4 text-sm text-gray-600 px-4 py-2  ' +
                        'bg-gray-100 rounded'
                      }
                    >
                      <strong>Why?</strong> {member.why}
                    </p>
                  </div>
                ))}
            </div>
          </section>

          {/* <h2 className="text-2xl mt-12 mb-8 font-medium">Who made this?</h2>
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
          </div> */}
          <section>
            <h2 className="text-2xl mt-12 mb-6 font-medium">Why trust us?</h2>
            <p className="text-lg leading-loose">
              At Pillar we want to make sure your funds go to the right
              organizations. We work to vet and select the best nonprofits. To
              do so we verify that each organization is in good financial,
              operating and legal standing, with an active 501(c)3 status with
              IRS. We then look into each nonprofits programs to confirm that
              they demonstrate tangible results and impact within the issues
              they choose to address.
            </p>
          </section>
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
