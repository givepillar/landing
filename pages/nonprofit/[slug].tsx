import React from 'react'
import { Nonprofit } from '../../app/types'
import { useRouter } from 'next/router'
import { nonprofits } from '../../app/mock/data'
import Layout from '../../app/components/Layout'

const NonprofitPage = () => {
  const router = useRouter()
  const { slug } = router.query

  const np: Nonprofit = Object.values(nonprofits).find(b => b.slug === slug)
  return (
    <Layout title={`${np.name} | Pillar`}>
      <div className="max-w-3xl mx-auto">
        <div className="image bg-cover bg-center rounded shadow-xl mb-12" />

        <div className="flex items-baseline mb-2">
          <p className="text-sm uppercase tracking-wide text-gray-800 font-semibold mr-4">
            Nonprofit
          </p>
        </div>

        <h1 className="text-3xl lg:text-5xl font-black">{np.name}</h1>

        <div
          className="article mt-12 text-lg leading-loose"
          dangerouslySetInnerHTML={{
            __html: np.description ? np.description : np.shortDescription,
          }}
        ></div>
      </div>

      <style jsx>{`
        .image {
          background-image: url(${np.imageUrl});
          height: 300px;
        }
      `}</style>

      <style jsx global>{`
        .nonprofit-description p {
          margin-bottom: 2em;
        }
      `}</style>
    </Layout>
  )
}

export default NonprofitPage
