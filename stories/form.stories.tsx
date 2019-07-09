import React, { useState } from 'react'
import '../app/styles/index.css'

import { storiesOf } from '@storybook/react'
import TextInput from '../app/components/ui/form/TextInput'
import RadioGroup from '../app/components/ui/form/RadioGroup'
import Checkbox from '../app/components/ui/form/Checkbox'

storiesOf('Form|Input', module)
  .add('default', () => <TextInput />)
  .add('with placeholder', () => (
    <TextInput placeholder="Enter some text here why don't ya" />
  ))
  .add('with label and type', () => (
    <TextInput title="Email Address" type="email" />
  ))
  .add('with error', () => (
    <TextInput
      title="Confirm Password"
      type="password"
      value="abc"
      error="Passwords don't match"
    />
  ))

const RadioExample = () => {
  const [value, setValue] = useState('option1')
  const options = [
    { name: 'Option 1', value: 'option1' },
    {
      name: 'Option 2',
      value: 'option2',
    },
  ]

  return (
    <RadioGroup
      title="Radio Group"
      name="group"
      value={value}
      onChange={setValue}
      options={options}
    />
  )
}

storiesOf('Form|Radio', module).add('default', () => <RadioExample />)

storiesOf('Form|Checkbox', module).add('default', () => (
  <Checkbox onChange={c => console.log(c)}>This is a test</Checkbox>
))
