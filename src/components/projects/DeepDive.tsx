import { HStack, IconButton, Tag, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function DeepDive() {
  const openLink = () => {
    window.open("https://github.com/AlvaroPerezPedreira/TFG", "_blank");
  };

  return (
    <>
      <HStack alignItems="center">
        <Text pl="2">
          <strong>DeepDive (finalizado)</strong>
        </Text>{" "}
        <IconButton
          aria-label="Open link"
          variant="outline"
          size="2xs"
          onClick={openLink}
        >
          <FaExternalLinkAlt />
        </IconButton>{" "}
      </HStack>

      <HStack pl="4" my="2" flexWrap="wrap">
        <Tag.Root variant="solid" size="lg" fontWeight="bold">
          <Tag.Label>Java</Tag.Label>
        </Tag.Root>
        <Tag.Root variant="solid" size="lg" fontWeight="bold">
          <Tag.Label>SpringBoot</Tag.Label>
        </Tag.Root>
        <Tag.Root variant="solid" size="lg" fontWeight="bold">
          <Tag.Label>MySQL</Tag.Label>
        </Tag.Root>
        <Tag.Root variant="solid" size="lg" fontWeight="bold">
          <Tag.Label>JavaScript</Tag.Label>
        </Tag.Root>
        <Tag.Root variant="solid" size="lg" fontWeight="bold">
          <Tag.Label>React</Tag.Label>
        </Tag.Root>
      </HStack>
      <Text pl="4" mb="4" textAlign="justify">
        DeepDive es una aplicación diseñada para la gestión de reservas en
        apartamentos y hoteles. El proyecto cuenta con un backend robusto y un
        frontend moderno, ofreciendo una experiencia fluida y eficiente para los
        usuarios. Fue la aplicación que desarrollé para mi Trabajo de Fin de
        Grado (TFG) y fue galardonada con matrícula de honor.
      </Text>
    </>
  );
}
