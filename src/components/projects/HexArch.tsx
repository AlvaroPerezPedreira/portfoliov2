import { HStack, IconButton, Tag, Text } from "@chakra-ui/react";
import HexArchTree from "./HexArchTree";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function HexArch() {
  const openLink = () => {
    window.open(
      "https://github.com/AlvaroPerezPedreira/Arquitectura-Hexagonal",
      "_blank"
    );
  };
  return (
    <>
      <HStack alignItems="center">
        <Text pl="2">
          <strong>HexArch</strong>
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
          <Tag.Label>TypeScript</Tag.Label>
        </Tag.Root>
        <Tag.Root variant="solid" size="lg" fontWeight="bold">
          <Tag.Label>Vite</Tag.Label>
        </Tag.Root>
      </HStack>
      <Text pl="4" textAlign="justify">
        Proyecto personal enfocado en aplicar la arquitectura hexagonal (puertos
        y adaptadores) en una aplicación frontend. El objetivo fue aprender a
        estructurar proyectos de forma limpia, modular y desacoplada, conectando
        la lógica de negocio con una API externa de RapidAPI mediante
        adaptadores.
      </Text>
      <HexArchTree />
    </>
  );
}
