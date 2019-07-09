import React from 'react'
import Tag from './Tag'
import Link from 'next/link'
import { Organization } from '../../types'

interface OrgCardProps {
  org: Organization
}

const OrgCard: React.SFC<OrgCardProps> = ({ org }) => (
  <Link href="#">
    <a
      href="#"
      className=" flex flex-col inline-block org-card rounded-t-sm rounded-b bg-white shadow-lg overflow-hidden hover:shadow-xl"
    >
      <div className="px-4 py-3 bg h-full">
        <div className="flex">
          <div className="flex-1">
            <p className="text-lg font-semibold">{org.name}</p>
            <Tag>{org.primaryCategory}</Tag>
          </div>
        </div>
      </div>
      <div className="flex-1" />
      <div className="px-4 py-3 bg h-full">
        <p className="text-sm mt-4 text-gray-700">{org.description}</p>
      </div>
    </a>
  </Link>
)

export default OrgCard
