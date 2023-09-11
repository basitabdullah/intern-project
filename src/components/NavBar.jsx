import { Avatar, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import propic from "../assets/WhatsApp Image 2023-09-09 at 15.25.35.jpg"
const NavBar = () => {
  return (
<>
<HStack bgColor={"blackAlpha.900"} spacing={"10"}>
<Text fontSize={"4xl"} fontWeight={"bold"} color={"white"} ml={"3"}>Punks</Text>
<Button color={"whiteAlpha.600"} variant={"unstyled"}>
    <Link to={"/"}>Home</Link>
</Button>
<Button color={"whiteAlpha.600"} variant={"unstyled"}>
    <Link to={"/drinks"}>Drinks</Link>
</Button>
<Button color={"whiteAlpha.600"} variant={"unstyled"}>
    <Link to={"/connect"}>Connect</Link>
</Button>

<Avatar src={propic} size={"sm"} position={"absolute"} right={"10"}/>
</HStack>
<HStack bgColor={"blackAlpha.900"} spacing={"10"}>

</HStack>
</>
  )
}

export default NavBar