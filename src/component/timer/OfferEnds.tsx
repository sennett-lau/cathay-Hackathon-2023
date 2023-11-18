import { Flex, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import CountDownTimer from './CountDownTimer'

const OfferEnds = () => {
  const claimedRecord = useSelector(
    (state: any) => state.controlSlice.claimedRecord,
  )

  return (
    <Flex
      display={claimedRecord ? 'flex' : 'none'}
      position={'fixed'}
      top={'200px'}
      right={'32px'}
      bg={'#fff'}
      w={'300px'}
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      borderRadius={'8px'}
      py={'16px'}
      px={'24px'}
      boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
    >
      <Text fontWeight={'bold'} mb={'8px'}>
        OFFER ENDS IN:
      </Text>
      <CountDownTimer />
      <Text textAlign={'center'}>
        CLAIMED:
        <br />
        <span style={{ color: '#886521', fontWeight: 'bold' }}>
          {claimedRecord?.destination} - {claimedRecord?.code}
        </span>
      </Text>
    </Flex>
  )
}

export default OfferEnds
