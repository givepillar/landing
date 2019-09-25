import React from 'react'
import Head from './Head'

interface BaseProps {
  title?: string
}
const Base: React.SFC<BaseProps> = ({ title = 'Pillar', children }) => (
  <>
    <div className="flex-1 flex">
      <Head title={title} />
      {children}
    </div>
  </>
)

export default Base
