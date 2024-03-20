import { Box, Button, Center, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import background from "../images/background.jpg"

const Home = () => {
  return (
    <>
      <Box  h={"60vh"} style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <Box pl={10} pr={"40%"} pt={"20vh"} color={'white'}>
          <Text pb={3} fontSize="xl">------- We are offering the </Text>
          <Heading pb={3} fontSize="6xl" fontWeight={"bold"}>Best Real Estate Deals</Heading>
          <Text opacity={"90%"} w={"82%"} pb={5} lineHeight={"25px"}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
            nostrud amet.
          </Text>
          <Button color={"white"} bg={"#10C66F"} mr="2">More Details</Button>
        </Box>
      </Box>
      {/* Mid section Begin */}

      <Box w={"80%"} m={"auto"} mt={30}>
      <Center> 
          <Heading pb={5} color={"#10C66F"}>Featured Properties</Heading>
        </Center>
        <Center>
        <Text color={"grey"}>Lorem ipsum dolor sit amet consectetur. Gravida et sit nibh accumsan arcu erat donec massa pulvinar.</Text>
        </Center>
        <Center>
          <Text color={"grey"}>  Rutrum pharetra id risus interdum. Donec proin quis mauris neque.</Text>
        </Center>
        <Flex justify="space-between" width={"80%"} m={"auto"} mt={10}>
            <Box borderTopLeftRadius={"10px"} borderTopRightRadius={"10px"} boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.9)"  width="30%">
              <Image borderTopLeftRadius={"10px"} borderTopRightRadius={"10px"} w={"100%"} h={"50%"} src="https://media.istockphoto.com/id/1333102002/photo/modern-style-bedroom-interior.jpg?s=612x612&w=0&k=20&c=rkG5eNaw4cHR24ZnWxEVm9FIgIBwuXHoZhULUk9E7-Q=" />
              <Box ml={4} fontSize={"sm"}>
                <Text >Mini Flat in Lekki Phase</Text>
                <Text color={"#10C66F"} fontWeight={"bold"}>N 2,500,000/sq ft</Text>
                <Text>3 Bed 2 bath</Text> <br/>
                <Text>Managed by JR Developers</Text>
              </Box>
            </Box>
            <Box borderTopLeftRadius={"10px"} borderTopRightRadius={"10px"} boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.9)"  width="30%">
              <Image borderTopLeftRadius={"10px"} borderTopRightRadius={"10px"} w={"100%"} h={"50%"} src="https://media.istockphoto.com/id/1333102002/photo/modern-style-bedroom-interior.jpg?s=612x612&w=0&k=20&c=rkG5eNaw4cHR24ZnWxEVm9FIgIBwuXHoZhULUk9E7-Q=" />
              <Box ml={4} fontSize={"sm"}>
                <Text >Mini Flat in Lekki Phase</Text>
                <Text color={"#10C66F"} fontWeight={"bold"}>N 2,500,000/sq ft</Text>
                <Text>3 Bed 2 bath</Text> <br/>
                <Text>Managed by JR Developers</Text>
              </Box>
            </Box>
            <Box borderTopLeftRadius={"10px"} borderTopRightRadius={"10px"} boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.9)"   width="30%">
              <Image borderTopLeftRadius={"10px"} borderTopRightRadius={"10px"} w={"100%"} h={"50%"} src="https://media.istockphoto.com/id/1333102002/photo/modern-style-bedroom-interior.jpg?s=612x612&w=0&k=20&c=rkG5eNaw4cHR24ZnWxEVm9FIgIBwuXHoZhULUk9E7-Q=" />
              <Box ml={4} fontSize={"sm"}>
                <Text >Mini Flat in Lekki Phase</Text>
                <Text color={"#10C66F"} fontWeight={"bold"}>N 2,500,000/sq ft</Text>
                <Text>3 Bed 2 bath</Text> <br/>
                <Text>Managed by JR Developers</Text>
              </Box>
            </Box>
        </Flex>
      </Box>


      <Box w={"90%"} m={"auto"} mt={30}>
      <Center> 
          <Heading pb={5} color={"#10C66F"}>Meet our Designer</Heading>
        </Center>
        <Center>
        <Text color={"grey"}>Lorem ipsum dolor sit amet consectetur. Proin sagittis duis et sed egestas turpis ut aliquet ultricies. Risus</Text>
        </Center>
        <Center>
          <Text color={"grey"}> vulputate semper orci neque. Eu egestas et ac sit pellentesque nullam.</Text>
        </Center>
        <Flex justify="space-between" width={"80%"} m={"auto"} mt={10}>
            <Box borderTopLeftRadius={"10px"} borderTopRightRadius={"10px"} boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.9)"  width="22%">
              <Image p={5} borderRadius={"50%"} w={"100%"} h={"70%"} src="https://www.hospitalitynet.org/picture/153125218/murphy.jpg?t=1616416546" />
              <Box ml={4} fontSize={"sm"}>
                <Center>
                  <Text >Kathryn Murphy</Text>
                </Center>
                <Center><Text>Designer</Text></Center>
              </Box>
            </Box>
            <Box borderTopLeftRadius={"10px"} borderTopRightRadius={"10px"} boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.9)"  width="22%">
              <Image p={5} borderRadius={"50%"} w={"100%"} h={"70%"} src="https://www.hospitalitynet.org/picture/153125218/murphy.jpg?t=1616416546" />
              <Box ml={4} fontSize={"sm"}>
                <Center>
                  <Text >Kathryn Murphy</Text>
                </Center>
                <Center><Text>Designer</Text></Center>
              </Box>
            </Box>
            <Box borderTopLeftRadius={"10px"} borderTopRightRadius={"10px"} boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.9)"   width="22%">
              <Image p={5} borderRadius={"50%"} w={"100%"} h={"70%"} src="https://www.hospitalitynet.org/picture/153125218/murphy.jpg?t=1616416546" />
              <Box ml={4} fontSize={"sm"}>
                <Center>
                  <Text >Kathryn Murphy</Text>
                </Center>
                <Center><Text>Designer</Text></Center>
              </Box>
            </Box>
            <Box borderTopLeftRadius={"10px"} borderTopRightRadius={"10px"} boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.9)"   width="22%">
              <Image p={5} borderRadius={"50%"} w={"100%"} h={"70%"} src="https://www.hospitalitynet.org/picture/153125218/murphy.jpg?t=1616416546" />
              <Box ml={4} fontSize={"sm"}>
                <Center>
                  <Text >Kathryn Murphy</Text>
                </Center>
                <Center><Text>Designer</Text></Center>
              </Box>
            </Box>
        </Flex>
      </Box>
  

      <Box w={"90%"} m={"auto"} mt={30}>
      <Center> 
          <Heading pb={5} color={"#10C66F"}>Top Rated Properties</Heading>
        </Center>
        <Center>
        <Text color={"grey"}>Lorem ipsum dolor sit amet consectetur. Gravida et sit nibh accumsan arcu erat donec massa pulvinar.</Text>
        </Center>
        <Center>
          <Text color={"grey"}>  Rutrum pharetra id risus interdum. Donec proin quis mauris neque.</Text>
        </Center>
        <Flex justify="space-between"  m={"auto"} mt={10}>
            <Box boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.9)"  width="32%">
              <Flex>
                <Image width={"50%"} src="https://media.istockphoto.com/id/1333102002/photo/modern-style-bedroom-interior.jpg?s=612x612&w=0&k=20&c=rkG5eNaw4cHR24ZnWxEVm9FIgIBwuXHoZhULUk9E7-Q=" />
                <Box ml={4} mt={4} mb={4} fontSize={"sm"}>
                  <Text >Mapkson Gardenia</Text>
                  <Text fontSize={"x-small"}>Mapkson Builders</Text>
                  <Text color={"#10C66F"} fontWeight={"bold"}>Greater Kailash, Delhi</Text>
                  <Text>3 Bed 2 bath</Text> <br/> <br/> <br/> <br/> <br/> <br/>
                  <Text color={'grey'}>Managed by JR Developers</Text>
                </Box>
              </Flex>
            </Box>
            <Box boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.9)"  width="32%">
              <Flex>
                <Image width={"50%"} src="https://media.istockphoto.com/id/1333102002/photo/modern-style-bedroom-interior.jpg?s=612x612&w=0&k=20&c=rkG5eNaw4cHR24ZnWxEVm9FIgIBwuXHoZhULUk9E7-Q=" />
                <Box ml={4} mt={4} mb={4} fontSize={"sm"}>
                  <Text >Mapkson Gardenia</Text>
                  <Text fontSize={"x-small"}>Mapkson Builders</Text>
                  <Text color={"#10C66F"} fontWeight={"bold"}>Greater Kailash, Delhi</Text>
                  <Text>3 Bed 2 bath</Text> <br/> <br/> <br/> <br/> <br/> <br/>
                  <Text color={'grey'}>Managed by JR Developers</Text>
                </Box>
              </Flex>
            </Box>
            <Box boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.9)"  width="32%">
              <Flex>
                <Image width={"50%"} src="https://media.istockphoto.com/id/1333102002/photo/modern-style-bedroom-interior.jpg?s=612x612&w=0&k=20&c=rkG5eNaw4cHR24ZnWxEVm9FIgIBwuXHoZhULUk9E7-Q=" />
                <Box ml={4} mt={4} mb={4} fontSize={"sm"}>
                  <Text >Mapkson Gardenia</Text>
                  <Text fontSize={"x-small"}>Mapkson Builders</Text>
                  <Text color={"#10C66F"} fontWeight={"bold"}>Greater Kailash, Delhi</Text>
                  <Text>3 Bed 2 bath</Text> <br/> <br/> <br/> <br/> <br/> <br/>
                  <Text color={'grey'}>Managed by JR Developers</Text>
                </Box>
              </Flex>
            </Box>
        </Flex>
      </Box>

      <Box>Footer</Box>

    </>

  )
}

export default Home