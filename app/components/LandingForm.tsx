import React, { useCallback, useState } from 'react'
import EmailStep from '../LandingForm/EmailStep'
import useSteps from '../hooks/useSteps'
import { useTransition, animated } from 'react-spring'
import QuizStep from '../LandingForm/QuizStep'

const sign = (n: number) => (n >= 0 ? '' : '-')

const steps = {
  email: EmailStep,
  quiz: QuizStep,
}

const LandingForm = () => {
  const { step, next, back } = useSteps('email')

  const [form, setForm] = useState({
    email: '',
  })

  const nextStep = useCallback(() => {
    console.log(`getting next for ${step.name}`)

    return false
  }, [next])

  const transitions = useTransition(step, step.name, {
    from: {
      transform: `translate3d(0,${sign(step.dir)}50px,0)`,
      opacity: 0,
      // position: 'absolute',
    },
    enter: {
      transform: `translate3d(0,0px,0)`,
      opacity: 1,
      position: 'relative',
    },
    leave: {
      transform: `translate3d(0,${sign(-step.dir)}50px,0)`,
      opacity: 0,
      // position: 'absolute',
    },
  })
  return (
    <div>
      {transitions.map(({ item, props, key }) => {
        const CurrentStep = steps[item.name]
        return (
          <animated.div
            key={key}
            style={{
              ...props,
              width: '100%',
            }}
          >
            <CurrentStep
              value={form[step.name]}
              rootState={form}
              key={key}
              onChange={(val, next = false) => {
                if (next && !form[step.name]) {
                  nextStep()
                }
                setForm({ ...form, [step.name]: val })
              }}
              next={nextStep}
              done={() => {
                console.log('done called')
                if (nextStep()) {
                  // submit()
                }
              }}
              back={back}
            ></CurrentStep>
          </animated.div>
        )
      })}
    </div>
  )
}

export default LandingForm
