import { NextPage } from 'next'
import { Flex, Box, Image, Heading, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
const ProductPage: NextPage = () => {
  return (
    <Box>
      <Flex p="10px" gap="2" alignItems="center">
        <Image
          objectFit="cover"
          alt="avatar"
          src="/images/forest.png"
          boxSize="50px"
        />
        <Flex
          justifyContent="left"
          w="auto"
          flexDirection="column"
          alignItems="center">
          <Heading as="h6" size="m">
            Khoi Nguyen
          </Heading>
          <Text lineHeight="none" color="gray.400" fontSize="xs">
            What do you feed today?
          </Text>
        </Flex>
        <Box ms="auto">
          <SearchIcon />
        </Box>
      </Flex>
      <h1>This is product page</h1>
    </Box>
  )
}
export default ProductPage
