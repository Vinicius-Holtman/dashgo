import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";


export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" mt="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="">

        </SimpleGrid>
      </Flex>
    </Flex>
  )
}