import { Heading, VStack } from "@chakra-ui/react";
import LinksBody from "./LinksBody";
import { RefsProps } from "./types";

type Props = {
  refs: RefsProps;
};

export default function Links({ refs }: Props) {
  return (
    <>
      <VStack gap={0} align="start">
        <Heading mb="4" textStyle="2xl" color="blue.500">
          Contenido
        </Heading>
        <LinksBody refs={refs} />
      </VStack>
    </>
  );
}
