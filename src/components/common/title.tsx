import React, { ElementType } from "react";
import styled from "styled-components";

const STitle = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  font-size: 3rem;
`;

type TitleProps<T extends ElementType> = {
  label: string;
  renderAs?: T;
};

const Title = <T extends ElementType = "h1">({
  label,
  renderAs,
}: TitleProps<T>) => {
  return <STitle as={renderAs as ElementType}>{label}</STitle>;
};

export default Title;
