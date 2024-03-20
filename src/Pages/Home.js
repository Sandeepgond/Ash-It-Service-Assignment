import { Box } from '@chakra-ui/react'
import React from 'react'
import background from "../images/background.jpg"

const Home = () => {
  return (
    <Box  h={"100vh"} style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}>


    </Box>

  )
}

export default Home