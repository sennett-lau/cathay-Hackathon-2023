import { Flex, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { FC } from 'react'
import TextLogo from '@/component/logo/TextLogo'

export const getServerSideProps: GetServerSideProps = async () => {
  // for api call in server side
  return {
    props: {
    },
  }
}

type Props = {
  // server side api call's props can be defined here
}

const Home: FC<Props> = (props) => {

  return (
    <>
      <Head>
        <title>Cathay Hackathon 2023</title>
        <meta name="description" content="Cathay Hackathon 2023" />

        <meta name="og:title" content="Cathay Hackathon 2023" />
        <meta name="og:description" content="Cathay Hackathon 2023" />
        <meta name="og:image" content="" />
        <meta property="og:image:width" content="2500" />
        <meta property="og:image:height" content="1330" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="Cathay Hackathon 2023" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Cathay Hackathon 2023" />
        <meta name="twitter:description" content="Cathay Hackathon 2023" />
        <meta name="twitter:image" content="" />
      </Head>
      <Flex width={'100%'} justifyContent={'center'} alignItems={'center'} height={'100%'}>
        <TextLogo />
      </Flex>
    </>
  )
}

export default Home
