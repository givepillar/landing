import cn from 'classnames'
import React, { useEffect, useState } from 'react'
import Layout from '../../app/components/Layout'

const Section = ({ children }) => (
  <section className="mb-24 flex flex-col items-center">{children}</section>
)
const Title = ({ children }) => (
  <h1 className="text-3xl md:text-4xl font-sans font-bold">{children}</h1>
)
const Description = ({ children }) => (
  <p className="text-lg leading-relaxed text-gray-700 mt-4 max-w-lg">
    {children}
  </p>
)
const Kicker = ({ children }) => (
  <p className="uppercase font-bold text-gray-300 tracking-wide">{children}</p>
)

const SectionHeader = ({ children }) => (
  <div className="mb-12 text-center">{children}</div>
)

const ToggleCheck = ({ toggled }) => (
  <div
    className={cn(
      'w-6 h-6 border border-gray-100 rounded-full',
      'flex items-center justify-center text-xs text-white',
      {
        'bg-green-400 border-none': toggled,
      }
    )}
  >
    {toggled && <i className="fas fa-check" />}
  </div>
)

const ToggleCard = ({ category, onChange, disabled = false }) => {
  const [clicked, setClicked] = useState(false)

  useEffect(() => onChange(clicked), [clicked])

  return (
    <div
      className={cn(
        'card inline-block bg-white rounded shadow w-64 px-4 py-4 cursor-pointer',
        {
          'bg-green-500 text-white': clicked,
          'opacity-50 pointer-events-none': disabled,
        }
      )}
      onClick={() => setClicked(!clicked)}
    >
      <div className="flex justify-between mb-2">
        <p className="font-bold">{category.name}</p>
        <ToggleCheck toggled={clicked} />
      </div>
      <div
        className={cn('text-gray-600 -mt-1 flex items-center', {
          'text-green-100': clicked,
        })}
      >
        <div className="inline-block mr-1 flex items-center">
          <div
            className={cn(
              'inline-block rounded-full h-4 w-4 bg-gray-100 border border-white',
              { 'bg-green-300 border-green-500': clicked }
            )}
          />
          <div
            className={cn(
              'inline-block rounded-full h-4 w-4 bg-gray-100 border border-white -ml-2',
              { 'bg-green-300 border-green-500': clicked }
            )}
          />
          <div
            className={cn(
              'inline-block rounded-full h-4 w-4 bg-gray-100 border border-white -ml-2',
              { 'bg-green-300 border-green-500': clicked }
            )}
          />
        </div>
        <span>{category.supporters} supporters</span>
      </div>

      <style jsx>{`
        .card {
          transition: all 0.15s;
        }

        .card:hover {
          transform: scale(1.02);
          @apply shadow-lg;
        }
      `}</style>
    </div>
  )
}

const categories = [
  {
    name: 'The Environment',
    supporters: '12.4k',
  },
  {
    name: 'Climate Change',
    supporters: '260',
  },
  {
    name: 'Reproductive Rights',
    supporters: '18.2k',
  },
  {
    name: 'Health & Wellness',
    supporters: '1.2k',
  },
  {
    name: 'Fighting Poverty',
    supporters: '5.4k',
  },
  {
    name: "Womens' Rights",
    supporters: '8.3k',
  },
  {
    name: 'Fighting Homelessness',
    supporters: '3.1k',
  },
  {
    name: 'Education',
    supporters: '126',
  },
]

const AmountButton = ({ children, index, onClick, selected }) => (
  <button
    onClick={() => onClick(index)}
    className={cn(
      'btn p-6 bg-white shadow flex items-center ',
      'mx-4 rounded font-semibold focus:outline-none',
      {
        'text-white bg-green-500': selected,
      }
    )}
  >
    <ToggleCheck toggled={selected} />
    <div className="ml-4">{children}</div>

    <style jsx>{`
      .btn {
        transition: all 0.15s;
      }

      .btn:hover {
        transform: scale(1.02);
        @apply shadow-lg;
      }
    `}</style>
  </button>
)

const BudgetPicker = () => {
  const [selected, setSelected] = useState(1)

  return (
    <div className="flex items-start flex-wrap">
      <AmountButton index={0} selected={selected === 0} onClick={setSelected}>
        $1 to $20
      </AmountButton>
      <AmountButton index={1} selected={selected === 1} onClick={setSelected}>
        $20 to $100
      </AmountButton>
      <AmountButton index={2} selected={selected === 2} onClick={setSelected}>
        Above $100
      </AmountButton>
    </div>
  )
}

const Overview = () => {
  const [cats, setCategories] = useState([])

  const update = (cat, value) => {
    if (cats.includes(cat.name) && !value) {
      setCategories(cats.filter(c => c !== cat.name))
    } else if (value) {
      setCategories([...cats, cat.name])
    }
  }

  useEffect(() => {
    console.log(cats)
  }, [cats])

  return (
    <Layout>
      <Section>
        <SectionHeader>
          <Kicker>Step 1</Kicker>
          <Title>What keeps you up at night?</Title>
          <Description>
            Welcome to Pillar! Let's find out how you can make the most impact.
            Pick at 1 to 3 causes that matter to you lately.
          </Description>
        </SectionHeader>

        <div className="flex flex-wrap justify-center -m-4">
          {categories.map((cat, i) => (
            <div className="p-4" key={i}>
              <ToggleCard
                category={cat}
                onChange={v => update(cat, v)}
                disabled={!cats.includes(cat.name) && cats.length >= 3}
              />
            </div>
          ))}
        </div>

        {/* <div className="w-full flex justify-center mt-8">
        <TertiaryButton>Load More Categories</TertiaryButton>
      </div> */}
      </Section>

      <Section>
        <SectionHeader>
          <Kicker>Step 2</Kicker>
          <Title>What's your budget?</Title>
          <Description>How much do you want to give every month?</Description>
        </SectionHeader>

        <div className="text-left">
          <BudgetPicker />
        </div>
      </Section>

      <Section>
        <SectionHeader>
          <Kicker>Step 3</Kicker>
          <Title>Pick your causes</Title>
        </SectionHeader>
      </Section>
    </Layout>
  )
}

export default Overview
