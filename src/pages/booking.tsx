import { FlightItem, OfferItem } from '@/types'
import {
  Box,
  Container,
  Flex,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const flights: FlightItem[] = [
  {
    destinationCode: 'HND',
    memberId: '1001',
    flights: [
      {
        flightNumber: 'CX542',
        fromTime: '01:25',
        toTime: '05:55',
        duration: '4h 30m',
        prices: {
          economy: 3420,
          business: 5620,
        },
      },
      {
        flightNumber: 'CX543',
        fromTime: '07:25',
        toTime: '11:55',
        duration: '4h 30m',
        prices: {
          economy: 4420,
          business: 7620,
        },
      },
      {
        flightNumber: 'CX544',
        fromTime: '13:25',
        toTime: '17:55',
        duration: '4h 30m',
        prices: {
          economy: 5420,
          business: 9620,
        },
      },
    ],
  },
  {
    destinationCode: 'TPE',
    memberId: '1001',
    flights: [
      {
        flightNumber: 'CX532',
        fromTime: '01:25',
        toTime: '05:55',
        duration: '4h 30m',
        prices: {
          economy: 1420,
          business: 2620,
        },
      },
      {
        flightNumber: 'CX533',
        fromTime: '07:25',
        toTime: '11:55',
        duration: '4h 30m',
        prices: {
          economy: 3420,
          business: 4620,
        },
      },
      {
        flightNumber: 'CX534',
        fromTime: '13:25',
        toTime: '17:55',
        duration: '4h 30m',
        prices: {
          economy: 5510,
          business: 6210,
        },
      },
    ],
  },
  {
    destinationCode: 'ICN',
    memberId: '1001',
    flights: [
      {
        flightNumber: 'CX542',
        fromTime: '01:05',
        toTime: '03:35',
        duration: '2h 30m',
        prices: {
          economy: 3420,
          business: 5620,
        },
      },
      {
        flightNumber: 'CX543',
        fromTime: '08:55',
        toTime: '11:25',
        duration: '2h 30m',
        prices: {
          economy: 4291,
          business: 6284,
        },
      },
      {
        flightNumber: 'CX544',
        fromTime: '13:25',
        toTime: '17:55',
        duration: '4h 30m',
        prices: {
          economy: 4420,
          business: 6620,
        },
      },
    ],
  },
]

const BookPage = () => {
  const memberId = useSelector((state: any) => state.memberSlice.memberId)
  const claimedRecord: OfferItem = useSelector(
    (state: any) => state.controlSlice.claimedRecord,
  )

  const [flightItem, setFlightItem] = useState<FlightItem>(flights[0])

  useEffect(() => {
    if (memberId !== '') {
      setFlightItem(
        flights.find(
          (flight) =>
            flight.memberId === memberId &&
            claimedRecord.destinationCode === flight.destinationCode,
        ) || flights[0],
      )
    }
  }, [memberId, claimedRecord])

  const markUpPrice = (price: number, percentage: number) => {
    return price / ((100 - percentage) / 100)
  }

  return (
    <Container maxW='container.xl'>
      <Flex gap={'48px'} alignItems={'center'} mb='104px'>
        <Text
          fontSize={'34px'}
          mb={'40px'}
          mt={'40px'}
          fontWeight={'bold'}
          color={'#005D63'}
        >
          Book A Trip
        </Text>
        <Table variant='simple' maxW={'748px'}>
          <Thead></Thead>
          <Tbody>
            <Tr>
              <Td flex={'column'}>
                <Text fontSize={'14px'} color={'#676767'}>
                  Leaving From
                </Text>
                <Text>Hong Kong, (HKG)</Text>
              </Td>
              <Td flex={'column'}>
                <Text fontSize={'14px'} color={'#676767'}>
                  Going to
                </Text>
                <Text>
                  {claimedRecord.destination}, ({claimedRecord.destinationCode})
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td flex={'column'} position={'relative'}>
                <Text fontSize={'14px'} color={'#676767'}>
                  Trip type
                </Text>
                <Text>Return</Text>
                <Image
                  src='/assets/arrow-cp.svg'
                  position={'absolute'}
                  right={'16px'}
                  top={'50%'}
                  transform={'translateY(-50%)'}
                  cursor={'pointer'}
                />
              </Td>
              <Td flex={'column'} position={'relative'}>
                <Text fontSize={'14px'} color={'#676767'}>
                  Cabin class and passengers
                </Text>
                <Text>Economy, 1 Adult</Text>
                <Image
                  src='/assets/arrow-cp.svg'
                  position={'absolute'}
                  right={'16px'}
                  top={'50%'}
                  transform={'translateY(-50%)'}
                  cursor={'pointer'}
                />
              </Td>
            </Tr>
            <Tr>
              <Td flex={'column'} position={'relative'}>
                <Text fontSize={'14px'} color={'#676767'}>
                  Departing on
                </Text>
                <Text>20 Nov 2023</Text>
                <Image
                  src='/assets/calendar.svg'
                  position={'absolute'}
                  right={'16px'}
                  top={'50%'}
                  transform={'translateY(-50%)'}
                  cursor={'pointer'}
                />
              </Td>
              <Td flex={'column'} position={'relative'}>
                <Text fontSize={'14px'} color={'#676767'}>
                  Returning on
                </Text>
                <Text>29 Nov 2023</Text>
                <Image
                  src='/assets/calendar.svg'
                  position={'absolute'}
                  right={'16px'}
                  top={'50%'}
                  transform={'translateY(-50%)'}
                  cursor={'pointer'}
                />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Flex>
      <Flex flexDir={'column'} gap={'24px'} mt={'40px'}>
        {flightItem.flights.map((flight, index) => (
          <Flex key={flight.flightNumber} gap={'48px'} alignItems={'center'}>
            <Flex flexDir={'column'}>
              <Text fontSize={'24px'} color={'#005D63'} fontWeight={'semibold'}>
                {flight.fromTime}
              </Text>
              <Text color={'#4c4c4c'} fontSize={'14px'} fontWeight={'semibold'}>
                HKG
              </Text>
            </Flex>
            <Flex flexDir={'column'} alignItems={'center'} pb={'20px'}>
              <Text fontSize={'14px'} color={'#4c4c4c'} mb={'4px'}>
                {flight.duration}
              </Text>
              <Flex h={'2px'} w={'200px'} bg={'#ebedec'} position={'relative'}>
                <Image
                  src='/assets/plane.svg'
                  w='22px'
                  h='22px'
                  position={'absolute'}
                  left={'-11px'}
                  top={'50%'}
                  transform={'translateY(-50%)'}
                />
                <Box
                  bg={'#ebedec'}
                  h={'11px'}
                  w={'11px'}
                  borderRadius={'50%'}
                  border={'1px solid #D7D7D7'}
                  position={'absolute'}
                  right={'-6px'}
                  top={'50%'}
                  transform={'translateY(-50%)'}
                />
              </Flex>
            </Flex>
            <Flex flexDir={'column'}>
              <Text fontSize={'24px'} color={'#005D63'} fontWeight={'semibold'}>
                {flight.toTime}
              </Text>
              <Text color={'#4c4c4c'} fontSize={'14px'} fontWeight={'semibold'}>
                {claimedRecord.destinationCode}
              </Text>
            </Flex>
            <Flex px={'24px'}>
              <Text color={'#4c4c4c'} fontWeight={'semibold'} mr={'8px'}>
                {flight.flightNumber}
              </Text>
            </Flex>
            <Flex w={'600px'}>
              <Flex
                flexDir={'column'}
                position={'relative'}
                w={'300px'}
                h={'57px'}
              >
                {index === 0 && (
                  <Flex
                    bg={'#005D63'}
                    color={'#fff'}
                    px={'16px'}
                    py={'4px'}
                    position={'absolute'}
                    top={'-50px'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    w={'100%'}
                    h={'48px'}
                  >
                    <Text>Economy</Text>
                  </Flex>
                )}
                <Flex
                  alignItems={'center'}
                  h={'100%'}
                  justifyContent={'center'}
                >
                  <Text
                    position={'relative'}
                    mr={'8px'}
                    fontSize={'12px'}
                    color={'#4c4c4c'}
                    fontWeight={'semibold'}
                  >
                    <Box
                      h={'1px'}
                      w={'100%'}
                      bg={'red'}
                      position={'absolute'}
                      top={'50%'}
                      transform={'translateY(-50%)'}
                    />
                    {markUpPrice(
                      flight.prices.economy,
                      parseInt(claimedRecord.off),
                    ).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'HKD',
                      minimumFractionDigits: 0,
                    })}
                  </Text>
                  <Text fontSize={'24px'} color={'red'} fontWeight={'bold'}>
                    {flight.prices.economy.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'HKD',
                    })}
                  </Text>
                </Flex>
                <Flex
                  alignItems={'center'}
                  h={'100%'}
                  justifyContent={'center'}
                >
                  <Text
                    position={'relative'}
                    mr={'8px'}
                    fontSize={'12px'}
                    color={'#005D63'}
                    fontWeight={'semibold'}
                    cursor={'pointer'}
                    _hover={{
                      textDecoration: 'underline',
                    }}
                  >
                    Proceed
                  </Text>
                </Flex>
              </Flex>
              <Flex
                flexDir={'column'}
                position={'relative'}
                w={'300px'}
                h={'57px'}
              >
                {index === 0 && (
                  <Flex
                    bg={'#487c94'}
                    color={'#fff'}
                    px={'16px'}
                    py={'4px'}
                    position={'absolute'}
                    top={'-50px'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    w={'100%'}
                    h={'48px'}
                  >
                    <Text>Premium Economy</Text>
                  </Flex>
                )}
                <Flex
                  alignItems={'center'}
                  h={'100%'}
                  justifyContent={'center'}
                >
                  <Text
                    position={'relative'}
                    mr={'8px'}
                    fontSize={'12px'}
                    color={'#4c4c4c'}
                    fontWeight={'semibold'}
                  >
                    <Box
                      h={'1px'}
                      w={'100%'}
                      bg={'red'}
                      position={'absolute'}
                      top={'50%'}
                      transform={'translateY(-50%)'}
                    />
                    {markUpPrice(
                      flight.prices.business,
                      parseInt(claimedRecord.off),
                    ).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'HKD',
                      minimumFractionDigits: 0,
                    })}
                  </Text>
                  <Text fontSize={'24px'} color={'red'} fontWeight={'bold'}>
                    {flight.prices.business.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'HKD',
                    })}
                  </Text>
                </Flex>
                <Flex
                  alignItems={'center'}
                  h={'100%'}
                  justifyContent={'center'}
                >
                  <Text
                    position={'relative'}
                    mr={'8px'}
                    fontSize={'12px'}
                    color={'#487c94'}
                    fontWeight={'semibold'}
                    cursor={'pointer'}
                    _hover={{
                      textDecoration: 'underline',
                    }}
                  >
                    Proceed
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Container>
  )
}

export default BookPage
