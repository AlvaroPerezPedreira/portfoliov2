import { IconButton, Icon } from "@chakra-ui/react";
import React from "react";

interface NavbarIconProps {
  ariaLabel: string;
  icon: React.ReactNode;
  width?: string;
  height?: string;
  onClick?: () => void;
}

export default function NavbarIcon({
  ariaLabel,
  icon,
  width = "24px",
  height = "24px",
  onClick,
}: NavbarIconProps) {
  return (
    <IconButton
      variant="ghost"
      w="24px"
      p={1}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <Icon w={width} h={height}>
        {icon}
      </Icon>
    </IconButton>
  );
}
