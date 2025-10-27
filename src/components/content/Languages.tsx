import { Heading, RatingGroup, Stack } from "@chakra-ui/react";

export default function Languages() {
  return (
    <>
      <Heading mb="4" textStyle="2xl" color="blue.500">
        Idiomas
      </Heading>
      <Stack gap={4} ml="4">
        <RatingGroup.Root count={5} value={5} size="md" gap="4" disabled>
          <RatingGroup.HiddenInput />
          <RatingGroup.Label width="100px">Castellano</RatingGroup.Label>
          <RatingGroup.Control />
          <RatingGroup.Label width="80px" textAlign="right">
            Nativo
          </RatingGroup.Label>
        </RatingGroup.Root>
        <RatingGroup.Root count={5} value={5} size="md" gap="4" disabled>
          <RatingGroup.HiddenInput />
          <RatingGroup.Label width="100px">Gallego</RatingGroup.Label>
          <RatingGroup.Control />
          <RatingGroup.Label width="80px" textAlign="right">
            Nativo
          </RatingGroup.Label>
        </RatingGroup.Root>
        <RatingGroup.Root count={5} value={4} size="md" gap="4" disabled>
          <RatingGroup.HiddenInput />
          <RatingGroup.Label width="100px">Inglés</RatingGroup.Label>
          <RatingGroup.Control />
        </RatingGroup.Root>
      </Stack>
    </>
  );
}
