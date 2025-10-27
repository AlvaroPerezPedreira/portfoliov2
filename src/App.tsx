import "./App.css";
import { Box, HStack, Separator, VStack } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/content/Profile";
import Contact from "./components/contact/Contact";
import Content from "./components/content/Content";
import CoreSkills from "./components/content/CoreSkills";
import Links from "./components/content/Links";
import { useRef } from "react";
import { useMediaQuery } from "@chakra-ui/react";

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

  const [rightColumn] = useMediaQuery(["(max-width: 1030px)"]);
  const [leftColumn] = useMediaQuery(["(max-width: 730px)"]);

  return (
    <>
      <Box w="100%" h="8vh">
        <Navbar />
      </Box>
      <Separator />
      <HStack w="100%" gap={0} minH="92vh" alignItems="stretch">
        {!leftColumn && (
          <Box p={8} h="92vh" w="30%" position="sticky" top="0">
            <Box justifySelf="right">
              <Profile />
              <Links refs={refs} />
            </Box>
          </Box>
        )}
        {!leftColumn && <Separator orientation="vertical" />}
        <Box
          px="16"
          py="8"
          maxWidth={!leftColumn ? "100%" : "700px"}
          w={!leftColumn && !rightColumn ? "40%" : "100%"}
        >
          <VStack gap={4} alignItems="left">
            <Content refs={refs} />
            {rightColumn && (
              <>
                <CoreSkills />
                <Contact />
              </>
            )}
          </VStack>
        </Box>
        {!rightColumn && <Separator orientation="vertical" />}
        {!rightColumn && (
          <Box p={8} h="92vh" w="30%" position="sticky" top="0">
            <Box justifySelf="left">
              <Contact />
              <CoreSkills />
            </Box>
          </Box>
        )}
      </HStack>
    </>
  );
}

export default App;
