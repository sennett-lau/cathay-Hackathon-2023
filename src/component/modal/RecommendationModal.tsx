import {
  setClaimedRecord,
  setClockTid,
  setImageModalOpen,
  setTargetFlightWithin,
} from '@/store/controlSlice'
import { OfferItem } from '@/types'
import {
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const items: OfferItem[] = [
  {
    image:
      'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    off: '20',
    destination: 'Tokyo',
    code: 'CATHAY2023',
    date: '2 FEBRUARY 2024',
    claimWithin: new Date().getTime() + 60 * 60 * 24 * 1000,
    destinationCode: 'HND',
  },
  {
    image:
      'https://images.unsplash.com/photo-1601534622119-e9b3aa7c7bdf?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    off: '20',
    destination: 'Taipei',
    code: 'CWWWAY2023',
    date: '24 MARCH 2024',
    claimWithin: new Date().getTime() + 60 * 60 * 36 * 1000,
    destinationCode: 'TPE',
  },
  {
    image:
      'https://images.unsplash.com/photo-1570191913384-7b4ff11716e7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    off: '20',
    destination: 'Korea',
    code: 'CHDJCS2023',
    date: '12 MAY 2024',
    claimWithin: new Date().getTime() + 60 * 60 * 48 * 1000,
    destinationCode: 'ICN',
  },
]

const RecommendationModal = () => {
  const isModalOpen = useSelector(
    (state: any) => state.controlSlice.isRecommendationModalOpen,
  )

  const { isOpen, onOpen, onClose } = useDisclosure()

  const dispatch = useDispatch()

  useEffect(() => {
    if (isModalOpen) {
      onOpen()

      updateClock(items[showIndex].claimWithin)
    }
  }, [isModalOpen])

  const onCloseHandler = () => {
    onClose()
    dispatch(setImageModalOpen({ isImageModalOpen: false }))
  }

  // recommendation items
  const t = useSelector((state: any) => state.controlSlice.clockTid)

  const [showIndex, setShowIndex] = useState(0)

  const [hoursRemaining, setHoursRemaining] = useState(0)
  const [minutesRemaining, setMinutesRemaining] = useState(0)
  const [secondsRemaining, setSecondsRemaining] = useState(0)

const router = useRouter()

  useEffect(() => {
    updateClock(items[showIndex].claimWithin)
  }, [showIndex])

  const updateClock = (targetWithin: number) => {
    const newT = setInterval(() => {
      console.log('update clock', t)
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

    dispatch(setClockTid({ clockTid: newT }))
  }

  const onLeftClick = () => {
    if (showIndex === 0) {
      setShowIndex(items.length - 1)
    } else {
      setShowIndex(showIndex - 1)
    }
  }

  const onRightClick = () => {
    if (showIndex === items.length - 1) {
      setShowIndex(0)
    } else {
      setShowIndex(showIndex + 1)
    }
  }

  const onBookNowClick = () => {
    dispatch(
      setTargetFlightWithin({
        targetFlightWithin: items[showIndex].claimWithin,
      }),
    )
    dispatch(
      setClaimedRecord({
        claimedRecord: items[showIndex],
      }),
    )
    router.push('/booking')
    onCloseHandler()
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onCloseHandler} isCentered>
        <ModalOverlay
          bg='rgba(0, 0, 0, 0.8)'
          backdropFilter='auto'
          backdropBlur='2px'
        />
        <ModalContent
          w={'70vw'}
          maxW={'100vw'}
          bg={'transparent'}
          shadow={'none'}
          h={'85vh'}
        >
          <ModalBody p={0} bg={'transparent'} shadow={'none'} h={'85vh'}>
            <Flex h='100%'>
              <Flex
                w={'50px'}
                bg={'transparent'}
                pr={'16px'}
                onClick={onLeftClick}
                cursor={'pointer'}
              >
                <Image src={'/assets/arrow.svg'} alt={'arrow'} />
              </Flex>

              <Flex
                flex={1}
                bg={'#02838D'}
                justifyContent={'center'}
                alignItems={'center'}
                py={'16px'}
              >
                <Flex
                  backgroundImage={`url(/assets/ticket.png)`}
                  backgroundRepeat={'no-repeat'}
                  backgroundPosition={'center'}
                  backgroundSize={'contain'}
                  justifyContent={'center'}
                  w={'100%'}
                  h={'100%'}
                  alignItems={'flex-end'}
                  px={'110px'}
                  pb={'52px'}
                >
                  <Flex w={'100%'} px={'16px'} flexDir={'column'}>
                    <Image src='/assets/cp-logo.svg' h={'56px'} mb={'20px'} />
                    <Text textAlign={'center'} px={'28px'} mb={'16px'}>
                      SPECIAL DISCOUNT FOR YOU
                    </Text>
                    <Flex
                      w={'100%'}
                      h={'56px'}
                      justifyContent={'center'}
                      mb={'16px'}
                    >
                      <Text
                        fontSize={'64px'}
                        fontWeight={'bold'}
                        position={'relative'}
                        lineHeight={'56px'}
                      >
                        {items[showIndex].off}%
                        <span
                          style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '-40px',
                            fontSize: '24px',
                          }}
                        >
                          OFF
                        </span>
                      </Text>
                    </Flex>
                    <Text textAlign={'center'} mb={'20px'} fontWeight={'bold'}>
                      FOR AIR TICKET TO
                      <br />
                      <span style={{ color: '#02838D' }}>
                        {items[showIndex].destination}
                      </span>
                    </Text>
                    <Flex gap={'16px'} px={'8px'} mb='16px'>
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
                    <Text textAlign={'center'} mb={'40px'}>
                      DEPARTURE BEFORE
                      <br />
                      {items[showIndex].date}
                    </Text>
                    <Flex px={'24px'} flexDir={'column'} mb={'20px'}>
                      <Text
                        bg={'#005D63'}
                        color={'white'}
                        textAlign={'center'}
                        py={'6px'}
                        onClick={onBookNowClick}
                        cursor={'pointer'}
                      >
                        BOOK NOW
                      </Text>
                    </Flex>
                    <Text textAlign={'center'}>
                      OR BY ENTERING THIS CODE{' '}
                      <span
                        style={{
                          fontWeight: 'bold',
                        }}
                      >
                        [{items[showIndex].code}]
                      </span>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex flex={1}>
                <Image
                  src={items[showIndex].image}
                  alt={'image modal'}
                  objectFit={'cover'}
                />
              </Flex>
              <Flex
                w={'50px'}
                bg={'transparent'}
                pl={'16px'}
                onClick={onRightClick}
                cursor={'pointer'}
              >
                <Image
                  src={'/assets/arrow.svg'}
                  alt={'arrow'}
                  transform={'rotate(180deg)'}
                />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default RecommendationModal
