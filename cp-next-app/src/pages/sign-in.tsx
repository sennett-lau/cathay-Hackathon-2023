import { setRecommendationModalOpen } from '@/store/controlSlice'
import { setMemberId } from '@/store/memberSlice'
import { Container, Flex, Image, Input, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const SignInPage = () => {
  const [loginId, setLoginId] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const router = useRouter()

  const signIn = async () => {
    if (!loginId || !password) return
    try {
      // const resp = await userApi.post('/sign-in', {
      //   username: loginId,
      //   password,
      // })

      // if (resp.status === 200) {
      // add memberId to store

      dispatch(
        setMemberId({
          memberId: loginId,
        }),
      )

      // redirect to home page
      router.push('/')

      dispatch(
        setRecommendationModalOpen({
          isRecommendationModalOpen: true,
        }),
      )
      // }
    } catch (error) {
      console.log(error)
      return
    }
  }

  return (
    <Container maxW='container.xl'>
      <Flex flexDir={'column'} w={'100%'}>
        <Text fontSize={'34px'} mb={'40px'}>
          Sign in
        </Text>
        <Text mb={'56px'}>
          If you were an Asia Miles member, sign in to unlock a world of Cathay
          member benefits and rewards.
        </Text>
        <Flex>
          <Flex flexDir={'column'} gap={'16px'} w={'50%'}>
            <Flex h={'60px'}>
              <Input
                placeholder={'Membership number'}
                borderRadius={'0px'}
                h={'60px'}
                onChange={(e) => setLoginId(e.target.value)}
              />
            </Flex>
            <Flex h={'60px'}>
              <Input
                placeholder={'Password'}
                borderRadius={'0px'}
                h={'60px'}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
              />
            </Flex>
            <Flex
              w={'100%'}
              h={'60px'}
              bg={loginId && password ? '#2c4036' : '#BFBFBF'}
              justifyContent={'center'}
              onClick={signIn}
              cursor={loginId && password ? 'pointer' : 'not-allowed'}
              alignItems={'center'}
            >
              <Text color={'#fff'} fontSize={'16px'} fontWeight={'semibold'}>
                Sign in
              </Text>
            </Flex>
          </Flex>
          <Flex pl={'100px'} pt={'32px'} flex={1}>
            <Image
              src={
                'https://www.cathaypacific.com/content/dam/focal-point/cx/membership/page/sign-in/iStock-971206774.renditionimage.900.600.jpg'
              }
            />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default SignInPage
