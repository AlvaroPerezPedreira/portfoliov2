import { ReactNode } from "react";
import { Icon } from "@chakra-ui/react";

import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaGoogleDrive,
  FaFigma,
} from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FiDatabase } from "react-icons/fi";
import {
  SiSpring,
  SiHibernate,
  SiPostgresql,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiIntellijidea,
  SiPostman,
  SiApachemaven,
} from "react-icons/si";
import {
  TbHexagonLetterC,
  TbBrandCSharp,
  TbBrandMysql,
  TbBrandVite,
} from "react-icons/tb";
import { BsMicrosoftTeams } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";

type IconMap = Record<string, ReactNode>;

export const languageMap: IconMap = {
  Java: (
    <Icon color="#E76F00">
      <FaJava />
    </Icon>
  ),
  JavaScript: (
    <Icon color="#F7DF1E">
      <BiLogoJavascript />
    </Icon>
  ),
  TypeScript: (
    <Icon color="#3178C6">
      <BiLogoTypescript />
    </Icon>
  ),
  HTML: (
    <Icon color="#E34F26">
      <FaHtml5 />
    </Icon>
  ),
  CSS: (
    <Icon color="#1572B6">
      <FaCss3Alt />
    </Icon>
  ),
  SQL: (
    <Icon color="#00758F">
      <FiDatabase />
    </Icon>
  ),
  C: (
    <Icon color="#00599C">
      <TbHexagonLetterC />
    </Icon>
  ),
  "C#": (
    <Icon color="#68217A">
      <TbBrandCSharp />
    </Icon>
  ),
};

export const technologyMap: IconMap = {
  Spring: (
    <Icon color="#6DB33F">
      <SiSpring />
    </Icon>
  ),
  Hibernate: (
    <Icon color="#BCAE79">
      <SiHibernate />
    </Icon>
  ),
  MySQL: (
    <Icon color="#00758F">
      <TbBrandMysql />
    </Icon>
  ),
  PostgreSQL: (
    <Icon color="#F29111">
      <SiPostgresql />
    </Icon>
  ),
  React: (
    <Icon color="#61DAFB">
      <SiReact />
    </Icon>
  ),
  Vue: (
    <Icon color="#42B883">
      <SiVuedotjs />
    </Icon>
  ),
  Node: (
    <Icon color="#339933">
      <FaNodeJs />
    </Icon>
  ),
  Vite: (
    <Icon color="#FFD62E">
      <TbBrandVite />
    </Icon>
  ),
  Tailwind: (
    <Icon color="#38BDF8">
      <SiTailwindcss />
    </Icon>
  ),
  Maven: (
    <Icon color="#C71A36">
      <SiApachemaven />
    </Icon>
  ),
};

export const toolMap: IconMap = {
  VSCode: (
    <Icon color="#007ACC">
      <VscVscode />
    </Icon>
  ),
  IntelliJ: (
    <Icon>
      <SiIntellijidea />
    </Icon>
  ),
  Postman: (
    <Icon color="#FF6C37">
      <SiPostman />
    </Icon>
  ),
  GitHub: (
    <Icon>
      <FaGithub />
    </Icon>
  ),
  Word: (
    <Icon color="#2B579A">
      <FaFileWord />
    </Icon>
  ),
  Excel: (
    <Icon color="#217346">
      <FaFileExcel />
    </Icon>
  ),
  PowerPoint: (
    <Icon color="#D24726">
      <FaFilePowerpoint />
    </Icon>
  ),
  Teams: (
    <Icon color="#6264A7">
      <BsMicrosoftTeams />
    </Icon>
  ),
  Drive: (
    <Icon>
      <FaGoogleDrive />
    </Icon>
  ),
  Figma: (
    <Icon>
      <FaFigma />
    </Icon>
  ),
};
