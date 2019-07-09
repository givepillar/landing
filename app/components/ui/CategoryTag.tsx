import React from 'react'
import Tag from './Tag'
import { Category } from '../../types'

interface CategoryTagProps {
  category: Category
}
const CategoryTag: React.SFC<CategoryTagProps> = ({ category }) => (
  <Tag bgColor={category.colors.light} textColor={category.colors.dark}>
    {category.name}
  </Tag>
)

export default CategoryTag
