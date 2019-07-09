import React from 'react'
import InputLabel, { ErrorText } from './InputLabel'
import cn from 'classnames'

interface InputProps {
  title?: string
  error?: string
  onChange?: (string) => void
  onBlur?: (string) => void
  value?: string
  type?: string
  [id: string]: any // For any arbitary input prop
}

const TextInput: React.FC<InputProps> = ({
  title,
  error,
  onChange = (_: string) => _,
  onBlur = (_: string) => _,
  value,
  type = 'text',
  ...props
}) => (
  <label className="block">
    {title && <InputLabel error={!!error}>{title}</InputLabel>}
    <input
      type={type}
      value={value}
      className={cn('form-input block', {
        'border-red-500 text-red-600': error,
      })}
      onChange={e => onChange(e.target.value)}
      onBlur={e => onBlur(e.target.value)}
      {...props}
    />
    {error && <ErrorText>{error}</ErrorText>}
  </label>
)

export default TextInput
