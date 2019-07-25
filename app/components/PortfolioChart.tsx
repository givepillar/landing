import React from 'react'
// import { VictoryPie } from 'victory'
import { portfolio } from '../mock/data'

const data = portfolio.map(item => ({ x: item.recipient.name, y: item.amount }))

const PortfolioChart = () => (
  // <VictoryPie
  //   data={data}
  //   innerRadius={150}
  //   labels={[]}
  //   // cornerRadius={4}
  //   // padAngle={5}
  //   padding={0}
  //   colorScale={portfolio.map(
  //     item => item.recipient.primaryCategory.colors.medium
  //   )}
  // />
  <div />
)

export default PortfolioChart
