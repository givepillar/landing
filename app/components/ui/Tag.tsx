import React from 'react'

interface TagProps {
  dark?: boolean
}

const Tag: React.FC<TagProps> = ({ children, dark = false }) => (
  <div
    className={
      'tag inline-block text-xs text-gray-900 font-medium mb-1 px-2 mr-2 rounded-sm' +
      (dark ? ' tag-dark' : '')
    }>
    {children}

    <style jsx>{`
      .tag {
        background: color(theme(colors.gray.200) l(+4%));
      }

      .tag.tag-dark {
        background: rgba(0, 0, 0, 0.15);
        @apply text-black;
      }
    `}</style>
  </div>
)

export default Tag
