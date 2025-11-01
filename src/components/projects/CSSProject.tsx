import { HStack, IconButton, Tag, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function CSSProject() {
  const openLink = () => {
    window.open("https://github.com/AlvaroPerezPedreira/CSSProject", "_blank");
  };

  return (
    <>
      <HStack alignItems="center">
        <Text pl="2">
          <strong>CSS Project</strong>
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
        Este proyecto está diseñado para practicar y mejorar las habilidades en
        CSS mediante la creación de componentes interactivos y visualmente
        atractivos. El objetivo principal es aprender los conceptos
        fundamentales de CSS.
      </Text>
    </>
  );
}
