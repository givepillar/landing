import React, { useState, useEffect } from 'react'

import '../app/styles/index.css'

import { storiesOf } from '@storybook/react'

import BundleCard from '../app/components/BundleCard'
import Spinner from '../app/components/ui/Spinner'
import Button, {
  SecondaryButton,
  TertiaryButton,
} from '../app/components/ui/Button'
import { useInterval } from '../app/lib/useInterval'

const bundle = {
  name: 'Save the Oceans',
  description:
    'Reports show we have 12 years to prevent irreversable damange to our planet. We need to act now to prevent a catastrophe.',
  imageUrl:
    'https://images.unsplash.com/photo-1533713692156-f70938dc0d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
  primaryCategory: {
    name: 'Environment',
    colors: {
      medium: '#D6FFEF',
      light: '#E1FFF3',
      dark: '#115245',
    },
  },
}

// storiesOf('Elements|BundleCard', module)
//   .add('default apperance', () => <BundleCard bundle={bundle} />)
//   .add('large appearance', () => <BundleCard bundle={bundle} large />)
//   .add('small appearance', () => <BundleCard bundle={bundle} small />)

storiesOf('UI|Button', module)
  .add('primary', () => (
    <div className="flex justify-around">
      <Button size="xs">XS Button</Button>
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
    </div>
  ))
  .add('secondary', () => (
    <div className="flex justify-around w-full mb-12">
      <SecondaryButton size="xs">XS Button</SecondaryButton>
      <SecondaryButton size="sm">Small Button</SecondaryButton>
      <SecondaryButton size="md">Medium Button</SecondaryButton>
      <SecondaryButton size="lg">Large Button</SecondaryButton>
    </div>
  ))
  .add('tertiary', () => (
    <div className="flex justify-around">
      <TertiaryButton size="xs">XS Button</TertiaryButton>
      <TertiaryButton size="sm">Small Button</TertiaryButton>
      <TertiaryButton size="md">Medium Button</TertiaryButton>
      <TertiaryButton size="lg">Large Button</TertiaryButton>
    </div>
  ))
  .add('loading', () => (
    <div className="flex justify-around">
      <Button loading />
      <SecondaryButton loading />
      <TertiaryButton loading />
    </div>
  ))

storiesOf('UI|Spinner', module).add('default', () => <Spinner />)
