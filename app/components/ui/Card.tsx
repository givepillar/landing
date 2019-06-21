import React from 'react'
import classnames from 'classnames'

interface CardProps {
  header?: React.ReactNode
  pad?: boolean
  shadow?: boolean
}

const Card: React.SFC<CardProps> = ({
  children,
  header,
  pad = true,
  shadow = false,
}) => (
  <div
    className={classnames(
      'rounded bg-white overflow-hidden border border-gray-200',
      { 'shadow-lg border-none': shadow }
    )}>
    {header && <div className="bg-gray-100 px-6 py-3">{header}</div>}
    <div className={classnames({ 'px-6 py-4': pad })}>{children}</div>
  </div>
)

export default Card
