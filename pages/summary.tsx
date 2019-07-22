import React from 'react'
import Base from '../app/components/Base'
import Logo from '../app/components/ui/Logo'
import { Container } from 'next/app'

const summary = () => (
  <Base title="Business Overview | Pillar">
    <Container>
      <article className="w-full mx-auto px-6 sm:px-0">
        <div className="mb-8">
          <Logo />
        </div>
        <h1>
          Business &amp; Market Overview{' '}
          <span className="subtitle block sm:inline">
            <span className="hidden sm:inline">// </span>July 2019
          </span>
        </h1>

        <p className="lede">
          We are working within the charitable giving space. We help millennials
          make an impact on the causes they care about. We do this by making
          giving easy, recurrent, and rewarding.
        </p>

        <div className="print:hidden">
          <h2>Contents</h2>
          <ol>
            <li>
              <a href="#problem">The Problem</a>
            </li>
            <li>
              <a href="#solution">Our Solution</a>
            </li>
            <li>
              <a href="#business">Business Model</a>
            </li>
            <li>
              <a href="#demographic">Target Demographic</a>
            </li>

            <li>
              <a href="#team">The Team</a>
            </li>
            <li>
              <a href="#milestones">Milestones and Goals</a>
            </li>
            <li>
              <a href="#market">Appendix: Market Overview</a>
            </li>
          </ol>
        </div>

        <h2 id="problem">The Problem</h2>
        <p>
          Millennials, among others, have causes that are important to them.
          Especially in the current political climate, people find environmental
          and social-justice issues compelling, though this often doesn’t
          translate into their charitable giving or action. When surveyed, many
          young people express a sense of stress, anxiety, or even guilt about
          inaction within these causes. Often, they don’t give, becuase it’s
          difficult to:
        </p>

        <ul>
          <li>Choose amongst various charities doing the same thing</li>
          <li>Assess a charity's impact</li>
          <li>Trust a charity is correctly administering its funds</li>
          <li>Feel that a small donation can make an impact</li>
        </ul>

        <p>
          Billions in social impact are left on the table, while pressing issues
          worsen, and young people remain passive and anxious.
        </p>

        <h2 id="solution">Our Solution</h2>
        <p>
          To lower the barrier of entry to giving we are trying to make it
          straightforward for people concerned about a specific cause to donate
          towards it.
        </p>

        <p>
          We are creating a streamlined giving platform, expertly curating
          nonprofits into "index funds" or bundles to create the greatest impact
          within a cause. To create trust, we will use reputed domain experts to
          help create these funds. Rather than having to find individual and
          trustworthy nonprofits, donors give directly to the causes they care
          about by giving to the fund. This dramatically lowers the barrier of
          entry to social impact and giving.
        </p>

        <p>
          We are bringing the same beautiful and guided experience of personal
          financial apps like Acorns, Mint, and Robinhood to the charitable
          space, guiding users to an established, monthly giving habit. As borne
          out in the financial sector, a sense of automatic, personalized
          guidance is key to lowering the barrier to entry and onboarding users.
        </p>

        <p>
          To make the act of giving itself more rewarding, we are implementing
          social recognition and visibility, alongside providing tangible
          updates on the impact of one’s giving.
        </p>

        <h2 id="business">Business Model</h2>

        <p>
          We take a 7% fee for donations processed on our website. This accounts
          for 2.2% in credit card fees, a 2% fee towards a Donor Advised Fund
          (DAF) provider which processes and distributes the donations, and a 3%
          fee to support the platform. All donations will be tax deductible as
          the DAF is a proxy 501c3 which handles money directly.
        </p>

        <h2 id="demographic">Target Demographic</h2>
        <p>
          We have identified as our target market young people and more
          specifically millennials, in urban centers, who follow current
          affairs, and are entering moderate to high paying jobs.
        </p>

        <p>
          Our market research showed that these people have not begun regular
          donation habits, and simply give reactively when solicited. This is
          different for gen x-ers and beyond who tend to have entrenched giving
          habits which are difficult to shift.
        </p>

        <h2 id="team">Team</h2>

        <p>
          As a team we have been working together for the past two years, having
          met Freshman year at Brown. Since then we have cycled through various
          projects which we have brought to various levels of development. We
          lack experience in the nonprofit domain, so have been working closely
          with Professors at Browns who have had extended careers leading
          nonprofits, and can provide helpful insight.
        </p>

        <h3>John Bitar</h3>
        <p>
          John is focused on consumer on-boarding and outreach, market research,
          and ironing out the business-side of the project. He is a junior
          studying computer science. John worked at an early stage venture
          summer of 2018, called{' '}
          <a href="https://goodbit101.com" target="BLANK">
            Goodbit.
          </a>{' '}
          He joined the group of three founders and helped them with user on
          boarding, negotiating deals with clients, and obtaining funding from
          investors. Throughout he was able not only to see an early stage
          venture go through these processes but also participate. He founded
          the Blockchain at Brown club, and through that worked on obtaining
          funding from outside sources to run events and maintain a constant
          influx of members, using skills similar to those he would employ
          within a startup context.
        </p>

        <h3>Ben Gershuny</h3>
        <p>
          Ben is a software developer and data scientist who will be building
          and scaling the venture’s core software, performing data analysis, and
          contributing to market research and branding. Ben is a junior studying
          Computer Science and Applied Mathematics, with a focus in probability
          and machine learning. He has an extensive technical background in
          mathematics and computer science, and has experience building servers,
          full-stack web apps, and performing rigorous data analysis. He was a
          software developer intern at a financial brokerage called tastyworks,
          where he solely implemented a system for analyzing the stability of
          customer accounts.
        </p>

        <h3>Oscar Newman</h3>
        <p>
          Oscar is a full-stack developer who will be focusing primarily on
          design, user experience, and frontend development in this venture. He
          is a junior studying Computer Science and Public Policy at Brown, with
          an interest in the social applications of computer science and
          technology. He has worked for various startups, both at and outside of
          Brown, on payment experience design, frontend development, and graphic
          design. Last year, he worked with Brown startup ActionAuctions which
          participated in the Brown Venture prize designing and building a
          website which would motivate users to give charitably, and as a result
          also gained experience in integrating payment processing into apps. He
          spent the summer working with SquareLink, a decentralized
          authentication startup out of Cambridge cofounded by a Harvard
          professor. There, he designed and built the company’s entire frontend
          stack (landing page, user-facing app, developer console) on a tight
          launch deadline.
        </p>

        <h2 id="milestones">Milestones Achieved</h2>
        <ul>
          <li>
            Accepted into Brown University Startup Incubator&mdash;Breakthrough
            Labs
          </li>
          <li>Built initial frontend for MVP</li>
          <li>Conducted 87 Market Research Interviews</li>
        </ul>

        <h2>Nearterm Objectives</h2>
        <ul>
          <li>August: Complete MVP Tech</li>
          <li>September: Launch first 5 Funds</li>
          <li>Continuing: Iterate with users to test main assumptions</li>
        </ul>

        <h2 id="market">Appendix: Chartiy and Financial Tech Market</h2>
        <p>
          The platform we are developing delivers the service directly to
          consumers. This model was chosen by analyzing companies that have
          succeeded in the charitable tech space, and in parallel sectors. To
          motivate our product positioning plans, we summarize here existing
          business models and key players in the space.
        </p>

        <h3>
          Charitable Giving Tools & CSR Software &mdash; Sold to Employers (B2B)
        </h3>

        <p>
          These businesses offer software for employers to manage their CSR
          (Corporate Social Responsibility) which they sell to employers via a
          SaaS model. The primary tool within the software package is generally
          a donor-facing platform that helps individual employees to find
          nonprofits they care about and to manage donations to them. The key
          value proposition in this space lies in employers believing that
          subscribing to these kinds of charitable giving platforms — a form of
          embracing social responsibility — will give them leverage in hiring
          and retaining employees.
        </p>

        <h3>Financial Investment Apps</h3>
        <p>
          A great amount of financial apps focused on investing have arisen,
          such as Acorns, Robin Hood, SigFig, and Betterment. These companies
          earn revenue on assets under management, premium plans, and payment
          for order flow.
        </p>

        <p>
          Consistent across the most successful of these companies is a slick
          and modern customer-facing user interface and an overarching sense or
          message of “democratization.” This includes robo-advised investment
          bringing smart savings to the masses, and free trading platforms like
          Robinhood eschewing the traditional fee-per-trade. Consistent with
          this message, it’s the consumer-facing apps, rather than the B2B
          products, which have the highest valuations and most success.
          Robinhood and Acorns, especially, seem to have latched onto a desire
          by consumers for elegant financial tools enabling them to benefit from
          and use their money as only the wealthy were previously able to do.
        </p>

        <h3>B2C Donation Platforms &mdash; Direct Competitors</h3>
        <p>
          In providing donation platforms to customers we see the platforms
          below as some of the most significant tools.
        </p>
        <p>
          <a target="BLANK" href="https://www.fidelitycharitable.org">
            Fidelity Charitable:
          </a>{' '}
          This platforms provides Donor Advised Funds that can be managed
          online. The minimum donation to set up an account is $5,000,
          restricting this tool to wealthy individuals, and skewing its use to
          older users.
        </p>

        <p>
          <a href="https://www.charitynavigator.org" target="BLANK">
            Charity Navigator:
          </a>{' '}
          Although it allows donations to various nonprofits, its main value
          proposition is the ratings it publishes. Again speaking with the team
          at Charity Navigator we learned that the great majority of their users
          are above 55.
        </p>

        <p>
          <a href="https://getmillie.com" target="BLANK">
            Millie:
          </a>{' '}
          Launched in December 2018, it is a giving app catered to millennials
          that seeks to match people with nonprofits in a manner similar to
          Tinder.
        </p>

        <p>
          <a href="https://alma.app" target="BLANK">
            Alma:
          </a>{' '}
          Launched in May 2018, this company focuses on curating lists of
          charities for users. Though they do not explain the reasoning behind
          their choices of charities in any way, neither why they would be
          qualified to make such decisions.
        </p>

        <h3>Key Takeaways</h3>
        <ul>
          <li>B2B market has consolidated players</li>
          <li>
            The message of democratization has been effective for financial apps
          </li>
          <li>Present B2C platforms do not cater for the needs of young</li>
          <li>Recent attempts are validation that this is an existing need</li>
        </ul>

        <p>
          Our platform will distinguish itself from these other players within
          the sector as we will be catering to the needs of millennials, and
          doing our curation by referring to experts in the field, which we have
          access to through the Brown University Network, and Professors who
          have taken on roles as advisors.
        </p>
      </article>
    </Container>

    <style jsx>{`
      article {
        padding-top: 1in;
        padding-bottom: 1in;
        max-width: 6in;
      }
      h1 {
        @apply text-2xl font-sans font-bold text-gray-700;
        @apply mb-10;
      }

      h1 > .subtitle {
        @apply text-gray-500;
      }

      h2 {
        @apply text-gray-800 text-lg font-bold uppercase tracking-wide mb-4 pt-6;
      }

      h3 {
        @apply mb-2 font-semibold pt-4 text-gray-700;
      }

      p {
        @apply mb-6 leading-relaxed;
      }

      a {
        background: linear-gradient(
          0deg,
          theme(colors.teal.100) 50%,
          transparent 50%
        );
        @apply text-teal-900 font-medium;
      }

      ul {
        list-style: inherit;
        @apply mb-6;
        padding-left: 1.5em;
      }

      li {
        @apply leading-relaxed text-base;
      }

      .lede {
        @apply text-lg mb-4;
      }
    `}</style>
  </Base>
)

export default summary
