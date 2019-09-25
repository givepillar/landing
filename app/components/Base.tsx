import React from 'react'
import Head from './Head'

interface BaseProps {
  title?: string
}
const Base: React.SFC<BaseProps> = ({ title = 'Pillar', children }) => (
  <>
    <Head title={title} />
    {children}
  </>
)

export default Base
