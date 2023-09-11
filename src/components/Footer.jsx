import { VStack,Box,Stack,Text,Avatar} from '@chakra-ui/react'
import React from 'react'
import image from "../assets/WhatsApp Image 2023-09-09 at 15.25.35.jpg";

const Footer = () => {
  return (
    <Box
  
    bgColor={"blackAlpha.900"}
    color={"whiteAlpha.700"}
    minH={"48"}
    px={"16"}
    py={["16", "8"]}
  >
    <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
      <VStack w={"full"} alignItems={["center", "flex-start"]}>
        <Text fontWeight={"bold"}>About Us</Text>
        <Text
          color={"whiteAlpha.700"}
          fontSize={"sm"}
          letterSpacing={"widest"}
          textAlign={["center", "left"]}
          maxW={"80"}
        >
   Punks was born out of a love for beer and a desire to connect beer enthusiasts from all walks of life. Our team of dedicated beer enthusiasts, tech experts, and designers came together to create a platform that simplifies and enriches the beer-drinking experience. 
        </Text>
      </VStack>
      <VStack>
        <Avatar src={image} boxSize={"28"} mt={["4", "0"]} />
        <Text>OUR FOUNDER</Text>
      </VStack>
    </Stack>
  </Box>
  )
}

export default Footer