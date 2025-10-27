import { Heading, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Heading mb="4" textStyle="2xl" color="blue.500">
        Sobre mí
      </Heading>
      <Text textAlign="justify" mb="2" textStyle="md">
        Soy ingeniero informático especializado en Ingeniería de Software, con
        experiencia en el desarrollo y diseño de soluciones tecnológicas
        utilizando diversos lenguajes, herramientas y metodologías ágiles.
      </Text>
      <Text textAlign="justify" mb="2" textStyle="md">
        Me motiva aplicar mis conocimientos para crear software eficiente y
        escalable, contribuir al éxito de proyectos innovadores y continuar
        creciendo profesional y técnicamente en un entorno colaborativo.
      </Text>
    </>
  );
}
