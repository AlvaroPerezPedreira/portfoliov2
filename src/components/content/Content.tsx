import { Box } from "@chakra-ui/react";
import {
  Experience,
  About,
  Education,
  Skills,
  Languages,
  Licenses,
  Certs,
} from "./index";
import { RefsProps } from "./Links";
import Projects from "../projects/Projects";

export default function Content({ refs }: { refs: RefsProps }) {
  return (
    <>
      <Box ref={refs.aboutRef}>
        <About />
      </Box>
      <Box ref={refs.experienceRef}>
        <Experience />
      </Box>
      <Box ref={refs.educationRef}>
        <Education />
      </Box>
      <Box ref={refs.projectsRef}>
        <Projects />
      </Box>
      <Box ref={refs.skillsRef}>
        <Skills />
      </Box>
      <Box ref={refs.languagesRef}>
        <Languages />
      </Box>
      <Box ref={refs.licensesRef}>
        <Licenses />
      </Box>
      <Box ref={refs.certsRef}>
        <Certs />
      </Box>
    </>
  );
}
