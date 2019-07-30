import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'
import React, { useState } from 'react'
import { Bundle } from '../types'
import { PrimaryButton, TertiaryButton } from './ui/Button'
import SegmentedControl from './ui/SegmentedControl'
import Link from 'next/link'

interface DonationBoxProps {
  bundle: Bundle
}

const donationAmounts = [
  { key: '$5', value: '500' },
  { key: '$15', value: '1500' },
  { key: '$25', value: '2500' },
]

const DonationBox: React.SFC<DonationBoxProps> = ({ bundle }) => {
  const [showAmounts, setShowAmounts] = useState(false)
  const [amount, setAmount] = useState(2500)

  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-xl overflow-hidden">
      <div className="p-4">
        <p className="text-xl mb-1 font-semibold">Want to do something?</p>
        <p className="mb-6 text-gray-700">
          Support this cause by giving monthly.
        </p>
        {/* <div className="mb-8">
          <SegmentedControl
            options={donationAmounts}
            defaultIndex={1}
            value={amount}
            onChange={v => setAmount(v)}
          />
        </div> */}
        <div className="flex items-center mb-12">
          {/* <TextInput
            type="text"
            icon={<i className="fas fa-dollar-sign pr-2 text-gray-200 block" />}
            className="flex-1 focus:outline-none bg-transparent"
            value={amount}
            format={currency}
            unformat={v => '' + unCurrency(v)}
            onChange={setAmount}
          /> */}
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
import SegmentedControl from './ui/SegmentedControl';
import { currency } from '../lib/currency';

              </p>
            </div>
          )} */}
        </div>
        <>
          <Link href="/to/[slug]/give" as={`/to/${bundle.slug}/give`}>
            <PrimaryButton
              onClick={() => setShowAmounts(true)}
              className="w-full mt-6 font-bold text-white"
              size="lg"
            >
              <i className="fas fa-plus mr-2 text-red-200" />
              Support this cause
            </PrimaryButton>
          </Link>
          {/* <TertiaryButton className="w-full mt-2">Or give once</TertiaryButton> */}
        </>
      </div>
      <Dialog
        className="rounded shadow-xl max-w-md overflow-hidden"
        style={{ padding: 0 }}
        isOpen={false}
        onDismiss={() => setShowAmounts(false)}
      >
        <div className="p-8">This is a test</div>
        <div className="bg-gray-50 px-8 py-4 flex items-center justify-end">
          <TertiaryButton
            className="mr-4"
            onClick={() => setShowAmounts(false)}
          >
            Cancel
          </TertiaryButton>
          <PrimaryButton>Next</PrimaryButton>
        </div>
      </Dialog>
    </div>
  )
}

export default DonationBox
