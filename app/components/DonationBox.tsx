import { Dialog } from '@reach/dialog'
import React, { useState } from 'react'
import { Bundle } from '../types'
import { PrimaryButton, TertiaryButton } from './ui/Button'
import SegmentedControl from './ui/SegmentedControl'
import '@reach/dialog/styles.css'
import { currency, unCurrency } from '../lib/currency'
import TextInput from './ui/form/TextInput'

interface DonationBoxProps {
  bundle: Bundle
}

const donationAmounts = [
  { key: '$5', value: '500' },
  { key: '$15', value: '1500' },
  { key: '$25', value: '2500' },
]

const transform = v => (isNaN(Number(v)) ? 0 : Number(v) * 100)

const timingOptions = [
  { key: 'Monthly', value: true },
  { key: 'One time', value: false },
]
const DonationBox: React.SFC<DonationBoxProps> = ({ bundle }) => {
  const [amountString, setAmountString] = useState('2500')
  const [amount, setAmount] = useState('2500')
  const [showModal, setShowModal] = useState(false)
  const [monthly, setMonthly] = useState(true)

  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-xl overflow-hidden">
      <div className="p-4">
        <p className="text-xl mb-1 font-semibold">Support this cause</p>
        <p className="mb-8 text-gray-700">
          Give a little, or a lot. 100% of your money goes to a nonprofit.
        </p>
        <div className="mb-8">
          <SegmentedControl
            options={donationAmounts}
            defaultIndex={1}
            value={amount}
            onChange={v => setAmount(v)}
          />
        </div>
        <div className="flex items-center mb-12">
          <TextInput
            type="text"
            icon={<i className="fas fa-dollar-sign pr-2 text-gray-200 block" />}
            className="flex-1 focus:outline-nonen bg-transparent"
            value={amount}
            format={currency}
            unformat={v => '' + unCurrency(v)}
            onChange={setAmount}
          />
        </div>
        <div className="mb-8">
          {/* <SegmentedControl
            options={timingOptions}
            defaultIndex={0}
            value={true}
            onChange={v => setMonthly(v)}
          />
          {!monthly && (
            <div className="text-sm mt-6 py-2 px-4 border border-dashed border-gray-100 bg-gray-25 rounded">
              <p className="font-medium mb-1">Try giving monthly</p>
              <p className="leading-normal">
                Giving a smaller amount every month makes a much larger impact
                on nonprofits, and helps them sustain their important work
                throughout the year.import TextInput from './ui/form/TextInput';

              </p>
            </div>
          )} */}
        </div>
        <PrimaryButton
          onClick={() => setShowModal(true)}
          className="w-full mt-6 rounded-full font-bold text-white"
          size="lg"
        >
          Give ${currency(Number(amount))} monthly
          <i className="fas fa-arrow-right ml-2" />
        </PrimaryButton>
        <TertiaryButton className="w-full mt-2">Or give once</TertiaryButton>
      </div>
      <Dialog
        className="rounded shadow-xl max-w-md overflow-hidden"
        style={{ padding: 0 }}
        isOpen={showModal}
        onDismiss={() => setShowModal(false)}
      >
        <div className="p-8">This is a test</div>
        <div className="bg-gray-50 px-8 py-4 flex items-center justify-end">
          <TertiaryButton className="mr-4" onClick={() => setShowModal(false)}>
            Cancel
          </TertiaryButton>
          <PrimaryButton>Next</PrimaryButton>
        </div>
      </Dialog>
    </div>
  )
}

export default DonationBox
