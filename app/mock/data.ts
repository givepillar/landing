import { PortfolioItem } from '../types'

export const Categories = {
  environment: {
    name: 'Environment',
    colors: {
      dark: '#115245',
      medium: '#65D6AD',
      light: '#E1FFF3',
    },
  },
  sustainability: {
    name: 'Sustainability',
    colors: {
      dark: '#115245',
      medium: '#65D6AD',
      light: '#E1FFF3',
    },
  },
  women: {
    name: "Women's Rights",
    colors: {
      dark: '#4E4C4A',
      medium: '#FBD38D',
      light: '#FFEFDA',
    },
  },
  health: {
    name: 'Mental Health',
    colors: {
      dark: '#4E4A4A',
      medium: '#FEB2B2',
      light: '#FFDADA',
    },
  },
  disaster: {
    name: 'Disaster Relief',
    dark: '#4E4A4A',
    medium: '#FEB2B2',
    light: '#FFDADA',
  },
}

export const nonprofits = {
  edf: {
    slug: 'edf',
    name: 'Environmental Defense Fund',
    shortDescription: `One of the world's largest environmental organizations, with more than 2.5 million members and a staff of 700 scientists, economists, policy experts, and other professionals around the world.`,
    imageUrl:
      'https://images.unsplash.com/photo-1508791290064-c27cc1ef7a9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80',
    description: `<p>One of the world's largest environmental organizations, with more than 2.5 million members and a staff of 700 scientists, economists, policy experts, and other professionals around the world.</p>
    <p>They have been conducting work to move forward on what they have identified as the most important objectives in safeguarding the environment.</p>
    <ul>
    <li>Moving to a 100% clean economy</li>
    <li>Making sustainable fishing the norm</li>
    <li>Safeguarding ecosystems</li>
    <li>Reducing Health concerns stemming from exposure to pollutants</li>
    </ul>
    <p>They recognize that the battle against climate change is not only a national issue but a global issue and have been working to address it.</p>`,
  },

  nrdc: {
    slug: 'nrdc',
    name: 'Natural Resources Defense Council',
    imageUrl:
      'https://images.unsplash.com/photo-1472525827684-e2203602f702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1945&q=80',
    shortDescription:
      'NRDC works to ensure the rights of all people to clean air, clean water, and healthy communities.',
    description: '',
  },

  sierra: {
    slug: 'sierra-club',
    name: 'Sierra Club',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/21/Adams_The_Tetons_and_the_Snake_River.jpg',
    shortDescription: `The Sierra Club's stated mission is "To explore, enjoy, and protect the wild places of the earth; To practice and promote the responsible use of the earth's ecosystems and resources; To educate and enlist humanity to protect and restore the quality of the natural and human environment; and to use all lawful means to carry out these objectives."`,
    description: ``,
  },

  '350': {
    slug: '350',
    name: '350.org',
    shortDescription:
      '350.org is an international environmental organization addressing the climate crisis. Its goal is to end the use of fossil fuels and transition to renewable energy by building a global, grassroots movement.',
    imageUrl:
      'https://images.unsplash.com/photo-1552658249-ffe45eea0821?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2978&q=80',
    description: `<p>350 has one clear, overarching mission: reduce the amount of carbon in the atmosphere to 350 parts per million. This is the maximum safe limit for atmospheric carbon, as stated by NASA’s James Hansen in 2008.</p>
    <p>Founded in 2008 by a group of Middlebury alumni in the United States along with author Bill McKibben, who wrote one of the first books on global warming for the general public, 350 has been working towards its mission by organizing grassroots campaigns.</p>
    <p>350.org has grown a network that now encompasses more than 4,000 groups in more than 180 countries. These chapters allow for campaigns at the local level even as it pressures governments worldwide to take action against carbon pollution.</p>
    <ul>
    <li>350.org seeded 750 anti-Keystone XL protest actions, key player in delaying the pipeline</li>
    <li>Lead and organized the Fossil Fuel Divestment Campaign know as "Fossil Free", which since its inception in 2012 has led to over 11 trillion $ being from coal, oil, and gas.</li>
    <li>350.org is one of the leading organizers of the Global Climate Strike, September 20–27, 2019</li>`,
  },
  union: {
    slug: 'union-concerned-scientists',
    name: 'Union of Concerned Scientists',
    shortDescription: `The Union of Concerned Scientists is a national nonprofit organization founded 50 years ago by scientists and students at the Massachusetts Institute of Technology who sought to use the power of science to address global problems and improve people's lives.`,
    imageUrl:
      'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1935&q=80',
    description: `<p>The Union of Concerned Scientists is a national nonprofit organization founded in 1969 ago by scientists and students at the Massachusetts Institute of Technology who sought to use the power of science to address global problems and improve people&rsquo;s lives.</p>
    <p>The Union of Concerned Scientists puts rigorous, independent science to work to solve our planet's most pressing problems.</p>
    <p>Today, we are a group of nearly 250 scientists, analysts, policy and communication experts dedicated to that purpose.</p>
    <ul>
    <li><strong>Expose&mdash;</strong>When special interests release bogus studies, corporations sow doubt about science, or political operatives censor, manipulate, or undermine government science, UCS is there to set the record straight with the public, the news media, and our elected officials.</li>
    <li><strong>Analyze&mdash;</strong>Our experts undertake rigorous, independent research, analyzing pressing problems and developing innovative solutions that prioritize human health, and are both equitable and cost effective.</li>
    <li><strong>Advocate&mdash;</strong>Our experienced researchers communicate to the media, to the public and directly to key decision makers at the national, state, and local level to advocate for changes in public policies or corporate practices.</li>
    </ul>
    <h3>Accomplishments</h3>
    <ul>
    <li>2018 - Provided the state of California with information that allowed the state to pass a bill requiring that 100 percent of its electricity come from clean, renewable sources by 2045.</li>
    <li>2018 - Blocked Anti-Science Nominees from the Trump Administration</li>
    <li>2016 UCS worked in Illinois to successfully pass a comprehensive bill that boosts investments in clean energy and energy efficiency, expands access to low-income households, and pledges 35 percent clean energy by 2025.</li>
    </ul>`,
  },
  afsp: {
    slug: 'american-foundation-for-suicide-prevention',
    name: 'American Foundation for Suicide Prevention',
    shortDescription: '',
    imageUrl:
      'https://res.cloudinary.com/saythanks/image/upload/v1569441130/pillar/09-15-18-out-of-the-darkness-photo-e1568312271765.jpg',
    description: `<p>In 1987, a small group of caring individuals had a vision: establish a private source of support for suicide research and education, and essential suicide prevention efforts could be sustained into the future. These founding families&mdash;each of whom had lost a someone to suicide&mdash;joined with scientists to create what today is the American Foundation for Suicide Prevention, or AFSP.</p>
    <p>Many of the original founders were concerned about an alarming rise in youth suicide over the previous four decades. During this period, the suicide of young men had tripled while for young women it had doubled.</p>
    <p>Before AFSP, there was no national-scope not-for-profit organization dedicated to understanding and preventing suicide through research, education and advocacy.</p>
    <p>Since its founding in 1987, AFSP has:</p>
    <ul>
    <li>Mobilized and connected tens of thousands of people who have lost a family member, loved one, or friend to suicide</li>
    <li>Reached thousands of individuals who are at risk for suicide, as well as those who love and care for them</li>
    <li>Attracted the participation of members of the scientific and clinical communities, who conduct groundbreaking research on suicide and its prevention with support from AFSP</li>
    <li>Established local chapters in all 50&nbsp;states</li>
    <li>Educated hundreds of local communities about suicide and how to prevent it</li>
    <li>Created a public policy and lobbying arm by merging successfully with an existing national policy organization, thus enabling AFSP to press for legislation and policies at the federal, state and local levels that advance the goal of preventing suicide</li>
    <li>Substantially increased our funding from individual donors, including the thousands of highly motivated individuals who participate in our Out of the Darkness Walks</li>
    <li>Educated reporters and the media about how to best cover suicide</li>
    <li>Communicated with hundreds of thousands of individuals through our website, social media, brochures, speakers and efforts to generate press coverage</li>
    </ul>`,
  },
  brain: {
    slug: 'brain-behavior-resarch-foundation',
    name: 'Brain and Behavior Research Foundation',
    shortDescription: '',
    imageUrl:
      'https://res.cloudinary.com/saythanks/image/upload/v1569441205/pillar/photo-1453847668862-487637052f8a.jpg',
    description: `<p>The Brain &amp; Behavior Research Foundation is a global nonprofit organization focused on improving the understanding, prevention and treatment of psychiatric and mental illnesses.</p>
    <p>Beginning in 1987, the Brain &amp; Behavior Research Foundation was providing seed money to neuroscientists to invest in &ldquo;out of the box&rdquo; research that the government and other sources were unwilling to fund. Today, Brain &amp; Behavior Research Foundation is still the leading, private philanthropy in the world in this space.</p>
    <p>The $408+ million in grants awarded by the Foundation since 1987 has resulted in over $3.9 billion in additional research funding for these scientists.</p>
    <p>Their model encourages new and innovative research in that we are able to support new ideas from bottom up generated by scientists.</p>
    <p>Examples include the early support for&nbsp;<a href="https://www.bbrfoundation.org/content/2005-breakthrough-decoding-brain-circuitry-and-how-it-links-behavior">optogenetics</a>,&nbsp;<a href="https://www.bbrfoundation.org/content/2003-breakthrough-dbs-pacemaker-brain-treat-depression">deep brain stimulation</a>&nbsp;for treatment-resistant depression,&nbsp;<a href="https://www.bbrfoundation.org/content/2000-breakthrough-treatment-resistant-depression">transcranial magnetic stimulation</a>, and&nbsp;<a href="https://www.bbrfoundation.org/content/2006-breakthrough-rapid-acting-antidepressant-heralded-biggest-breakthrough-depression">rapid-acting antidepressants</a>.</p>
    <p>Each of these important breakthroughs received initial key support from grants provided by the Brain &amp; Behavior Research Foundation.</p>
    <p>100% of every dollar&nbsp;<a href="https://www.bbrfoundation.org/donate">donated</a>&nbsp;for research is invested in our research grants. Our operating expenses are covered by separate foundation grants.</p>
    <p>The Foundation funds the most innovative ideas in neuroscience and psychiatry to better understand the causes and develop new ways to treat brain and behavior disorders.</p>
    <p>These illnesses include</p>
    <ul>
    <li>addiction</li>
    <li>attention-deficit hyperactivity disorder (ADHD)</li>
    <li>anxiety</li>
    <li>autism</li>
    <li>bipolar disorder</li>
    <li>borderline personality disorder (BPD)</li>
    <li>depression</li>
    <li>eating disorders</li>
    <li>obsessive-compulsive disorder (OCD)</li>
    <li>post-traumatic stress disorder (PTSD)</li>
    <li>schizophrenia</li>
    </ul>`,
  },
  treatment: {
    slug: 'treatment-advocacy-center',
    name: 'Treatment Advocacy Center',
    shortDescription: '',
    imageUrl:
      'https://res.cloudinary.com/saythanks/image/upload/v1569441248/pillar/photo-1494138030114-a8cf519b022b.jpg',
    description: `<p>The Treatment Advocacy Center is a national nonprofit organization dedicated to eliminating barriers to the timely and effective treatment of severe mental illness. The organization promotes laws, policies and practices for the delivery of psychiatric care and supports the development of innovative treatments for and research into the causes of severe and persistent psychiatric illnesses, such as schizophrenia and bipolar disorder.</p>
    <p>Since its founding in 1998, The Treatment Advocacy Center has grown to be a respected, independent voice for reforming treatment laws nationwide. They engage in a wide range of activities and projects aimed at increasing treatment for people with severe mental illness. Twenty-two states have made important changes to their civil commitment standards and treatment laws as a direct result of their advocacy since they were founded, and more progress is on the horizon.</p>
    <p>They have been taking action on their mission by:</p>
    <ul>
    <li>Educating policymakers and judges about the true nature of severe brain disorders, advanced treatments available for those illnesses, and the necessity of court-ordered treatment in some cases</li>
    <li>Assisting individuals who are working in their own states to promote laws that enable individuals with the most severe brain disorders to receive assisted treatment</li>
    <li>Promoting innovative approaches to diverting individuals with severe mental illness away from the criminal justice system and into appropriate treatment</li>
    <li>Ensuring that individuals receive adequate psychiatric services and maintain medication compliance upon release from hospitals</li>
    <li>Supporting the development of innovative treatments for and research into the causes of severe and persistent psychiatric illnesses, such as schizophrenia and bipolar disorder</li>
    </ul>`,
  },
  mental: {
    slug: 'mental-health-america',
    name: 'Mental Health America',
    shortDescription: '',
    imageUrl:
      'https://res.cloudinary.com/saythanks/image/upload/v1569441289/pillar/girl-in-rain.jpg',
    description: `<p>Mental Health America (MHA) - founded in 1909 - is on of the nation&rsquo;s leading community-based nonprofits. It is dedicated to addressing the needs of those living with mental illness and to promoting the overall mental health of all Americans. Their work is driven by their commitment to promote mental health as a critical part of overall wellness, including prevention services for all; early identification and intervention for those at risk; integrated care, services, and supports for those who need it; with recovery as the goal.</p>
    <p>Much of their work is guided by the Before Stage 4 (B4Stage4) philosophy &ndash; that mental health conditions should be treated long before they reach the most critical points in the disease process. When we think about diseases like cancer or heart disease, we don&rsquo;t wait years to treat them. We start before Stage 4&mdash;we begin with prevention, identify symptoms, and develop a plan of action to reverse and hopefully stop the progression of the disease.</p>
    <p>So why don&rsquo;t we do the same for individuals who are dealing with potentially serious mental illness? Like other diseases, we need to address these symptoms early, identify the underlying disease, and plan an appropriate course of action on a path towards overall health. MHA is committed to addressing mental health Before Stage 4.</p>
    <h3><strong><a href="https://staging.mhanational.org/education-and-outreach">Education and Outreach</a></strong></h3>
    <p>MHA helps Americans of all ages better understand prevention, early identification and intervention through a variety of information, online tools and events.</p>
    <h3><strong><a href="https://staging.mhanational.org/public-policy">Public Policy</a></strong></h3>
    <p>MHA collaborates with a wide audience of affiliates and supporters to advance policy recommendations that promote their mission</p>
    <h3><strong><a href="https://staging.mhanational.org/peer-advocacy-supports-and-services">Peer Advocacy, Supports, and Services</a></strong></h3>
    <p>MHA works to protect the rights and dignity of individuals with lived experience nationwide, and ensure that peers and their voices are integrated into all areas of the organization.</p>`,
  },
  plannedparenthood: {
    slug: 'planned-parenthood',
    name: 'Planned Parenthood',
    shortDescription: '',
    imageUrl:
      'https://res.cloudinary.com/saythanks/image/upload/v1569441433/pillar/95c79481-feef-41e3-b35f-cc40eb214190-AP_Planned_Parenthood_Abortion.jpg',
    description:
      'Planned Parenthood Federation of America, Inc., or Planned Parenthood, is a nonprofit organization that provides reproductive health care in the United States and globally. ',
  },
  narl: {
    slug: 'narl',
    name: 'NARL Pro-Choice America',
    shortDescription: '',
    imageUrl:
      'https://res.cloudinary.com/saythanks/image/upload/v1569441491/pillar/Thousands-Gathered-to-Support-Protect-Abortion-Access-3.jpg',
    description:
      'NARAL Pro-Choice America is a 501 organization in the United States that engages in political action and advocacy efforts to oppose restrictions on abortion and expand access to abortion. ',
  },
  centerreprorights: {
    slug: 'center-reproductive-rights',
    name: 'Center for Reproductive Rights',
    shortDescription: '',
    imageUrl:
      'https://res.cloudinary.com/saythanks/image/upload/v1569441620/pillar/abortion-restrictions-2016.jpg',
    description:
      'The Center for Reproductive Rights is a global legal advocacy organization that seeks to advance reproductive rights, such as abortion.',
  },
  amazonwatch: {
    slug: 'amazon-watch',
    name: 'Amazon Watch',
    shortDescription: '',
    imageUrl:
      'https://res.cloudinary.com/saythanks/image/upload/v1569441699/pillar/photo-1534360682754-fb2d73fd4e56.jpg',
    description: `<p>Since 1996, Amazon Watch has protected the rainforest and advanced the rights of indigenous peoples in the Amazon Basin. We partner with indigenous and environmental organizations in campaigns for human rights, corporate accountability, and the preservation of the Amazon's ecological systems.</p>
    <p>Amazon Watch protects millions of acres of rainforest every year by partnering with indigenous peoples &ndash; the best stewards of the forest &ndash; to directly challenge the corporate and government powers that threaten the Amazon and our climate.</p>
    <p>Amazon Watch supports and promotes indigenous-led alternative solutions to climate change, natural resource extraction, and industrial development.</p>
    <p>The knowledge, cultures, and traditional practices of our indigenous partners contribute greatly to sustainable and equitable stewardship of the Amazon and all of Mother Earth. Amazon Watch promotes these indigenous-led solutions, such as green development and autonomous solar power, and expands capacity for indigenous leaders, especially women, to maintain their autonomy and sovereignty for the stewardship of their ancestral territories.</p>`,
  },
  rainforest: {
    slug: 'rainforest-alliance',
    name: 'Rainforest Alliance',
    shortDescription: '',
    imageUrl:
      'https://res.cloudinary.com/saythanks/image/upload/v1569441751/pillar/photo-1562004150-eea7240d1c41.jpg',
    description: `<p>Their new strategy guides their partners&mdash;from smallholder farmers and forest communities to corporate and civil society allies across Latin America&mdash;in accelerating their sustainability impact. We harness the power of the market to drive positive social, environmental, and economic change along entire supply chains, across landscapes that are critically important to our climate stability.</p>
           <p>The farming and forest communities we work with are on the front lines of some of our most urgent challenges: climate change, deforestation, and rural poverty. We have learned that the best way to support frontline communities in responding to these challenges is through a comprehensive, 360-degree approach that centers sustainable livelihoods. For this reason, our strategy rests on a foundation of mutually reinforcing interventions designed to catalyze positive&nbsp;<em>systemic</em>&nbsp;change.</p>
           <p>The Rainforest Alliance is an established global leader in sustainability certification&mdash;a powerful, proven tool for advancing best practices for land use, farm management, and the stewardship of natural resources.</p>
           <p>The sustainable production of non-timber forest products, such as Brazil nuts, provides indigenous communities with a sustainable livelihood.</p>
           <p>Finally, they use two supporting interventions to fortify their sustainability initiatives.&nbsp;Their advocacy team works to advance policy and implementation to advance key sustainability priorities&mdash;as well as increased commitments and financial investment from both governments and companies. And they work with a very small number of company partners to develop tailored supply chain services that guide them on their own sustainability journeys.</p>`,
  },
  amazoncons: {
    slug: 'amazon-conservation-team',
    name: 'Amazon Conservation Team',
    shortDescription: '',
    imageUrl:
      'https://res.cloudinary.com/saythanks/image/upload/v1569441830/pillar/photo-1490797856867-99a9bd31d5e4.jpg',
    description: `<p>The Amazon Conservation Team partners with indigenous and other local communities to protect tropical forests and strengthen traditional culture.'</p>
    <p>Founded 24 years ago the Amazon Conservation Team has successfully established 193,000 total acres of national parklands, established 13 indigenous communities and worked to map 73 million acres of protected lands via satellite images to track deforestation.</p>
    <p>Beyond all of this they are committed to working with local communities on fostering sustainable alternatives to logging and mining, all while helping indigenous communities maintain their cultural roots, and giving them the tools to be able to safeguard their environments.</p>
    <p>At the moment they are focused on addressing the present Amazon fires, and in consultation with indigenous communities and their representative bodies, they are learning where resources are most required, for both urgent attention and future prevention and control.</p>
    <p>At the start, they are beginning by thoughtfully disbursing funds to regional associations that are addressing community needs including humanitarian relief, ecological recovery, and firefighting training and equipment.</p>`,
  },
}

export const bundles = {
  climate: {
    name: 'Climate Change',
    longTitle: 'Global Warming affects everybody',
    description:
      'The world’s scientists confirmed in the 2018 IPCC report that at the current rate,' +
      ' the world could cross 1.5˚C hotter as soon as 2030. That’s within our lifespan.' +
      ' Support organizations that promote renewable energy, energy efficiency, and policy change.',
    primaryCategory: Categories.environment,
    imageUrl:
      'https://pillar-static-assets.s3.amazonaws.com/photo-1516569422572-d9e0514b9598.jpeg',
    slug: 'climate-change',
    nonprofits: [
      {
        nonprofit: nonprofits.edf,
        why:
          'They are exceptionally knowledgeable on cap and trade, and have made huge policy gains around this and other strategies. Their advocacy work includes influencing the EPA’s emission standards for power plants and petroleum refineries, legal victories related to the Clean Air Act, and more.',
      },
      {
        nonprofit: nonprofits.sierra,
        why: `Through lawsuits, target media education, grassroots action, and other strategies, Sierra Club has helped stop over 100 proposed coal plants and retired many others.`,
      },
      {
        nonprofit: nonprofits['350'],
        why:
          'Directly engaging the public in expressing support for action at the grassroots level',
      },
      {
        nonprofit: nonprofits.union,
        why: `UCS provides science-based research and education to policymakers in Congress and other legislative bodies. It's essential that these folks be educated about climate issues.`,
      },
    ],
    tags: [
      'Advocacy',
      'Research',
      'Grassroots Movements and Organization',
      'Environmental Protection',
    ],
    longDescription: `<p><strong>The world&rsquo;s scientists confirmed in the 2018 IPCC report that at the current rate, the world could cross 1.5˚C hotter as soon as 2030. That&rsquo;s within our lifespan.</strong></p>
    <p>1.5˚C might not sound like a big increase in temperature, but it&rsquo;s the difference between life and death for thousands of people.</p>
    <p>Earth has always had natural cycles of warming and cooling, but not like we&rsquo;re seeing now.&nbsp;<strong>The top five hottest years on record are 2014, 2015, 2016, 2017, and 2018. We can experience this right now, and it will only become more obvious.</strong></p>
    <p>Over 1 million people living near coasts have been forced from their homes due to rising seas and stronger storms, and millions more are expected to flee in the coming years.</p>
    <p>Climate Change is set to increase the risk of food shocks and malnutrition all around the world.</p>
    <p><strong>The basic facts of climate crisis are grim.</strong></p>
    <p><em>Though here is the good news:</em></p>
    <blockquote>
    <p>We Know exactly what we have to do</p>
    </blockquote>
    <ul>
    <li>Keep fossil fuels in the ground, and increase the share of solar, wind and hydro energy dramatically in that time. Coal is on the decline, and through the renewable energy sector we've created thousands of jobs.</li>
    <li>Improve energy efficiency.</li>
    <li>Continue to advocate for changes in policy to reflect our goals</li>
    </ul>
    <p>And all of this is doable</p>
    <p>We&rsquo;re not alone &mdash; the worldwide movement to stop the climate crisis is growing stronger every day. Join it.</p>`,
  },
  mental: {
    name: 'Mental Health',
    longTitle: 'What happens to Americans with mental illness?',
    slug: 'mental-health',
    description:
      'Support research, advocacy, and support of mental health issues around the world',
    primaryCategory: Categories.health,
    imageUrl:
      'https://pillar-static-assets.s3.amazonaws.com/photo-1494029722188-672a328c4989.jpeg',
    nonprofits: [
      {
        nonprofit: nonprofits.afsp,
        why:
          'For helping people maintain their lives, via peer to peer support, research into suicide prevention and advocacy.',
      },
      {
        nonprofit: nonprofits.brain,
        why:
          '100% of donations go straight to research. And their research has been making the difference in mental health.',
      },
      {
        nonprofit: nonprofits.treatment,
        why:
          'For addressing the problems with the criminalization of mental illness, through advocacy and support services.',
      },
      {
        nonprofit: nonprofits.mental,
        why:
          'For creating a national network of affiliates that provides recovery, care and support across the country.',
      },
    ],
    tags: ['Advocacy', 'Human Services', 'Research', ' Education & Awareness'],
    longDescription: `<p>1 in 5 Americans suffer of some form of mental illness. Though we do not talk about it. There is a stigma associated with mental illness, that causes people to forego care.</p>
    <p>An estimated 8.3 million American adults live with diagnoses of schizophrenia or severe bipolar disorder &ndash; just over 3% of the US adult population. About half of these individuals are untreated at any given time, most commonly because they&nbsp;<a href="https://www.treatmentadvocacycenter.org/key-issues/anosognosia">lack insight</a>&nbsp;into their condition.</p>
    <p>The human and economic cost of this neglect has been catastrophic. People with the most severe psychiatric diseases make up barely 3% of the total population, of the total population, but are vastly more likely to be arrested, incarcerated, homeless or unemployed.</p>
    <p>Though we are working to see a change.</p>
    <p><strong>Through services </strong>we we can provide directly support, self-directed care and recovery.</p>
    <p><strong>Through research </strong>we are able to understand the causes of mental illnesses, better ways to treat and control them, and ultimately, how we can prevent mental illness from occurring.</p>
    <p><strong>Through outreach </strong>we have been working to raise the topic of mental health in schools, workplaces, and communities. So that we may support each other.</p>
    <p><strong>Through advocacy </strong>we focus on mental health reform to stop the criminalization of mental health, and to support the development of individuals affected.</p>
    <p>The landscape is changing. Your help will continue to push us in the right direction.</p>`,
  },
  reproductive: {
    name: 'Reproductive Rights',
    slug: 'reproductive-rights',
    longTitle:
      'Access to reproductive health care is under attack like never before.',
    description:
      'Access to reproductive health care is under attack like never before.',
    primaryCategory: Categories.women,
    imageUrl:
      'https://pillar-static-assets.s3.amazonaws.com/photo-1485282451181-373ce0a1f879.jpeg',
    tags: ['Advocacy', 'Human Services', 'Research', ' Education & Awareness'],
    nonprofits: [
      {
        nonprofit: nonprofits.plannedparenthood,
        why: `For providing trusted healthcare to 1.5 million people year over year. And alongside informing and educating young people on health and relationships`,
      },
      {
        nonprofit: nonprofits.centerreprorights,
        why: `For using the power of law to advance reproductive rights as fundamental human rights around the world.`,
      },
      {
        nonprofit: nonprofits.narl,
        why: `For organizing grassroots movements to pressure lawmakers and corporations, working to elect pro-choice champions in government`,
      },
    ],
    longDescription: `
    <p>We&rsquo;ve been forced to defend it over and over again as anti-choice politicians and organizations focus on undermining and chipping away at our rights until they can do away with legal abortion access completely.</p>
    <p>They&rsquo;ve passed hundreds of laws to restrict a woman&rsquo;s ability to access safe, legal abortion care. These laws take many forms, including trying to outlaw abortion altogether, shutting down clinics, restricting access based on income level and dictating which medical procedures are available.</p>
    <p>While in many states fake health clinics, are misleading women about their reproductive-health-care options to block them from accessing abortion care.</p>
    <p>The right to choose abortion is essential to ensuring a woman can decide for herself if, when and with whom to start or grow a family.</p>
    <p>We envision a world where every person participates with dignity as an equal member of society, regardless of gender. Where every woman is free to decide whether or when to have children and whether to get married; where access to quality reproductive health care is guaranteed; and where every woman can make these decisions free from coercion or discrimination.</p>
    <p>This is how our organizations are realizing this mission:</p>
    <ul>
    <li>Fighting to make sure every woman has access to affordable birth control that is right for her&mdash;no matter where she lives, where she works or how much money she makes&mdash;so she can control her own future.</li>
    <li>Advocating for women's rights</li>
    <li>Providing services where they are needed.</li>
    </ul>`,
  },
  amazon: {
    name: 'Amazon Rainforest Fires',
    slug: 'amazon-fires',
    longTitle: `A sixth of Earth's oxygen supply is at risk`,
    primaryCategory: Categories.environment,
    description: `Help save one of our planet's crucial resources`,
    imageUrl:
      'https://pillar-static-assets.s3.amazonaws.com/photo-1505059543657-d11072be4590.jpeg',
    tags: ['Environment', 'Disaster Relief', 'Sustainability'],
    nonprofits: [
      {
        nonprofit: nonprofits.amazonwatch,
        why: `Work in back indigenous communities within the Amazon`,
      },
      {
        nonprofit: nonprofits.rainforest,
        why: `Their work in training to farmers in methods that generate higher yields on existing cropland, reducing the pressure to encroach on nearby forests`,
      },
      {
        nonprofit: nonprofits.amazoncons,
        why: `Work on implementing sustainable forestry practices, and lobbying government`,
      },
    ],
    longDescription: `<p>We all sat through classes learning about the environment, in which our school teachers explained the role the Amazon plays producing Oxygen and taking in Carbon Dioxide.</p>
    <p>At the moment the inverse is happening.</p>
    <p>The Amazon rainforest, which stretches over 2.2 million-square miles, 4 times the size of Alaska, is being devastated by forest fires. The impact on our environment is disheartening, as ecosystems which 1/4 of the species on earth call home are literally burning, and producing emissions that will affect the rest of our environment.</p>
    <p>All while endangering the local indigenous populations, and also the urban areas around the Amazon, which have been literally shrouded in smoke over the past month.</p>
    <p>To solve this problem nonprofits have been doubling down on their preservation efforts.</p>
    <p>Work is being done to strengthen the environmental agencies to prevent man made damages to the environment, while working in parallel with landowners and farmers to implement sustainable forestry practices. All the while working to address the fires, and supporting the local communities.</p>`,
  },
}

export const portfolio: PortfolioItem[] = []
