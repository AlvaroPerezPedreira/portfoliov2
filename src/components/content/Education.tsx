import { Box, Heading, Text } from "@chakra-ui/react";

export default function Education() {
  return (
    <>
      <Heading mb="4" textStyle="2xl" color="blue.500">
        Formación académica
      </Heading>
      <Box mb="4">
        <Text pl="4" mb="2">
          <strong>Grado en Ingeniería Informática</strong>
        </Text>
        <Text textStyle="sm" pl="8" mb="1" textAlign="justify">
          Factultad de Informática, Universidad de La Coruña.
        </Text>
        <Text textStyle="sm" pl="8" mb="1" textAlign="justify">
          Mención en Ingeniería de Software.
        </Text>
        <Text textStyle="sm" pl="8" mb="1" textAlign="justify">
          Matrícula de Honor en el Trabajo Fin de Grado.
        </Text>
      </Box>
      <Box mb="4">
        <Text pl="4" mb="2">
          <strong>Colegio internacional Obradoiro</strong>
        </Text>
        <Text textStyle="sm" pl="8" mb="1" textAlign="justify">
          Bachillerato científico: dos años de formación.
        </Text>
        <Text textStyle="sm" pl="8" mb="1" textAlign="justify">
          Educación Secundaria Obligatoria: cuatro años de formación.
        </Text>
        <Text textStyle="sm" pl="8" mb="1" textAlign="justify">
          Educación Primaria: seis años de formación.
        </Text>
      </Box>
      <Box>
        <Text pl="4" mb="2">
          <strong>
            Conservatorio homologado del Colegio internacional Obradoiro
          </strong>
        </Text>
        <Text textStyle="sm" pl="8" mb="1" textAlign="justify">
          Grado Profesional: seis años de formación.
        </Text>
        <Text textStyle="sm" pl="8" mb="1" textAlign="justify">
          Grado Elemental: cuatro años de formación.
        </Text>
      </Box>
    </>
  );
}
