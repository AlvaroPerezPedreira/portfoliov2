import { Accordion, Heading, Icon, Text } from "@chakra-ui/react";
import {
  SiOracle,
  SiGooglecloud,
  SiSololearn,
  SiFreecodecamp,
  SiUdemy,
} from "react-icons/si";

export default function Certs() {
  return (
    <>
      <Heading mb="4" textStyle="2xl" color="blue.500">
        Cursos y certificaciones
      </Heading>

      <Accordion.Root
        collapsible
        multiple
        w="100%"
        mb="4"
        defaultValue={[
          "oracle",
          "google",
          "freeCodeCamp",
          "sololearn",
          "udemy",
        ]}
      >
        <Accordion.Item key="oracle" value="oracle" mb="2">
          <Accordion.ItemTrigger>
            <Icon color="#F80000">
              <SiOracle />
            </Icon>
            Oracle
          </Accordion.ItemTrigger>
          <Accordion.ItemContent pl="4" mb="2">
            <Text>- Oracle Java Foundations</Text>
            <Text>- Oracle Java Foundations: Training and Assessment</Text>
          </Accordion.ItemContent>
        </Accordion.Item>

        <Accordion.Item key="google" value="google" mb="2">
          <Accordion.ItemTrigger>
            <Icon color="#4285F4">
              <SiGooglecloud />
            </Icon>
            Google Cloud
          </Accordion.ItemTrigger>
          <Accordion.ItemContent pl="4" mb="2">
            <Text>- Introduction to Generative AI</Text>
            <Text>- Introduction to Large Language Models</Text>
            <Text>- Introduction to Responsible AI</Text>
            <Text>- Introduction to Docker</Text>
          </Accordion.ItemContent>
        </Accordion.Item>

        <Accordion.Item key="freeCodeCamp" value="freeCodeCamp" mb="2">
          <Accordion.ItemTrigger>
            <Icon color="#006400">
              <SiFreecodecamp />
            </Icon>
            freeCodeCamp
          </Accordion.ItemTrigger>
          <Accordion.ItemContent pl="4" mb="2">
            <Text>- Legacy JavaScript Algorithms and Data Structures</Text>
          </Accordion.ItemContent>
        </Accordion.Item>

        <Accordion.Item key="udemy" value="udemy" mb="2">
          <Accordion.ItemTrigger>
            <Icon color="#EC5252">
              <SiUdemy />
            </Icon>
            Udemy
          </Accordion.ItemTrigger>
          <Accordion.ItemContent pl="4" mb="2">
            <Text>
              - Vue: The complete Guide (incl. Router & Composition API)
            </Text>
            <Text>- Vue.js 3 Masterclass: Build 7 Real-World Apps</Text>
            <Text>- Spring Boot 3 Spring 6 & Hibernate for Beginners</Text>
          </Accordion.ItemContent>
        </Accordion.Item>

        <Accordion.Item key="sololearn" value="sololearn" mb="2">
          <Accordion.ItemTrigger>
            <Icon>
              <SiSololearn />
            </Icon>
            SoloLearn
          </Accordion.ItemTrigger>
          <Accordion.ItemContent pl="4" mb="2">
            <Text>- Introduction to C</Text>
            <Text>- Introduction to C#</Text>
            <Text>- Introduction to C++</Text>
            <Text>- Introduction to CSS</Text>
            <Text>- Introduction to SQL</Text>
            <Text>- Introduction to HTML</Text>
            <Text>- Introduction to Java</Text>
            <Text>- Introduction to JavaScript</Text>
            <Text>- Introduction to Python</Text>
            <Text>- Java Intermediate</Text>
            <Text>- JavaScript Intermediate</Text>
            <Text>- SQL Intermediate</Text>
            <Text>- C Intermediate</Text>
            <Text>- C# Intermediate</Text>
            <Text>- C++ Intermediate</Text>
            <Text>- Python Intermediate</Text>
            <Text>- Angular</Text>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
}
