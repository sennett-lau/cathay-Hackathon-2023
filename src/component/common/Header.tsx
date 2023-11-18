import { Box, Container, Flex, Image, Link, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import TextLogo from '../logo/TextLogo'

const Header = () => {
  const memberId = useSelector((state: any) => state.memberSlice.memberId)

  return (
    <Flex width={'100%'} flexDir={'column'}>
      <Flex width={'100%'} bg={'#f7f6f1'} h={'32px'}>
        <Container mx={'auto'} maxW={'container.xl'}>
          <Flex
            w={'100%'}
            h={'32px'}
            alignItems={'center'}
            justifyContent={'space-between'}
            color={'#367878'}
            fontWeight={'semibold'}
          >
            <Text fontSize={'14px'}>Cathay Business</Text>
            <Flex alignItems={'center'} gap={'1.125rem'}>
              <Text fontSize={'14px'}>
                <Link href={'/'}>Search</Link>
              </Text>
              <Box h={'14px'} w={'1px'} bg={'#D7D7D7'}></Box>
              <Text fontSize={'14px'}>
                <Link href={'/'}>Help and support</Link>
              </Text>
              <Box h={'14px'} w={'1px'} bg={'#D7D7D7'}></Box>
              <Text fontSize={'14px'}>
                <Link href={'/'}>Notification Center</Link>
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Flex>
      <Flex w={'100%'} h={'74px'} alignItems={'center'} bg={'#fff'}>
        <Container mx={'auto'} maxW={'container.xl'}>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Flex alignItems={'center'} gap={'1.125rem'}>
              <TextLogo maxW={'148px'} />
              <Link pt={'15px'}>Flights</Link>
              <Link pt={'15px'}>Holiday</Link>
              <Link pt={'15px'}>Shopping</Link>
              <Link pt={'15px'}>Wellness</Link>
              <Link pt={'15px'}>Dining</Link>
              <Link pt={'15px'}>Payment</Link>
              <Link pt={'15px'}>Membership</Link>
            </Flex>
            <Flex alignItems={'center'} gap={'1.125rem'} pt={'15px'}>
              {memberId === '' ? (
                <Link
                  h={'30px'}
                  alignItems={'center'}
                  px={'15px'}
                  borderRadius={'50px'}
                  border={'1px solid #000'}
                  pt={'2px'}
                  href='/sign-in'
                >
                  Sign in / up
                </Link>
              ) : (
                <Text>Hi, {memberId}</Text>
              )}
              <Image
                src={
                  'https://www.cathaypacific.com/content/dam/header-footer-lrp/Oneworld.originalimage.svg'
                }
                alt={'Oneworld'}
                w={'32px'}
                ml={'15px'}
              />
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Flex>
  )
}

export default Header
