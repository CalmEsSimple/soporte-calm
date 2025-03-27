import Paragraph from "@/components/Atoms/Typography/Text";
import Titles from "@/components/Atoms/Typography/Titles";
import React from "react";
import { SectionHeaderProps } from "./types";
import { SectionHeaderStyles } from "./styled";

const SectionHeader = ({
  title,
  paragraph,
  titleStyles,
  paragraphStyles,
  children,
  sectionHeaderStyles,
}: SectionHeaderProps) => {
  return (
    <SectionHeaderStyles {...sectionHeaderStyles}>
      <Titles {...titleStyles}>{title}</Titles>
      <Paragraph {...paragraphStyles}>
        {paragraph.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Paragraph>
      {children}
    </SectionHeaderStyles>
  );
};

export default SectionHeader;
