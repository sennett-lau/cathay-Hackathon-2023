import { Flex, Image, Link, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} width={'100%'} height={'50px'} bg={'gray.50'}>
      <Text>
        Next Chakra Starter | By
      </Text>
      <Link href={'https://0xblanc.io'} isExternal={true} color={'blanc.200'}>
        <Flex alignItems={'center'}>
          <Image src={'/assets/logo.svg'} alt={'logo'} width={'20px'} height={'20px'} ml={2} mr={1} />
          0xBlanc
        </Flex>
      </Link>
    </Flex>
  )
}

export default Footer