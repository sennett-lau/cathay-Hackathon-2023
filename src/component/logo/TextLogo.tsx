import { Image, Link } from '@chakra-ui/react'

type Props = {
  maxW?: string
}

const TextLogo = (props: Props) => {
  const { maxW = 'none' } = props
  return (
    <Link href={'/'} maxW={maxW}>
      <Image src={'https://www.cathaypacific.com/content/dam/header-footer-lrp/cathay-en.originalimage.svg'} alt={'logo'} />
    </Link>
  )
}

export default TextLogo
