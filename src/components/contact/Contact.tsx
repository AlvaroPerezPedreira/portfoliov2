import { Accordion, Heading, Stack } from "@chakra-ui/react";
import { IoMailOutline } from "react-icons/io5";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";
import { MdPhone } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";
import AccordionSectionItem from "./AccordionSectionItem";
import AccordionHeader from "./AccordionHeader";

export default function Contact() {
  return (
    <Stack textAlign="left">
      <Heading textStyle="2xl" color="blue.500">
        Contacto
      </Heading>
      <Accordion.Root
        collapsible
        multiple
        w="100%"
        defaultValue={["emails"]}
        mb="4"
      >
        <Accordion.Item key="emails" value="emails">
          <Accordion.ItemTrigger>
            <AccordionHeader
              title="Correos electrónicos"
              icon={<IoMailOutline />}
            />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent pl="4">
            <AccordionSectionItem
              label="Outlook"
              value="alvaro.perez0@outlook.com"
              icon={<PiMicrosoftOutlookLogo />}
            />
            <AccordionSectionItem
              label="Gmail"
              value="aperezpedreira@gmail.com"
              icon={<BiLogoGmail />}
            />
          </Accordion.ItemContent>
        </Accordion.Item>
        <Accordion.Item key="phone" value="phone">
          <Accordion.ItemTrigger>
            <AccordionHeader title="Teléfono" icon={<MdPhone />} />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent pl="4">
            <AccordionSectionItem
              label="Teléfono móvil"
              value="+34 620 799 159"
              icon={<CiMobile1 />}
            />
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </Stack>
  );
}
