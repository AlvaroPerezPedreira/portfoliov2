import { Box } from "@chakra-ui/react";
import NavbarIcon from "./NavbarIcon";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { useColorMode } from "../ui/color-mode";

export default function NavbarIcons() {
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
    <>
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
    </>
  );
}
