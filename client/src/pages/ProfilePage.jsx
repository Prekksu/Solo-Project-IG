import {
	Box,
	Center,
	Image,
	Flex,
	Button,
	Grid,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	Input,
	Textarea,
	Icon,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import pp from "../assets/PP.jpg";
import { IoMdClose } from "react-icons/io";
import { auth_types } from "../redux/types";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Profilepage() {
	const nav = useNavigate();
	const userSelector = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	function logout() {
		dispatch({ type: auth_types.logout });
		localStorage.removeItem("token");
		nav("/login");
	}

	const { isOpen, onOpen, onClose } = useDisclosure();

	// async function onSubmit() {
	// 	const formData = new FormData();
	// 	formData.append("avatar", selectedFile);

	// 	await api
	// 		.patch("/user/" + userSelector.id, { ...formData, ...profile })
	// 		.then((res) => {
	// 			console.log(res.data);
	// 			dispatch({
	// 				type: "login",
	// 				payload: res.data,
	// 			});
	// 			onClose();
	// 		});
	// }
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
							{userSelector.name}
						</Flex>
						<Flex h={"40px"} alignItems={"center"} gap={"15px"}>
							<Flex fontSize={"20px"}>{userSelector.username}</Flex>
							<Button bg={"#efefef"} onClick={onOpen}>
								Edit Profile
							</Button>
							<Button onClick={logout} bg={"red"}>
								Logout
							</Button>
							<Modal isOpen={isOpen} onClose={onClose}>
								<ModalOverlay />
								<ModalContent>
									<Flex
										bgColor={"white"}
										maxW={"524px"}
										w={"524px"}
										h="100%"
										borderRadius={"5px"}
										flexDir={"column"}
										pb="20px"
									>
										<Flex
											justifyContent={"space-between"}
											w="100%"
											fontSize="24px"
											padding={"24px"}
										>
											<Flex fontWeight={"bold"}>Edit profile details</Flex>
											<Flex alignItems={"end"}>
												<Icon
													as={IoMdClose}
													color="black"
													cursor={"pointer"}
													onClick={() => onClose()}
												></Icon>
											</Flex>
										</Flex>
										<Flex
											padding={"0px 24px 24px 24px"}
											justifyContent={"space-between"}
										>
											<Flex flexDir={"column"} gap="10px">
												<Image w={"180px"} h="180px"></Image>
												<Input
													accept="image/png, image/jpeg"
													type="file"
													display={"none"}
												></Input>
												<Button fontWeight={"hairline"}>Change photo</Button>
											</Flex>
											<Flex flexDir={"column"} gap={"10px"}>
												<Input
													w="280px"
													h="40px"
													placeholder="Profile name"
													id="name"
												></Input>

												<Input
													w="280px"
													h="40px"
													placeholder="Username"
													id="price"
												></Input>
												<Textarea
													w="280px"
													h="40px"
													placeholder="Bio"
													resize={"none"}
													id="desc"
												></Textarea>
											</Flex>
										</Flex>

										<Center w="100%">
											<Center
												borderRadius={"5px"}
												fontWeight={"600"}
												color={"white"}
												bgColor={"#38A169"}
												h="48px"
												w="90%"
												cursor={"pointer"}
											>
												SAVE
											</Center>
										</Center>
									</Flex>
								</ModalContent>
							</Modal>
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
