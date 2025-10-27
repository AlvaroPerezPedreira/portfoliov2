import { Button, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

export type RefsProps = Record<
  | "aboutRef"
  | "experienceRef"
  | "educationRef"
  | "skillsRef"
  | "languagesRef"
  | "licensesRef"
  | "certsRef"
  | "projectsRef",
  React.RefObject<HTMLDivElement | null>
>;

type Props = { refs: RefsProps };

export default function Links({ refs }: Props) {
  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <VStack gap={0} align="start">
        <Heading mb="4" textStyle="2xl" color="blue.500">
          Contenido
        </Heading>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleScroll(refs.aboutRef)}
        >
          <MdArrowForwardIos />
          About
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleScroll(refs.experienceRef)}
        >
          <MdArrowForwardIos />
          Experience
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleScroll(refs.educationRef)}
        >
          <MdArrowForwardIos />
          Education
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleScroll(refs.projectsRef)}
        >
          <MdArrowForwardIos />
          Proyectos
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleScroll(refs.skillsRef)}
        >
          <MdArrowForwardIos />
          Skills
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleScroll(refs.languagesRef)}
        >
          <MdArrowForwardIos />
          Languages
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleScroll(refs.licensesRef)}
        >
          <MdArrowForwardIos />
          Licenses
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleScroll(refs.certsRef)}
        >
          <MdArrowForwardIos />
          Certs
        </Button>
      </VStack>
    </>
  );
}
