import {
	Box,
	Center,
	Flex,
	Icon,
	Image,
	InputGroup,
	InputLeftElement,
	Input,
} from "@chakra-ui/react";
import { AiOutlineHome, AiFillHome, AiOutlinePlusSquare } from "react-icons/ai";
import { RxMagnifyingGlass } from "react-icons/rx";
import ig from "../assets/ig.png";

export default function Topbar() {
	return (
		<>
			<Center position={"fixed"} bg={"white"}>
				<Box
					minW={"470px"}
					w={"100vw"}
					h={"60px"}
					borderBottom={"1px"}
					borderColor={"#E4E4E4"}
					display={"flex"}
					justifyContent={"space-between"}
					alignItems={"center"}
					paddingRight={"20px"}
					paddingLeft={"20px"}
				>
					<Image src={ig} h={"48px"} />
					<InputGroup w={"280px"}>
						<InputLeftElement h={"36px"}>
							<Icon as={RxMagnifyingGlass} w={"20px"} h={"20px"} />
						</InputLeftElement>
						<Input placeholder="search" h={"36px"} bgColor={"#EFEFEF"} />
					</InputGroup>
				</Box>
			</Center>
		</>
	);
}
