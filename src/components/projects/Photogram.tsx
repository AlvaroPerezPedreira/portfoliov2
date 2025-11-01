import { HStack, IconButton, Tag, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Photogram() {
  const openLink = () => {
    window.open("https://github.com/AlvaroPerezPedreira/Photogram", "_blank");
  };
  return (
    <>
      <HStack alignItems="center">
        <Text pl="2">
          <strong>Photogram</strong>
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
          <Tag.Label>C#</Tag.Label>
        </Tag.Root>
        <Tag.Root variant="solid" size="lg" fontWeight="bold">
          <Tag.Label>ASP.NET</Tag.Label>
        </Tag.Root>
        <Tag.Root variant="solid" size="lg" fontWeight="bold">
          <Tag.Label>HTML</Tag.Label>
        </Tag.Root>
      </HStack>
      <Text pl="4" textAlign="justify">
        Photogram es una aplicación web desarrollada en C# y ASP.NET que permite
        a los usuarios subir imágenes y categorizarlas mediante etiquetas.
        Ofrece funcionalidades como la gestión de imágenes, la búsqueda por
        etiquetas y una experiencia interactiva para compartir contenido visual.
      </Text>
    </>
  );
}
