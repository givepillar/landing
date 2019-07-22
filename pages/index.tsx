import classnames from 'classnames'
import Link from 'next/link'
import React from 'react'
import Head from '../app/components/Head'
import Footer from '../app/components/ui/Footer'
import Highlight from '../app/components/ui/Highlight'
import Logo from '../app/components/ui/Logo'
import Chart from '../app/img/chart.svg'
import Love from '../app/img/love.svg'
import Meditate from '../app/img/meditate.svg'
import { Categories } from '../app/mock/data'

const funds = [
  {
    name: 'Save the Oceans',
    numOrgs: 4,
    category: {
      name: 'Environment',
      color: 'teal',
    },
    subscribers: '52k',
    description: 'Protect the fragile ecosystems we all rely on.',
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
  <nav className="py-8">
    <div className="flex justify-between items-center">
      <div className="flex-1" />
      <Logo />
      <div className="flex-1 text-right">
        <Link href="/login">
          <a className="text-black font-semibold p-6">
            Login <i className="fas fa-arrow-right text-gray-400 ml-1" />
          </a>
        </Link>
      </div>
    </div>
  </nav>
)

const Hero = () => (
  <div className="">
    <div className="container px-6 pb-16">
      <Nav />
      <div className="max-w-4xl text-center mx-auto mt-12">
        <h1 className="text-5xl leading-tight sm:text-6xl font-black">
          <Highlight color={Categories.health.colors.light}>
            Impact. Easy.
          </Highlight>
        </h1>
        <p className="font-light text-2xl sm:text-4xl leading-normal max-w-2xl mt-12 mx-auto ">
          Pillar is the new way to support the most pressing issues we face.
        </p>

        <form
          action="https://gives.us20.list-manage.com/subscribe/post?u=883f0f3764fd0eae45407ac87&amp;id=3f09e86dbe"
          method="post"
          target="_blank"
          className="my-12"
        >
          <div className="flex bg-white rounded overflow-hidden mb-4 mx-auto max-w-xl shadow-float">
            <input
              type="email"
              required
              placeholder="Your email"
              name="EMAIL"
              className="flex-1 py-4 md:py-0 px-4 text-lg email-input"
            />
            <button
              type="submit"
              className="hidden md:block bg-teal-200 h-full text-teal-800 font-bold px-8 py-3 text-lg"
            >
              Get early access
            </button>
          </div>

          <div className="block md:hidden">
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
          background-image: url('/static/navbg.svg');
          background-size: cover;
          background-position: center;
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
        key={i}
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
        filter: grayscale(20%);
        z-index: 0;
      }

      .card.active {
        z-index: 1;
        @apply shadow-xl;
      }
    `}</style>
  </div>
)

const SectionCopy = ({ theme, title, subtitle, children }) => (
  <div className="md:w-1/2 max-w-md mx-auto">
    <div className={`mb-3 h-1 w-16 bg-${theme}-200`} />
    <div className={`font-normal text-3xl text-${theme}-900`}>
      <h2>{title}</h2>
      <h2 className="opacity-50">{subtitle}</h2>
    </div>
    <p className={` text-xl text-gray-800 leading-normal mt-5`}>{children}</p>
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

// const Footer = ({ children }) => (
//   <footer className="footer py-16 z-0">
//     {children}
//     <div className="container mx-auto px-6 flex justify-between items-baseline">
//       <p className="font-display text-xl">Pillar</p>

//       <ul className="flex text-purple-900">
//         {/* <NavLink href="#">Terms</NavLink> */}
//         {/* <NavLink href="#">Privacy</NavLink> */}
//         <NavLink bold href="mailto:hey@pillar.gives?subject=Website Contact">
//           Contact
//         </NavLink>
//       </ul>
//     </div>
//     <style jsx>{`
//       .footer {
//          {
//           /* background-image: linear-gradient(
//             rgba(255, 255, 255, 1),
//             rgba(255, 255, 255, 0.6)
//           ),
//           url('/static/miniblur2.gif');
//         background-size: cover;
//         border: none; */
//         }
//       }
//     `}</style>
//   </footer>
// )

const Home = () => (
  <div className="w-full">
    <Head title="Pillar" />
    <Hero />

    <div className="container px-6 overflow-hidden mb-20">
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
            We have expertly curated bundles of charities to create maximum
            impact, always up to date. Give once and know that every dollar is
            making the most change. All you need to do is find what resonates
            with you.
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
            title="All of your impact."
            subtitle="All in one place."
            theme="red"
          >
            Forget checkbooks, spreadsheets, and messy folders of receipts. See
            the difference each dollar you give is making from one place, with
            one tax receipt.
          </SectionCopy>
        }
      />
      <Panel
        media={
          <SectionMedia>
            <div className="max-w-sm mx-auto">
              <Love />
            </div>
          </SectionMedia>
        }
        copy={
          <SectionCopy
            title="Give a little."
            subtitle="Change a lot."
            theme="blue"
          >
            Anyone can be a giver. With a $1 minimum donation, give as much or
            little as you can. Let us show you how the smallest amounts make a
            real difference when we all combine our efforts.
          </SectionCopy>
        }
      />
      <Panel
        flip
        media={
          <SectionMedia>
            <div className="max-w-xs mx-auto">
              <Meditate />
            </div>
          </SectionMedia>
        }
        copy={
          <SectionCopy
            title="Charities you can trust."
            subtitle="Without the spam."
            theme="purple"
          >
            We carefully vet nonprofits' tax filings and industry standard
            ratings, alongside our own meticulous research, to find the most
            impactul and trustworthy organizations in every field. Best of all?
            We can protect your info, so no more sifting through hundreds of
            emails and letters asking for your money.
          </SectionCopy>
        }
      />
    </div>

    <OutreachPanel />
    <div className="mb-24" />

    <Footer />
  </div>
)

export default Home
