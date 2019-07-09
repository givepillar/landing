import React from 'react'
import { StyleProps } from '../../types'
import classnames from 'classnames'

const Container: React.FC<StyleProps> = ({ children, className, style }) => (
  <div className={classnames('container px-6', className)} style={style}>
    {children}
  </div>
)

export default Container
