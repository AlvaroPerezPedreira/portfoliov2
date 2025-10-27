import { Heading, HStack, Icon } from "@chakra-ui/react";

interface AccordionHeaderProps {
  title: string;
  icon: React.ReactNode;
}

export default function AccordionHeader({ title, icon }: AccordionHeaderProps) {
  return (
    <HStack gap={2} alignItems="center">
      <Icon fontSize="xl">{icon}</Icon>
      <Heading size="xl">{title}</Heading>
    </HStack>
  );
}
