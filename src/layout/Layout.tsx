import Header from '@/component/common/Header'
import RecommendationModal from '@/component/modal/RecommendationModal'
import OfferEnds from '@/component/timer/OfferEnds'
import { Flex } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <Flex
      minH={'100vh'}
      direction={'column'}
      position={'relative'}
      overflow={'hidden'}
    >
      <Header />
      <OfferEnds />
      <Flex flex={1} direction={'column'} align={'center'} justify={'center'}>
        {children}
      </Flex>
      <RecommendationModal />
    </Flex>
  )
}

export default AppLayout
