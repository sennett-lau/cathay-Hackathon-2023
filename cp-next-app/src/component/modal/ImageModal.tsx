import { setImageModalOpen } from '@/store/controlSlice'
import { Image, Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ImageModal = () => {
  const isModalOpen = useSelector((state: any) => state.controlSlice.isImageModalOpen)
  const imageUrl = useSelector((state: any) => state.controlSlice.imageModalUrl)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const dispatch = useDispatch()

  useEffect(() => {
    if (isModalOpen) {
      onOpen()
    }
  }, [isModalOpen])

  const onCloseHandler = () => {
    onClose()
    dispatch(setImageModalOpen({ isImageModalOpen: false }))
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onCloseHandler} isCentered>
        <ModalOverlay bg="rgba(0, 0, 0, 0.8)" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent w={'70vw'} maxW={'100vw'}>
          <ModalBody p={0}>
            <Image src={imageUrl} alt={'image modal'} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ImageModal
