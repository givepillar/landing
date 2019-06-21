import React from 'react'
import Head from '../app/components/Head'
import classnames from 'classnames'
import Chart from '../app/img/chart.svg'
import Vault from '../app/img/vault.svg'
import Slider from 'react-slick'

const funds = [
  {
    name: 'Save the Oceans',
    numOrgs: 4,
    category: {
      name: 'Environment',
      color: 'teal',
    },
    subscribers: '52k',
    description: 'Seals, coral, kelp. All the good stuff.',
    image:
      'https://images.unsplash.com/photo-1496815179167-7bed3ba04811?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
  },
  {
    name: 'Rare Diseases',
    numOrgs: 12,
    category: {
      name: 'Health & Wellness',
      color: 'red',
    },
    subscribers: '9.5k',
    description: 'Help protect the most vulnerable among us',
    image:
      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
  {
    name: 'The Right to Choose',
    numOrgs: 4,
    category: {
      name: 'Equality',
      color: 'purple',
    },
    subscribers: '52k',
    description: 'Protect from attacks on choice around the country.',
    image:
      'https://images.unsplash.com/photo-1488942446680-85dd7de440ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3067&q=80',
  },
]

const NavLink = ({ children, href = '/', bold = false }) => (
  <li className={classnames('ml-4', { 'font-bold': bold })}>
    <a href={href}>{children}</a>
  </li>
)

const Nav = () => (
  <nav className="py-3">
    <div className="flex justify-between items-baseline">
      <p className="logo font-display text-4xl">Pillar</p>

      <ul className="flex">
        {/* <NavLink href="#">For Nonprofits</NavLink> */}
        {/* <NavLink href="#">Sign in</NavLink> */}
        <NavLink href="#" bold>
          Get early access
        </NavLink>
      </ul>
    </div>

    <style jsx>{`
      .logo {
        opacity: 0.9;
      }
    `}</style>
  </nav>
)

const Hero = () => (
  <div className="hero">
    <div className="container px-6 sm:px-0 pb-16">
      <Nav />
      <div className="max-w-4xl mx-auto mt-12">
        <h1 className="text-5xl leading-tight sm:text-6xl font-black">
          Impact. Easy.
        </h1>
        <p className="font-light text-2xl sm:text-4xl leading-normal max-w-2xl antialiased">
          Pillar is an all new way to support the causes that matter to you.
        </p>

        <form
          action="https://gives.us20.list-manage.com/subscribe/post?u=883f0f3764fd0eae45407ac87&amp;id=3f09e86dbe"
          method="post"
          target="_blank"
          className="block my-12"
        >
          <div className="hidden md:block rounded overflow-hidden my-12 max-w-xl flex shadow-float">
            <input
              type="email"
              required
              placeholder="Your email"
              name="EMAIL"
              className="flex-1 px-4 text-lg email-input"
            />
            <button
              type="submit"
              className=" bg-teal-200 text-teal-800 font-bold px-8 py-3 text-lg"
            >
              Get early access
            </button>
          </div>

          <div className="block md:hidden">
            <input
              type="email"
              required
              placeholder="Your email"
              name="EMAIL"
              className="block appearance-none w-full bg-white shadow-float rounded px-4 py-3 mb-4 text-lg email-input"
            />
            <button
              type="submit"
              className="w-full rounded shadow-float bg-teal-200 text-teal-800 font-bold px-8 py-3 text-lg"
            >
              Get early access
            </button>
          </div>
        </form>
      </div>
    </div>
    <style jsx>
      {`
        .hero {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.6),
              rgba(255, 255, 255, 1) 90%
            ),
            url('/static/miniblur2.gif');
          background-size: cover;
          border: none;
          padding: 0;
        }
        .email-input::placeholder {
          color: theme(colors.gray.600);
          opacity: 1;
        }
      `}
    </style>
  </div>
)

const FundCard = ({ fund }) => (
  <div className="w-full card bg-white rounded overflow-hidden shadow-float max-w-xs">
    <div
      className="bg-cover h-20 bg-center"
      style={{ backgroundImage: `url(${fund.image})` }}
    />
    <div className="px-4 pt-4 pb-6">
      <div className="flex justify-between items-center mb-1">
        <p className="text-lg font-bold mr-6">{fund.name}</p>
        <span
          className={`bg-${fund.category.color}-100 text-${
            fund.category.color
          }-900 font-medium rounded-full px-4 text-xs`}
          style={{ paddingTop: 2, paddingBottom: 2 }}
        >
          {fund.category.name}
        </span>
      </div>
      <p className="uppercase tracking-wide text-xs font-medium text-gray-600 mb-4">
        {fund.numOrgs} Nonprofits • {fund.subscribers} Subscribers
      </p>
      <p className="text-sm text-gray-700">{fund.description}</p>
    </div>
    <style jsx>{`
      .card {
        transition: all 0.15s;
      }

      .card:hover {
         {
          /* margin-top: -2px; */
        }
         {
          /* transform: scale(1.01); */
        }
      }
    `}</style>
  </div>
)

const FundList = ({ funds }) => (
  <div className="flex flex-col items-center">
    {funds.map((fund, i) => (
      <div
        className={
          'card -my-2 w-full flex justify-center ' + (i == 1 ? 'active' : '')
        }
      >
        <FundCard fund={fund} />
      </div>
    ))}
    <style jsx>{`
      .card:not(.active) {
        transform: scale(0.9);
        opacity: 0.8;
        z-index: 0;
      }

      .card.active {
        z-index: 1;
      }
    `}</style>
  </div>
)

const SectionCopy = ({ theme, title, subtitle, children }) => (
  <div className="md:w-1/2 max-w-md mx-auto">
    <div className={`mb-2 h-1 w-16 bg-${theme}-200`} />
    <div className={`font-medium text-3xl text-${theme}-900`}>
      <h2>{title}</h2>
      <h2 className="opacity-50">{subtitle}</h2>
    </div>
    <p className={` text-xl text-gray-800 leading-normal mt-4`}>{children}</p>
  </div>
)

const SectionMedia = ({ children }) => (
  <div className="w-full max-w-xs mx-auto md:w-1/2 mb-12 sm:mb-0 order-first md:order-none">
    {children}
  </div>
)

const Panel = ({ media, copy, flip = false }) => (
  <div className="pt-6 pb-40">
    <div className="mx-auto flex flex-col md:flex-row items-center ">
      {flip ? media : copy}
      {flip ? copy : media}
    </div>
  </div>
)

const OutreachPanel = () => (
  <div className="text-center shadow-float rounded bg-white z-20 p-10 max-w-2xl mx-auto">
    <div className="h-1 bg-teal-200 w-16 mx-auto mb-1" />
    <h2 className="text-teal-800 font-medium text-3xl mb-8">
      Are you a nonprofit?
    </h2>
    <p className="text-xl text-gray-700 max-w-lg mb-12 mx-auto">
      We're looking for nonprofits who are excited to try new things and reach
      new audiences. If that sounds like you, drop us a line and we'd love to
      talk.
    </p>
    <a
      href="mailto:nonprofit@pillar.gives?subject=I'm a nonprofit!"
      className="text-teal-800 font-bold bg-teal-200 rounded shadow-float py-2 px-8 inline-block"
    >
      Let's talk charity
    </a>
  </div>
)

const Footer = ({ children }) => (
  <footer className="footer py-16 z-0">
    {children}
    <div className="conatiner px-6 flex justify-between items-baseline">
      <p className="font-display text-xl">Pillar</p>

      <ul className="flex text-purple-900">
        <NavLink href="#">Terms</NavLink>
        <NavLink href="#">Privacy</NavLink>
        <NavLink bold href="#">
          Contact
        </NavLink>
      </ul>
    </div>
    <style jsx>{`
      .footer {
        background-image: linear-gradient(
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0.6)
          ),
          url('/static/miniblur2.gif');
        background-size: cover;
        border: none;
      }
    `}</style>
  </footer>
)

const Home = () => (
  <div className="w-full">
    <Head />
    <Hero />

    <div className="container px-6 overflow-hidden">
      <Panel
        media={
          <SectionMedia>
            <FundList funds={funds} />
          </SectionMedia>
        }
        copy={
          <SectionCopy
            title="Give to causes directly."
            subtitle="We'll do the heavy lifting."
            theme="teal"
          >
            You have causes on your mind. Let us help you translate them into
            action. We have experts curate bundles of charities to represent the
            causes that are on your mind. All you need to do is find what
            resonates with you.
          </SectionCopy>
        }
      />
      <Panel
        flip
        media={
          <SectionMedia>
            <div className="max-w-sm mx-auto">
              <Chart />
            </div>
          </SectionMedia>
        }
        copy={
          <SectionCopy
            title="See your impact."
            subtitle="All in one place."
            theme="red"
          >
            Instead of scattering your giving all across the web. See the
            difference each dollar is making from one platform
          </SectionCopy>
        }
      />
      <Panel
        media={
          <SectionMedia>
            <div className="max-w-xs mx-auto">
              <Vault />
            </div>
          </SectionMedia>
        }
        copy={
          <SectionCopy
            title="Charities you can trust."
            subtitle="With security from the start."
            theme="purple"
          >
            We carefully vet nonprofits 990 forms and refer to Charity
            Navigator's ratings, the industry standard, to connect you with
            organizations you can believe in. And best of all, we can safeguard
            your information, so you will not be solicited every other day.
          </SectionCopy>
        }
      />
    </div>

    <Footer>
      <div className="-mt-32 mb-32">
        <OutreachPanel />
      </div>
    </Footer>
  </div>
)

export default Home
