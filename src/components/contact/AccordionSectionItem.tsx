import {
  Accordion,
  Button,
  Clipboard,
  Heading,
  HStack,
  Icon,
} from "@chakra-ui/react";
import React from "react";

interface AccordionSectionItemProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export default function AccordionSectionItem({
  label,
  value,
  icon,
}: AccordionSectionItemProps) {
  return (
    <Accordion.ItemBody>
      <HStack gap={2} alignItems="center">
        <Icon fontSize="md">{icon}</Icon>
        <Heading size="md">{label}:</Heading>
      </HStack>
      <Clipboard.Root value={value} mt="2">
        <Clipboard.Trigger asChild>
          <Button variant="surface" size="sm">
            <Clipboard.Indicator />
            {value}
          </Button>
        </Clipboard.Trigger>
      </Clipboard.Root>
    </Accordion.ItemBody>
  );
}
