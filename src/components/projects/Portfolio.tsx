import { HStack, IconButton, Tag, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Portfolio() {
  const openLink = () => {
    window.open("https://github.com/AlvaroPerezPedreira/Portfolio", "_blank");
  };

  return (
    <>
      <HStack alignItems="center">
        <Text pl="2">
          <strong>Antiguo Portfolio</strong>
        </Text>
        <IconButton
          aria-label="Open link"
          variant="outline"
          size="2xs"
          onClick={openLink}
        >
          <FaExternalLinkAlt />
        </IconButton>
      </HStack>
      <HStack pl="4" my="2" flexWrap="wrap">
        <Tag.Root variant="solid" size="lg" fontWeight="bold">
          <Tag.Label>React</Tag.Label>
        </Tag.Root>
        <Tag.Root variant="solid" size="lg" fontWeight="bold">
          <Tag.Label>JavaScript</Tag.Label>
        </Tag.Root>
        <Tag.Root variant="solid" size="lg" fontWeight="bold">
          <Tag.Label>HTML</Tag.Label>
        </Tag.Root>
        <Tag.Root variant="solid" size="lg" fontWeight="bold">
          <Tag.Label>CSS</Tag.Label>
        </Tag.Root>
      </HStack>
      <Text pl="4" mb="4" textAlign="justify">
        Proyecto personal donde desarrollé mi primer portfolio utilizando React
        con JavaScript y usando CSS y HTML para el diseño y la estructura. Este
        proyecto me permitió aprender los conceptos básicos de React, así como
        mejorar mis habilidades en diseño web y maquetación. El objetivo era
        crear una plataforma atractiva y funcional para mostrar mis proyectos y
        habilidades como desarrollador de software.
      </Text>
    </>
  );
}
