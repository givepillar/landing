import React from 'react'
import { StyleProps } from '../../types'

const SectionTitle: React.SFC<StyleProps> = ({ children, className }) => (
  <h2
    className={
      'uppercase tracking-wide font-semibold text-gray-700 ' + className
    }
  >
    {children}
  </h2>
)

export default SectionTitle
