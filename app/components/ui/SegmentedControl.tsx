import React, { useState } from 'react'
import cn from 'classnames'
import TextInput from './form/TextInput'

interface Option {
  key: string
  value: any
}

interface SegmentedControlProps {
  options: Option[]
  defaultIndex: number
  onChange?: (string) => void
  hasOther?: boolean
  value: any
  otherTransform?: (any) => any
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  defaultIndex,
  onChange = _ => null,
  value,
  hasOther = false,
  otherTransform = _ => _,
}) => {
  const [selected, setSelected] = useState(defaultIndex)
  return (
    <>
      <div className="bg-gray-50 rounded text-gray-600 flex justify-between items-center shadow-lg h-8">
        {options.map((o, i) => (
          <div
            className={cn(
              'flex-1 text-center font-medium select-none cursor-pointer',
              {
                'bg-white shadow-float py-2 rounded font-medium text-blue-800':
                  (!value && i === selected) ||
                  (value && '' + o.value === '' + value),
              }
            )}
            onClick={() => {
              setSelected(i)
              onChange(options[i].value)
            }}
            key={o.key}
          >
            {o.key}
          </div>
        ))}
        {hasOther && (
          <div
            onClick={() => setSelected(-1)}
            className={cn(
              'flex-1 text-center font-medium select-none cursor-pointer',
              {
                'bg-white shadow-float py-2 rounded font-medium text-blue-800':
                  selected === -1,
              }
            )}
          >
            Other
          </div>
        )}
      </div>
      {hasOther && selected === -1 && (
        <div className="my-4">
          <div className="form-input flex items-center">
            <i className="fas fa-dollar-sign pr-2 text-gray-200 block" />
            <input
              type="number"
              className="flex-1 focus:outline-none"
              onChange={e => onChange(otherTransform(e.target.value))}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default SegmentedControl
