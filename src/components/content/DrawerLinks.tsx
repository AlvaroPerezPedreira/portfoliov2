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

type Props = { refs: RefsProps };

export default function DrawerLinks({ refs }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // Función que abre el Drawer
  const handleOpen = () => setIsOpen(true);

  // Función que cierra el Drawer
  const handleClose = () => setIsOpen(false);

  // Función que pasa a LinksBody: scroll + cerrar Drawer
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
      onOpenChange={(open) => setIsOpen(open)}
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
                {/* Pasamos handleScrollAndClose como prop */}
                <LinksBody
                  refs={refs}
                  onScrollClick={handleScrollAndClose} // ✅ nueva prop
                />
              </VStack>
            </Drawer.Body>

            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
