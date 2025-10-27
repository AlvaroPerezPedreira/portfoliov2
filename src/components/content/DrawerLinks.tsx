import {
  IconButton,
  CloseButton,
  Drawer,
  Portal,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import LinksBody from "../links/LinksBody";
import { RefsProps } from "../links/types";
import { useState } from "react";
import NavbarIcons from "../navbar/NavbarIcons";

type Props = { refs: RefsProps };

export default function DrawerLinks({ refs }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  const handleScrollAndClose = (
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    handleClose();
  };

  return (
    <Drawer.Root
      placement="start"
      open={isOpen}
      onOpenChange={(details) => setIsOpen(details.open)}
      closeOnInteractOutside
    >
      <Drawer.Trigger asChild>
        <IconButton variant="outline" size="sm" onClick={handleOpen}>
          <RxHamburgerMenu />
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>
                <Heading mb="4" textStyle="2xl" color="blue.500">
                  Contenido
                </Heading>
              </Drawer.Title>
            </Drawer.Header>

            <Drawer.Body>
              <VStack gap={0} align="start">
                <LinksBody refs={refs} onScrollClick={handleScrollAndClose} />
              </VStack>
            </Drawer.Body>
            <Drawer.Footer justifyContent="center" mb="4">
              <NavbarIcons />
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
