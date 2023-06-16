import { Box, Center, Flex, Icon, Image } from "@chakra-ui/react";
import { AiOutlineHome, AiFillHome, AiOutlinePlusSquare } from "react-icons/ai";
import pp from "../assets/PP.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
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
					<Icon fontSize={"3xl"} as={AiOutlinePlusSquare} cursor={"pointer"} />

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
