import { Box, Center, Flex, Icon, Image } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { BsHeart, BsChat, BsBookmark } from "react-icons/bs";
import { SlPaperPlane } from "react-icons/sl";

import pp from "../assets/PP.jpg";
import jihyo from "../assets/Jihyo.png";

export default function Content() {
	return (
		<>
			<Center>
				<Box
					w={"470px"}
					// h={"700px"}
					borderBottom={"1px"}
					borderColor={"#E4E4E4"}
					paddingTop={"20px"}
					paddingBottom={"20px"}
				>
					{/* profile */}
					<Box
						w={"470px"}
						h={"48px"}
						display={"flex"}
						justifyContent={"space-between"}
					>
						<Flex gap={"10px"} h={"100%"} alignItems={"center"}>
							<Image borderRadius={"50px"} w={"42px"} h={"42px"} src={pp} />
							<Flex fontWeight={"700"}>Limerence</Flex>
							<Flex>•</Flex>
							<Flex>1 d</Flex>
						</Flex>
						<Icon fontSize={"20px"} h={"100%"} as={BsThreeDots} />
					</Box>
					{/* image */}
					<Box w={"470px"} h={"470px"}>
						<Image w={"100%"} h={"100%"} src={jihyo} />
					</Box>
					{/* icon */}
					<Box
						w={"100%"}
						h={"46px"}
						paddingLeft={"15px"}
						paddingRight={"15px"}
						display={"flex"}
						justifyContent={"space-between"}
					>
						<Flex alignItems={"center"} gap={"15px"}>
							<Icon fontSize={"25px"} as={BsHeart} />
							<Icon fontSize={"25px"} as={BsChat} />
							<Icon fontSize={"25px"} as={SlPaperPlane} />
						</Flex>
						<Flex alignItems={"center"}>
							<Icon fontSize={"25px"} as={BsBookmark} />
						</Flex>
					</Box>
					{/* likes */}
					<Flex paddingLeft={"15px"} fontWeight={"700"}>
						291 Likes
					</Flex>
					<Flex paddingLeft={"15px"} gap={"15px"}>
						<Flex fontWeight={"700"}>Limerence</Flex>
						<Flex>---CAPTION---</Flex>
					</Flex>
				</Box>
			</Center>
		</>
	);
}
