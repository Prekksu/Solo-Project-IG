import {
	Box,
	Center,
	Flex,
	Icon,
	Image,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	Button,
	Input,
	Textarea,
} from "@chakra-ui/react";
import { AiOutlineHome, AiFillHome, AiOutlinePlusSquare } from "react-icons/ai";
import pp from "../assets/PP.jpg";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Center position={"fixed"} bottom={"0px"} zIndex={"100"} bg={"white"}>
				<Box
					minW={"470px"}
					w={"100vw"}
					h={"48px"}
					borderTop={"1px"}
					borderColor={"#E4E4E4"}
					display={"flex"}
					justifyContent={"space-around"}
					alignItems={"center"}
				>
					<Link to={"/"}>
						<Icon fontSize={"3xl"} as={AiOutlineHome} cursor={"pointer"} />
					</Link>

					<Icon
						fontSize={"3xl"}
						as={AiOutlinePlusSquare}
						cursor={"pointer"}
						onClick={onOpen}
					/>
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
									<Flex fontWeight={"bold"}>Edit product details</Flex>
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
											placeholder="Product name"
											id="name"
										></Input>
										<Textarea
											w="280px"
											h="40px"
											placeholder="Product description"
											resize={"none"}
											id="desc"
										></Textarea>
										<Input
											w="280px"
											h="40px"
											placeholder="Price"
											id="price"
										></Input>
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

					<Link to={"/profile"}>
						<Image
							w={"30px"}
							h={"30px"}
							borderRadius={"50px"}
							src={pp}
							cursor={"pointer"}
						/>
					</Link>
				</Box>
			</Center>
		</>
	);
}
