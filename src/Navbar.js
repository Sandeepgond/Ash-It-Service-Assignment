import React from "react";
import { Box, Flex, Spacer, Button, Text, Icon, Image } from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import companyLogo from "./images/companyLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding=".5rem"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="999" 
        bg="transparent"
        color="#10C66F"
        pl={10}
        pr={10}
    >
     
        <Flex w={"50%"} >
          <Image w={100} src={companyLogo} alt="company logo" />
        </Flex>
        <Flex align="center" justifyContent={"space-around"} w={"90%"} >
          <Link to={'/'}>
            <Text variant="ghost" mr="2">
                Home
            </Text>
          </Link>
          <Link to={'/property'}>
            <Text variant="ghost" mr="2">
                Properties
            </Text>
          </Link>
          <Link to={'/design'}>
            <Text variant="ghost" mr="2">
                Design
            </Text>
          </Link>
          <Link to={'/search'}>
            <Text variant="ghost" mr="2">
                Search
            </Text>
          </Link>
          <Link to={'/aboutus'}>
            <Text variant="ghost" mr="2">
                About Us
            </Text>
          </Link>
          <Link to={'/contactus'}>
            <Text variant="ghost" mr="2">
                Contact Us
            </Text>
          </Link>
         
          <Icon> <FiUser size="lg"/> </Icon>

        <Button bg={"#10C66F"} color={"white"} mr="2">
            Create Listing 
        </Button>
        </Flex>
      <Spacer />
      <Box>
      </Box>
    </Flex>
  );
};

export default Navbar;
