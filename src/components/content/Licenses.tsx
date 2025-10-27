import { Heading, Timeline } from "@chakra-ui/react";

export default function Licenses() {
  return (
    <>
      <Heading mb="4" textStyle="2xl" color="blue.500">
        Licencias
      </Heading>
      <Timeline.Root maxW="400px" variant="outline">
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>
              Licencia de conducir - Tipo B (DGT, España)
            </Timeline.Title>
            <Timeline.Description>Abril 2019</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>
              Licencia de submarinismo - OWD (PADI, España)
            </Timeline.Title>
            <Timeline.Description>Septiembre 2024</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>
              Licencia de conducir - Tipo AM, A1, A2 (DGT, España)
            </Timeline.Title>
            <Timeline.Description>Octubre 2024</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>
              Certificado de Piloto de Drones - A1/A3 (AESA, España)
            </Timeline.Title>
            <Timeline.Description>Abril 2025</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
    </>
  );
}
