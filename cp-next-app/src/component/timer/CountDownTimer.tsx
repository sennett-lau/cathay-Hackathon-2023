import { Flex, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const CountDownTimer = () => {
  const targetWithin = useSelector(
    (state: any) => state.controlSlice.targetFlightWithin,
  )

  const [hoursRemaining, setHoursRemaining] = useState(0)
  const [minutesRemaining, setMinutesRemaining] = useState(0)
  const [secondsRemaining, setSecondsRemaining] = useState(0)

  const [init, setInit] = useState(false)

  useEffect(() => {
    if (init || targetWithin === 0) {
      return
    }
    setInit(true)
    updateClock(targetWithin)
  }, [targetWithin])

  const updateClock = (targetWithin: number) => {
    const newT = setInterval(() => {
      const now = new Date().getTime()
      const distance = (targetWithin - now) / 1000

      const hours = Math.floor(distance / (60 * 60))

      const minutes = Math.floor((distance % (60 * 60)) / 60)

      const seconds = Math.floor((distance % (60 * 60)) % 60)

      setHoursRemaining(hours)
      setMinutesRemaining(minutes)
      setSecondsRemaining(seconds)

      if (distance < 0) {
        clearInterval(newT)
        setHoursRemaining(0)
        setMinutesRemaining(0)
        setSecondsRemaining(0)
      }
    })
  }

  return (
    <Flex gap={'16px'} px={'8px'} mb='16px' w={'100%'}>
      <Flex
        borderRadius={'8px'}
        border={'1px solid #000'}
        flexDir={'column'}
        flex={1}
        px={'8px'}
        py={'10px'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text fontSize={'24px'}>{hoursRemaining}</Text>
        <Text fontSize={'12px'}>HOURS</Text>
      </Flex>
      <Flex
        borderRadius={'8px'}
        border={'1px solid #000'}
        flexDir={'column'}
        flex={1}
        px={'8px'}
        py={'10px'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text fontSize={'24px'}>{minutesRemaining}</Text>
        <Text fontSize={'12px'}>MINS</Text>
      </Flex>
      <Flex
        borderRadius={'8px'}
        border={'1px solid #000'}
        flexDir={'column'}
        flex={1}
        px={'8px'}
        py={'10px'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text fontSize={'24px'}>{secondsRemaining}</Text>
        <Text fontSize={'12px'}>SECS</Text>
      </Flex>
    </Flex>
  )
}

export default CountDownTimer
