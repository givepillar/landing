import { useState } from 'react'

export interface StepType {
  dir: number
  name: string
}

const useSteps = (initial: string) => {
  const [step, setStep] = useState<StepType>({ name: initial, dir: 1 })
  const [history, setHistory] = useState([initial])

  const next = to => {
    if (to === step) return
    setStep({ name: to, dir: 1 })
    setHistory([...history, to])
  }

  const back = () => {
    if (history.length <= 1) return
    const prev = history[history.length - 2]
    setStep({ name: prev, dir: -1 })
    setHistory(history.slice(0, -1))
  }

  return { step, next, back }
}

export default useSteps
