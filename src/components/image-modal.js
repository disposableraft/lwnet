import React, { useEffect, useRef } from "react"
import {
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/core"

const fitImageToWindow = (windowY, windowX, aspectRatio) => {
  if (aspectRatio > 1) {
    // Landscape
    const fit = 0.87
    const smallSide = windowY < windowX ? windowY : windowX
    const fitWidthToWindow = fit * smallSide * aspectRatio
    return Math.floor(fitWidthToWindow)
  } else {
    // Portrait or square
    return Math.floor(windowY * aspectRatio)
  }
}

const ImageModal = ({ thumbnail, fullsize }) => {
  let imgWidth = useRef()

  useEffect(() => {
    const height = window.innerHeight
    const width = window.innerWidth
    const aspectRatio = fullsize.props.fluid.aspectRatio
    imgWidth.current = fitImageToWindow(height, width, aspectRatio)
  })

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Link onClick={onOpen}>{thumbnail}</Link>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={["full", `${imgWidth.current}px`]}
      >
        <ModalOverlay backgroundColor={"gray.600"} />
        <ModalContent top={["-1.75rem"]}>
          <ModalHeader></ModalHeader>
          <ModalBody
            cursor="pointer"
            onClick={onClose}
            mb={["6", "8"]}
            mx={["2", "4"]}
          >
            {fullsize}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ImageModal
