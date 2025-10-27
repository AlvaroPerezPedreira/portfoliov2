import React from "react";

export type RefsProps = Record<
  | "aboutRef"
  | "experienceRef"
  | "educationRef"
  | "skillsRef"
  | "languagesRef"
  | "licensesRef"
  | "certsRef"
  | "projectsRef",
  React.RefObject<HTMLDivElement | null>
>;
