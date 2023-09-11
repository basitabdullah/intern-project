import { Spinner,VStack,Box } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack h={"90vh"} justifyContent={"center"}>
   <Box transform={"scale(3)"}>
    <Spinner size={"lg"} color='red.500'/>

   </Box>
    </VStack>
  )
}

export default Loader