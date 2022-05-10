import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Vinicius Holtman</Text>
        <Text color="gray.300" fontSize="small">viniholtman28@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Vinicius Holtman" src="https://github.com/Vinicius-Holtman.png" />
    </Flex>
  )
}