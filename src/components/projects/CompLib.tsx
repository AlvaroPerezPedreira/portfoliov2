import { HStack, IconButton, Tag, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function CompLib() {
  const openLink = () => {
    window.open(
      "https://github.com/AlvaroPerezPedreira/componentLib",
      "_blank"
    );
  };

  return (
    <>
      <HStack alignItems="center">
        <Text pl="2">
          <strong>Biblioteca de componentes (en desarrollo)</strong>
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
      <HStack pl="4" my="2">
        <Tag.Root variant="solid" size="lg" fontWeight="bold">
          <Tag.Label>React</Tag.Label>
        </Tag.Root>
        <Tag.Root variant="solid" size="lg" fontWeight="bold">
          <Tag.Label>TypeScript</Tag.Label>
        </Tag.Root>
        <Tag.Root variant="solid" size="lg" fontWeight="bold">
          <Tag.Label>Vite</Tag.Label>
        </Tag.Root>
        <Tag.Root variant="solid" size="lg" fontWeight="bold">
          <Tag.Label>CSS</Tag.Label>
        </Tag.Root>
      </HStack>
      <Text pl="4" mb="4">
        Proyecto personal que ofrece una librería de componentes reutilizables,
        modernos y accesibles. Está diseñada aplicando principios de
        arquitectura modular y escalable para facilitar la construcción de
        interfaces limpias y coherentes. El objetivo es proporcionar una base
        sólida y personalizable que permita a los desarrolladores integrar y
        extender componentes fácilmente en sus aplicaciones frontend.
      </Text>
    </>
  );
}
