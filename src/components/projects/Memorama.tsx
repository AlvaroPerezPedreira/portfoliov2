import { HStack, IconButton, Tag, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Memorama() {
  const openLink = () => {
    window.open("https://github.com/AlvaroPerezPedreira/Memorama", "_blank");
  };
  return (
    <>
      <HStack alignItems="center">
        <Text pl="2">
          <strong>Memorama</strong>
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
          <Tag.Label>HTML</Tag.Label>
        </Tag.Root>
        <Tag.Root variant="solid" size="lg" fontWeight="bold">
          <Tag.Label>CSS</Tag.Label>
        </Tag.Root>
      </HStack>
      <Text pl="4" mb="4">
        Memorama consiste en un conjunto de cartas distribuidas boca abajo,
        donde el usuario debe emparejar cartas iguales de manera estratégica y
        rápida.
      </Text>
    </>
  );
}
