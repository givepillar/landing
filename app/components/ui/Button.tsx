import React from 'react'
import classnames from 'classnames'
import Spinner from './Spinner'

interface ButtonProps {
  size?: string
  loading?: boolean
  className?: string
  uppercase?: boolean
}

const Button: React.SFC<ButtonProps> = ({
  children,
  className,
  loading,
  size = 'md',
  ...props
}) => (
  <button
    {...props}
    className={classnames(
      className,
      {
        'px-6 py-3 text-lg': size === 'lg',
        'px-4 py-2': size === 'md',
        'px-3 py-1 text-sm': size === 'sm',
        'px-3 py-1 text-xs uppercase tracking-wide': size === 'xs',
      },
      'self-start focus:outline-none button flex items-center justify-center'
    )}
  >
    {loading ? <Spinner size={20} /> : children}
  </button>
)

export const PrimaryButton: React.SFC<ButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <Button
    {...props}
    className={classnames(
      className,
      'button bg-gradient text-white tracking-wide rounded font-medium shadow-lg active:shadow'
    )}
  >
    {children}
  </Button>
)

export const SecondaryButton: React.SFC<ButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <Button
    {...props}
    className={classnames(
      className,
      'button bg-gray-100 text-grey-600 tracking-wide rounded font-medium'
    )}
  >
    {children}
  </Button>
)

export const TertiaryButton: React.SFC<ButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <Button
    {...props}
    className={classnames(
      className,
      'button text-grey-500 tracking-wide font-semibold'
    )}
  >
    {children}
  </Button>
)

export default PrimaryButton
