import React from 'react'
import { VictoryPie, VictoryTheme } from 'victory'
import { spawn } from 'child_process'

const data = [
  { x: 'Education', y: 20 },
  { x: 'Environment', y: 50 },
  { x: 'Reproductive\nRights', y: 30 },
]

const PortfolioChart = () => (
  <VictoryPie
    data={data}
    innerRadius={150}
    labels={[]}
    cornerRadius={4}
    padAngle={5}
    padding={0}
    colorScale={['#E53E3E', '#ED8936', '#ECC94B', '#68D391', '#4FD1C5']}
  />
)

export default PortfolioChart
