import classnames from 'classnames'
import React from 'react'
import { StyleProps } from '../../types'

interface CardProps {
  header?: React.ReactNode
  pad?: boolean
  shadow?: boolean
}

const Card: React.SFC<StyleProps> = ({ children, className }) => (
  <div
    className={classnames(
      'rounded-lg bg-white overflow-hidden border-2 border-gray-100',
      className
    )}
  >
    {children}
  </div>
)

export default Card
