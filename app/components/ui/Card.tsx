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
      'rounded-lg bg-white overflow-hidden shadow-lg',
      className
    )}
  >
    {children}
  </div>
)

export default Card
