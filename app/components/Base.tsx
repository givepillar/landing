import React from 'react'
import Head from './Head'

interface BaseProps {
  title?: string
}
const Base: React.SFC<BaseProps> = ({ title = 'Pillar', children }) => (
  <div>
    <Head title={title} />
    {children}
  </div>
)

export default Base
