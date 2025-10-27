import {
  Box,
  HStack,
  Text,
  Avatar,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { useColorMode } from "../ui/color-mode";
import NavbarIcon from "./NavbarIcon";
import DrawerLinks from "../content/DrawerLinks";
import { RefsProps } from "../links/types";

type Props = {
  refs: RefsProps;
};

export default function Navbar({ refs }: Props) {
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

  const [rightColumn] = useMediaQuery(["(max-width: 1030px)"]);
  const [leftColumn] = useMediaQuery(["(max-width: 730px)"]);

  return (
    <HStack
      h="100%"
      gap={0}
      justifyContent={rightColumn ? "space-between" : "flex-start"}
    >
      <Box w={!rightColumn ? "30%" : "auto"}>
        <Box
          display="flex"
          justifySelf="right"
          px={8}
          gap="4"
          alignItems="center"
        >
          {leftColumn && <DrawerLinks refs={refs} />}
          <Avatar.Root shape="full" size="lg">
            <Avatar.Fallback name="Álvaro Pérez Pedreira" />
            <Avatar.Image src="profile_picture.JPG" />
          </Avatar.Root>
          <Text textStyle="lg" whiteSpace="nowrap" alignSelf="center">
            Álvaro Pérez Pedreira
          </Text>
        </Box>
      </Box>
      {!rightColumn && (
        <Box w="40%" textAlign="center">
          <Heading textStyle="xl">Open to work</Heading>
        </Box>
      )}
      <Box w={!rightColumn ? "30%" : "auto"}>
        <Box display="flex" justifySelf="left" px={8} gap="4">
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
