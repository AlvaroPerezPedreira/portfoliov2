import { Box, Heading, Text } from "@chakra-ui/react";
import {
  CompLib,
  DeepDive,
  HexArch,
  CSSProject,
  Memorama,
  Photogram,
  Portfolio,
} from "./";

export default function Projects() {
  return (
    <>
      <Heading mb="2" textStyle="2xl" color="blue.500">
        Proyectos
      </Heading>
      <Text mb="4">
        Proyectos que he creado mientras aprendía y exploraba nuevas
        tecnologías.
      </Text>
      <Box>
        <DeepDive />
      </Box>
      <Box>
        <CompLib />
      </Box>
      <Box>
        <HexArch />
      </Box>
      <Box>
        <Portfolio />
      </Box>
      <Box>
        <CSSProject />
      </Box>
      <Box>
        <Memorama />
      </Box>
      <Box>
        <Photogram />
      </Box>
    </>
  );
}
