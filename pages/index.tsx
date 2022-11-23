import Head from 'next/head'
import Image from 'next/image'
import { Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function Home() {
  const router = useRouter()
  return (
    <div className="main">
      <Image src="/images/forest.png" width="128" height="128" alt="" />
      <Heading as="h1" size="2xl" p="2">
        Welcome to back!
      </Heading>
      <Text
        fontSize="l"
        color="gray.500"
        fontWeight="medium"
        letterSpacing="5px"
        onClick={() => router.push('/products')}>
        Discovery more <ArrowForwardIcon />
      </Text>
    </div>
  )
}
