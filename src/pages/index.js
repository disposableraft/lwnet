import React from "react"
import {
  Box,
  Heading,
  Modal,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Link,
  Text,
  ModalFooter,
} from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Layout>
      <SEO title="Home" />
      <Box>
        <Heading>> NO</Heading>
        <Heading>> IDEAS</Heading>
        <Heading>> BUT </Heading>
        <Heading>
          > IN THINGS
          <sup>
            <Link onClick={onOpen}>1</Link>
          </sup>
        </Heading>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Text>Say it! No ideas but in things. Mr.</Text>
            <Text>Paterson has gone away</Text>
            <Text>to rest and write. Inside the bus one sees</Text>
            <Text>his thoughts sitting and standing. His thoughts</Text>
            <Text>alight and scatter—</Text>
            <Text>Who are these people (how complex</Text>
            <Text>this mathematic) among whom I see myself</Text>
            <Text>in the regularly ordered plateglass of</Text>
            <Text>his thoughts, glimmering before shoes and bicycles—?</Text>
            <Text>They walk incommunicado, the</Text>
            <Text>equation is beyond solution, yet</Text>
            <Text>its sense is clear—that they may live</Text>
            <Text>his thought is listed in the Telephone</Text>
            <Text>Directory—</Text>
          </ModalBody>
          <ModalFooter>
            An excerpt from "Paterson," by William Carlos Williams
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  )
}
