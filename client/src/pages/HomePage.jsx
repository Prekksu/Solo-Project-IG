import { Box } from "@chakra-ui/react";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

export default function Homepage() {
	return (
		<>
			<Topbar />
			<Navbar />
			<Box paddingTop={"45px"} paddingBottom={"47px"}>
				<Content />
				<Content />
				<Content />
			</Box>
		</>
	);
}
