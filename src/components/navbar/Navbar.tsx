import {
  Box,
  HStack,
  Text,
  Avatar,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import DrawerLinks from "../content/DrawerLinks";
import { RefsProps } from "../links/types";
import NavbarIcons from "./NavbarIcons";

type Props = {
  refs: RefsProps;
};

export default function Navbar({ refs }: Props) {
  const [rightColumn] = useMediaQuery(["(max-width: 1030px)"]);
  const [leftColumn] = useMediaQuery(["(max-width: 730px)"]);

  return (
    <HStack
      h="100%"
      gap={0}
      justifyContent={rightColumn ? "space-between" : "flex-start"}
    >
      <Box w={!rightColumn ? "30%" : "auto"}>
        <Box
          display="flex"
          justifySelf="right"
          px={8}
          gap="4"
          alignItems="center"
        >
          {leftColumn && <DrawerLinks refs={refs} />}
          <Avatar.Root shape="full" size="lg">
            <Avatar.Fallback name="Álvaro Pérez Pedreira" />
            <Avatar.Image src="profile_picture.JPG" />
          </Avatar.Root>
          <Text textStyle="lg" whiteSpace="nowrap" alignSelf="center">
            Álvaro Pérez Pedreira
          </Text>
        </Box>
      </Box>
      {!rightColumn && (
        <Box w="40%" textAlign="center">
          <Heading textStyle="xl">Open to work</Heading>
        </Box>
      )}
      {!leftColumn && (
        <Box w={!rightColumn ? "30%" : "auto"}>
          <NavbarIcons />
        </Box>
      )}
    </HStack>
  );
}
