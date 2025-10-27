import { Box, Heading, List } from "@chakra-ui/react";
import { LuCircleCheck } from "react-icons/lu";

export default function CoreSkills() {
  return (
    <>
      <Heading mb="4" textStyle="2xl" color="blue.500">
        Habilidades principales
      </Heading>
      <Box ml="4">
        <List.Root gap="2" variant="plain" align="center">
          <List.Item>
            <List.Indicator asChild color="green.500">
              <LuCircleCheck />
            </List.Indicator>
            Trabajo en equipo
          </List.Item>
          <List.Item>
            <List.Indicator asChild color="green.500">
              <LuCircleCheck />
            </List.Indicator>
            Comunicación efectiva
          </List.Item>
          <List.Item>
            <List.Indicator asChild color="green.500">
              <LuCircleCheck />
            </List.Indicator>
            Pensamiento crítico
          </List.Item>
          <List.Item>
            <List.Indicator asChild color="green.500">
              <LuCircleCheck />
            </List.Indicator>
            Resolución de problemas
          </List.Item>
          <List.Item>
            <List.Indicator asChild color="green.500">
              <LuCircleCheck />
            </List.Indicator>
            Aprendizaje continuo
          </List.Item>
          <List.Item>
            <List.Indicator asChild color="green.500">
              <LuCircleCheck />
            </List.Indicator>
            Multitarea
          </List.Item>
        </List.Root>
      </Box>
    </>
  );
}
