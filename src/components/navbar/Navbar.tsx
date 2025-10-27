import { Box, HStack, Text, Avatar, Heading } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { useColorMode } from "../ui/color-mode";
import NavbarIcon from "./NavbarIcon";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const openGithub = () => {
    window.open("https://github.com/AlvaroPerezPedreira", "_blank");
  };

  const openLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/alvaro-perez-pedreira-2aaa60359",
      "_blank"
    );
  };

  return (
    <HStack h="100%" gap={0}>
      <Box w="30%" display="flex" justifyContent="flex-end">
        <Box w="50%" display="flex" justifyContent="flex-start" gap="4">
          <Avatar.Root shape="full" size="lg">
            <Avatar.Fallback name="Álvaro Pérez Pedreira" />
            <Avatar.Image src="profile_picture.JPG" />
          </Avatar.Root>
          <Text textStyle="lg" whiteSpace="nowrap" alignSelf="center">
            Álvaro Pérez Pedreira
          </Text>
        </Box>
      </Box>
      <Box w="40%" maxWidth="700px" minWidth="500px" textAlign="center">
        <Heading textStyle="xl">Open to work</Heading>
      </Box>
      <Box w="30%" display="flex" justifyContent="flex-start">
        <Box w="50%" display="flex" justifyContent="flex-end" gap="4">
          <NavbarIcon
            ariaLabel="GitHub"
            icon={<FaGithub />}
            onClick={openGithub}
          />
          <NavbarIcon
            ariaLabel="LinkedIn"
            icon={<FaLinkedin />}
            onClick={openLinkedin}
          />
          {colorMode === "light" ? (
            <NavbarIcon
              ariaLabel="Switch to dark mode"
              icon={<FaSun />}
              onClick={toggleColorMode}
            />
          ) : (
            <NavbarIcon
              ariaLabel="Switch to light mode"
              icon={<FaMoon />}
              width="20px"
              height="20px"
              onClick={toggleColorMode}
            />
          )}
        </Box>
      </Box>
    </HStack>
  );
}
