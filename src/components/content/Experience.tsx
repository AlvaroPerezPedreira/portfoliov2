import { Box, Heading, Text, Timeline } from "@chakra-ui/react";

export default function Experience() {
  return (
    <>
      <Heading mb="4" textStyle="2xl" color="blue.500">
        Experiencia profesional
      </Heading>
      <Box w="100%" display="flex" justifyContent="center">
        <Timeline.Root maxW="400px" variant="outline">
          <Timeline.Item>
            <Timeline.Content />
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator />
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title textStyle="sm">Actualidad</Timeline.Title>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Content textAlign="right">
              <Timeline.Title w="100%" justifyContent="flex-end">
                LAPISOFT PROJECTS S.L.
              </Timeline.Title>
              <Timeline.Description>Septiembre 2025</Timeline.Description>
            </Timeline.Content>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator />
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>Full-Stack Software Engineer</Timeline.Title>
              <Text textStyle="xs">
                Desarrollo Backend: Java, Spring Boot, Gradle, PostgreSQL.
              </Text>
              <Text textStyle="xs">
                Desarrollo Frontend: Vue.js, Nuxt, TypeScript.
              </Text>
              <Text textStyle="xs">
                Participación en definición de requisitos y diseño de
                funcionalidades.
              </Text>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </Box>
    </>
  );
}
