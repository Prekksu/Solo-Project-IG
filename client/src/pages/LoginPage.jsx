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
	useToast,
	Input,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/midllewares/userauth";

export default function Loginpage() {
	const dispatch = useDispatch();
	const nav = useNavigate();
	const toast = useToast();
	const [account, setAccount] = useState({
		emna: "",
		password: "",
	});

	async function onSubmit() {
		//blm ada API loginnya?
		toast.closeAll();
		const status = await dispatch(userLogin(account));
		if (status) {
			toast({
				title: "You are successfully logged in",
				status: "success",
				isClosable: true,
			});
			return nav("/");
		}
		return toast({
			title: "wrong email/password",
			status: "error",
			duration: 9000,
			isClosable: true,
		});
	}

	async function inputHandler(event) {
		const { value, id } = event.target;
		const tempObj = { ...account };
		tempObj[id] = value;
		setAccount(tempObj);
	}
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
							<Image src={ig} h={"51px"} />
							<Input
								w={"270px"}
								h={"38px"}
								fontSize={"11px"}
								placeholder="Phone number, username or email address"
								// value={account.emna} // hapus aja?
								id="emna"
								onChange={inputHandler}
							/>
							<Input
								w={"270px"}
								h={"38px"}
								fontSize={"11px"}
								placeholder="Password"
								id="password"
								type={"password"}
								// value={account.password} //ga perlu
								onChange={inputHandler}
							/>
							<Button
								w={"270px"}
								h={"40px"}
								bg={"#4cb5f9"}
								color={"white"}
								fontSize={"14px"}
								borderRadius={"10px"}
								onClick={onSubmit}
							>
								Log in
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
							<Flex
								w={"270px"}
								h={"20px"}
								justifyContent={"center"}
								alignItems={"center"}
								textColor={"#385185"}
								gap={"5px"}
								fontWeight={"700"}
								paddingBottom={"15px"}
							>
								<Icon fontSize={"23px"} as={AiFillFacebook} />
								<Flex>Log in with Facebook</Flex>
							</Flex>
							<Link to={"/forget/:token"}>
								<Flex
									fontSize={"12px"}
									color={"#304482"}
									paddingBottom={"45px"}
								>
									Forgotten your password?
								</Flex>
							</Link>
						</Center>
						<Center gap={"5px"} paddingBottom={"45px"} fontSize={"14px"}>
							<Flex>Don't have an account?</Flex>
							<Link to={"/register"}>
								<Flex color={"#0096F6"} fontWeight={"700"}>
									Sign up
								</Flex>
							</Link>
						</Center>
						<Center paddingBottom={"15px"} fontSize={"14px"}>
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
