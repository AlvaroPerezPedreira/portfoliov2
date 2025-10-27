import { MdArrowForwardIos } from "react-icons/md";
import { Button } from "@chakra-ui/react";
import { RefsProps } from "./types";

const linkItems: Array<{ label: string; key: keyof RefsProps }> = [
  { label: "About", key: "aboutRef" },
  { label: "Experience", key: "experienceRef" },
  { label: "Education", key: "educationRef" },
  { label: "Projects", key: "projectsRef" },
  { label: "Skills", key: "skillsRef" },
  { label: "Languages", key: "languagesRef" },
  { label: "Licenses", key: "licensesRef" },
  { label: "Certs", key: "certsRef" },
];

type Props = {
  refs: RefsProps;
  onScrollClick?: (ref: React.RefObject<HTMLDivElement | null>) => void; // opcional
};

export default function LinksBody({ refs, onScrollClick }: Props) {
  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (onScrollClick) {
      onScrollClick(ref); // usa la función que cierra Drawer
    } else {
      ref.current?.scrollIntoView({ behavior: "smooth" }); // fallback normal
    }
  };

  return (
    <>
      {linkItems.map((item) => (
        <Button
          key={item.key}
          variant="ghost"
          size="sm"
          onClick={() => handleScroll(refs[item.key])}
        >
          <MdArrowForwardIos />
          {item.label}
        </Button>
      ))}
    </>
  );
}
