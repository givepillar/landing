import React from 'react'

interface TagProps {
  bgColor?: string
  textColor?: string
}

const Tag: React.FC<TagProps> = ({ children, bgColor, textColor }) => (
  <div
    className="tag inline-block text-xs text-gray-900 font-semibold mb-1 py-px px-3 mr-2 rounded-full"
    style={{ backgroundColor: bgColor, color: textColor }}
  >
    {children}
  </div>
)

export default Tag
