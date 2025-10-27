import { Heading, Text, Timeline } from "@chakra-ui/react";

export default function Experience() {
  return (
    <>
      <Heading mb="4" textStyle="2xl" color="blue.500">
        Experiencia profesional
      </Heading>
      <Timeline.Root maxW="400px" variant="outline">
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title textStyle="sm">Actualidad</Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>LAPISOFT PROJECTS S.L.</Timeline.Title>
            <Timeline.Description>Septiembre 2025</Timeline.Description>
            <Text textStyle="xs">
              Desarrollo Backend: Java, Spring Boot, Gradle, PostgreSQL.
            </Text>
            <Text textStyle="xs">Desarrollo Frontend: Vue.js, TypeScript.</Text>
            <Text textStyle="xs">
              Participación en definición de requisitos y diseño de
              funcionalidades.
            </Text>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
    </>
  );
}
