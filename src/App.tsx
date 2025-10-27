import "./App.css";
import { Box, HStack, Separator } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/content/Profile";
import Contact from "./components/contact/Contact";
import Content from "./components/content/Content";
import CoreSkills from "./components/content/CoreSkills";
import Links from "./components/content/Links";
import { useRef } from "react";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const languagesRef = useRef<HTMLDivElement>(null);
  const licensesRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const refs = {
    aboutRef,
    experienceRef,
    educationRef,
    skillsRef,
    languagesRef,
    licensesRef,
    certsRef,
    projectsRef,
  };

  return (
    <>
      <Box w="100%" h="8vh">
        <Navbar />
      </Box>
      <Separator />
      <HStack w="100%" gap={0} minH="92vh" alignItems="stretch">
        <Box p={8} h="92vh" w="30%" position="sticky" top="0">
          <Box w="50%" justifySelf="right">
            <Profile />
            <Links refs={refs} />
          </Box>
        </Box>
        <Separator orientation="vertical" />
        <Box px="16" py="8" w="40%" minWidth="500px" maxWidth="700px">
          <Content refs={refs} />
        </Box>
        <Separator orientation="vertical" />
        <Box p={8} h="92vh" w="30%" position="sticky" top="0">
          <Box w="50%" justifySelf="left">
            <Contact />
            <CoreSkills />
          </Box>
        </Box>
      </HStack>
    </>
  );
}

export default App;
