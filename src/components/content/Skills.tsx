import { languageMap, technologyMap, toolMap } from "@/utils/iconMaps";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

export default function Skills() {
  return (
    <>
      <Heading mb="4" textStyle="2xl" color="blue.500">
        Competencias técnicas
      </Heading>
      <Text pl="4" mb="2">
        <strong>Lenguajes de programación</strong>
      </Text>
      <Box pl="4" mb="4">
        <Marquee speed={60} pauseOnHover gradient={false}>
          {Object.entries(languageMap).map(([language, icon]) => (
            <Button
              key={language}
              variant="outline"
              size="xs"
              mr="2"
              mb="2"
              borderRadius="16px"
            >
              {icon} {language}
            </Button>
          ))}
        </Marquee>
      </Box>
      <Text pl="4" mb="2">
        <strong>Frameworks y tecnologías</strong>
      </Text>
      <Box pl="4" mb="4">
        <Marquee speed={60} pauseOnHover gradient={false} direction="right">
          {Object.entries(technologyMap).map(([technology, icon]) => (
            <Button
              key={technology}
              variant="outline"
              size="xs"
              mr="2"
              mb="2"
              borderRadius="16px"
            >
              {icon} {technology}
            </Button>
          ))}
        </Marquee>
      </Box>
      <Text pl="4" mb="2">
        <strong>Herramientas de desarrollo</strong>
      </Text>
      <Box pl="4">
        <Marquee speed={60} pauseOnHover gradient={false}>
          {Object.entries(toolMap).map(([tool, icon]) => (
            <Button
              key={tool}
              variant="outline"
              size="xs"
              mr="2"
              mb="2"
              borderRadius="16px"
            >
              {icon} {tool}
            </Button>
          ))}
        </Marquee>
      </Box>
    </>
  );
}
