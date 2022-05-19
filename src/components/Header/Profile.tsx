import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Vinicius Holtman</Text>
          <Text color="gray.300" fontSize="small">viniholtman28@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Vinicius Holtman" src="https://github.com/Vinicius-Holtman.png" />
    </Flex>
  )
}