import ig from "../assets/ig.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";

import {
	Box,
	Button,
	Center,
	Flex,
	Icon,
	Image,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import { AiFillFacebook } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GiCancel } from "react-icons/gi";
import { api } from "../api/api";

export default function Registerpage() {
	const nav = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: "",
			name: "",
			username: "",
			password: "",
		},
		validationSchema: Yup.object().shape({
			email: Yup.string().required().email(),
			name: Yup.string().required(),
			username: Yup.string().required(),
			password: Yup.string()
				.min(8)
				.matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/),
			password2: Yup.string().oneOf([Yup.ref("password")]),
		}),
		onSubmit: async () => {
			const { email, name, username, password } = formik.values;
			const account = { email, name, username, password };
			const checkUser = await api
				.get("/user/login", {
					params: { emna: account.email, password: account.password },
				})
				.then((res) => {
					if (res.data.length) {
						return true;
					} else {
						return false;
					}
				});
			if (checkUser) {
				return alert("email/username already used");
			} else {
				await api.post("/user/", account).then((res) => {
					alert("register was successful");
					nav("/login");
				});
			}
		},
	});

	async function inputHandler(event) {
		const { value, id } = event.target;
		formik.setFieldValue(id, value);
	}

	return (
		<>
			<Center h={"100vh"}>
				<Box border={"1px"} borderColor={"#DDDDDD"} w={"390px"} h={"720px"}>
					<Box w={"390px"}>
						<Center
							display={"flex"}
							flexDir={"column"}
							gap={"10px"}
							paddingTop={"25px"}
						>
							<Image src={ig} h={"51px"} />
							<Center
								w={"270px"}
								h={"40px"}
								textAlign={"center"}
								fontSize={"17px"}
								fontWeight={"700"}
								color={"#737F91"}
								paddingBottom={"10px"}
							>
								Sign up to see photos and videos from your friends.
							</Center>
							<Button
								w={"270px"}
								h={"40px"}
								textColor={"white"}
								gap={"5px"}
								fontWeight={"700"}
								bg={"#0095F6"}
							>
								<Icon fontSize={"23px"} as={AiFillFacebook} />
								<Flex>Log in with Facebook</Flex>
							</Button>
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
						<Center
							display={"flex"}
							flexDir={"column"}
							gap={"10px"}
							paddingBottom={"22px"}
						>
							<InputGroup w={"270px"} h={"38px"}>
								<InputRightElement
									color={"red"}
									display={formik.errors.email ? "box" : "none"}
									w="20px"
									h={"20px"}
								>
									<Center h="38px" paddingRight={"19px"}>
										<Icon as={GiCancel} w="20px" h={"20px"}></Icon>
									</Center>
								</InputRightElement>
								<Input
									w={"270px"}
									h={"38px"}
									fontSize={"11px"}
									placeholder="Email"
									id="email"
									onChange={inputHandler}
									type="email"
								/>
							</InputGroup>
							<InputGroup w={"270px"} h={"38px"}>
								<InputRightElement
									color={"red"}
									display={formik.errors.name ? "box" : "none"}
									w="20px"
									h={"20px"}
								>
									<Center h="38px" paddingRight={"19px"}>
										<Icon as={GiCancel} w="20px" h={"20px"}></Icon>
									</Center>
								</InputRightElement>
								<Input
									w={"270px"}
									h={"38px"}
									fontSize={"11px"}
									placeholder="Full Name"
									id="name"
									onChange={inputHandler}
								/>
							</InputGroup>
							<InputGroup w={"270px"} h={"38px"}>
								<InputRightElement
									color={"red"}
									display={formik.errors.username ? "box" : "none"}
									w="20px"
									h={"20px"}
								>
									<Center h="38px" paddingRight={"19px"}>
										<Icon as={GiCancel} w="20px" h={"20px"}></Icon>
									</Center>{" "}
								</InputRightElement>
								<Input
									w={"270px"}
									h={"38px"}
									fontSize={"11px"}
									placeholder="Username"
									id="username"
									onChange={inputHandler}
								/>
							</InputGroup>
							<InputGroup w={"270px"} h={"38px"}>
								<InputRightElement
									color={"red"}
									display={formik.errors.password ? "box" : "none"}
									w="20px"
									h={"20px"}
								>
									<Center h="38px" paddingRight={"19px"}>
										<Icon as={GiCancel} w="20px" h={"20px"}></Icon>
									</Center>{" "}
								</InputRightElement>
								<Input
									w={"270px"}
									h={"38px"}
									fontSize={"11px"}
									placeholder="Password"
									id="password"
									type="password"
									onChange={inputHandler}
								/>
							</InputGroup>
							<InputGroup w={"270px"} h={"38px"}>
								<InputRightElement
									color={"red"}
									display={formik.errors.password2 ? "box" : "none"}
									w="20px"
									h={"20px"}
								>
									<Center h="38px" paddingRight={"19px"}>
										<Icon as={GiCancel} w="20px" h={"20px"}></Icon>
									</Center>{" "}
								</InputRightElement>
								<Input
									w={"270px"}
									h={"38px"}
									fontSize={"11px"}
									placeholder="Repeat password"
									id="password2"
									type="password"
									onChange={inputHandler}
								/>
							</InputGroup>
							<Button
								w={"270px"}
								h={"40px"}
								bg={"#4cb5f9"}
								color={"white"}
								fontSize={"14px"}
								borderRadius={"10px"}
								onClick={formik.handleSubmit}
							>
								Sign Up
							</Button>
						</Center>
						<Center fontSize={"14px"} paddingBottom={"22px"}>
							<Flex padding={"10px"}>Have an account?</Flex>
							<Link to={"/login"}>
								<Flex color={"#0096F6"}>Log in</Flex>
							</Link>
						</Center>
						<Center fontSize={"14px"} paddingBottom={"15px"}>
							Get the app.
						</Center>
						<Center>
							<Flex gap={"5px"}>
								<Image w={"136px"} h={"40px"} src={apple} />
								<Image w={"136px"} h={"40px"} src={google} />
							</Flex>
						</Center>
					</Box>
				</Box>
			</Center>
		</>
	);
}
