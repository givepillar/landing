import React from 'react'
import Tag from './Tag'
import Link from 'next/link'
import { Organization } from '../../types'

interface OrgCardProps {
  org: Organization
  light?: boolean
}

const OrgCard: React.SFC<OrgCardProps> = ({ org, light }) => (
  <Link href="#">
    <a
      href="#"
      className="card flex flex-col  block org-card rounded-t-sm rounded-b bg-white shadow-lg overflow-hidden hover:shadow-xl">
      <div className="bar w-full" />
      <div className="px-4 py-3 bg h-full">
        <div className="flex">
          <div className="flex-1">
            <Tag>{org.primaryCategory}</Tag>
            <p className="text-lg font-semibold">{org.name}</p>
          </div>
          <div>
            <div className="img" />
          </div>
        </div>
      </div>
      <div className="flex-1" />
      <div className="px-4 py-3 bg h-full">
        {!light && (
          <p className="text-sm mt-4 text-gray-700">{org.description}</p>
        )}
      </div>

      <style jsx>{`
        .bar {
          height: 3px;
          background: ${org.color};
          box-shadow: 0 -2px 8px ${org.color};
        }

        .img {
          background: url(${org.logoUrl || ''}), white;
          @apply shadow-inner rounded-full w-16 h-16 ml-2;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          display: block;
        }

        .card {
          transition: all 0.15s;
        }
      `}</style>
    </a>
  </Link>
)

export default OrgCard
