import { Box, Center, Image, Flex, Button, Grid } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import pp from "../assets/PP.jpg";

export default function Profilepage() {
	return (
		<>
			{/* <Center
				minW={"470px"}
				w={"100vw"}
				h={"44px"}
				fontWeight={"700"}
				borderBottom={"1px"}
				borderColor={"#E4E4E4"}
			>
				Limerence
			</Center> */}
			<Center>
				<Center
					w={"760px"}
					paddingTop={"30px"}
					paddingBottom={"30px"}
					justifyContent={"center"}
				>
					<Center w={"40%"}>
						<Image borderRadius={"100px"} w={"150px"} h={"150px"} src={pp} />
					</Center>
					<Flex flexDir={"column"} w={"60%"} gap={"15px"}>
						<Flex fontSize={"25px"} fontWeight={"700"}>
							---FULLNAME---
						</Flex>
						<Flex h={"40px"} alignItems={"center"} gap={"15px"}>
							<Flex fontSize={"20px"}>Limerence</Flex>
							<Button bg={"#efefef"}> Edit Profile</Button>
						</Flex>
						<Flex gap={"30px"}>
							<Flex>3 posts</Flex>
							<Flex>304 followers</Flex>
							<Flex>283 followings</Flex>
						</Flex>
						<Flex gap={"30px"}>---BIODATA---</Flex>
					</Flex>
				</Center>
			</Center>

			<Center>
				<Center
					justifyContent={"center"}
					gap={"40px"}
					borderTop={"1px"}
					borderColor={"#E4E4E4"}
					paddingTop={"10px"}
					w={"760px"}
				>
					<Flex>POSTS</Flex>
					<Flex>SAVED</Flex>
					<Flex>TAGGED</Flex>
				</Center>
			</Center>

			<Grid
				w={"100%"}
				templateColumns={"repeat(3, 1fr)"}
				gridGap="4px"
				gridRowGap="4px"
				// maxH={${(Math.floor(posts.length / 3) + 1) * 309}px}
			>
				{/* {posts.map((val) => (
				<>
					<Box maxH={"309px"} maxW={"309px"} h={"100%"} w={"100%"}> /}
                  <GridItem>
                    <Image
                      src={val.img}
                      w={"100%"}
                      h={"100%"}
                      maxH={"309px"}
                      maxW={"309px"}
                      objectFit={"cover"}
                    />
                  </GridItem>
  
                  {/ </Box>
				</>
				))} */}
			</Grid>
			<Navbar />
		</>
	);
}
