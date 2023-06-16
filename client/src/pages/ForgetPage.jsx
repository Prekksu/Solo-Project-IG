import { Box, Button, Center, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Forgetpage() {
	return (
		<>
			<Center h={"100vh"}>
				<Box border={"1px"} borderColor={"#DDDDDD"} w={"390px"} h={"620px"}>
					<Box w={"390px"} h={"400px"}>
						<Center
							display={"flex"}
							flexDir={"column"}
							gap={"10px"}
							paddingTop={"44px"}
						>
							<Icon fontSize={"80px"} as={RiLockPasswordLine} />
							<Text fontWeight={"800"}>Trouble with logging in?</Text>
							<Center textAlign={"center"} fontSize={"14px"} w={"300px"}>
								Enter your email address, phone number or username, and we'll
								send you a link to get back into your account.
							</Center>
							<Input
								w={"300px"}
								h={"38px"}
								fontSize={"11px"}
								placeholder="Type your email"
							/>

							<Button
								w={"300px"}
								h={"40px"}
								bg={"#4cb5f9"}
								color={"white"}
								fontSize={"14px"}
								borderRadius={"10px"}
							>
								Send Login Link
							</Button>
							<Flex fontSize={"12px"} color={"#304482"}>
								Can't reset your password?
							</Flex>
							<Center
								w={"270px"}
								h={"48px"}
								color={"#737373"}
								gap={"12px"}
								fontWeight={"700"}
							>
								<Center w={"100%"}>
									<Box h="1px" w={"100%"} bgColor={"#dbdbdb"}></Box>
								</Center>
								OR
								<Center w={"100%"}>
									<Box h="1px" w={"100%"} bgColor={"#dbdbdb"}></Box>
								</Center>
							</Center>
						</Center>
						<Center gap={"5px"} paddingBottom={"128px"} fontSize={"14px"}>
							<Link to={"/register"}>
								<Flex fontWeight={"700"}>Create New Account</Flex>
							</Link>
						</Center>
						<Link to={"/login"}>
							<Center
								borderTop={"1px"}
								borderColor={"#DDDDDD"}
								paddingTop={"15px"}
								paddingBottom={"15px"}
								fontWeight={"700"}
							>
								Back to Login
							</Center>
						</Link>
					</Box>
				</Box>
			</Center>
		</>
	);
}
