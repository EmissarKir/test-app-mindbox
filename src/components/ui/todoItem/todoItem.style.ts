import { motion } from "framer-motion";
import styled from "styled-components";
import { ReactComponent as IconCross } from "../../../assets/icons/xmark.svg";

export const STodoItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
  padding: 1rem;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.bg};
  :not(:last-child) {
    border-bottom: none;
  }
`;
export const SIconCross = styled(IconCross)`
  width: 30px;
  height: 30px;
  fill: ${({ theme }) => theme.colors.primary};
  stroke: ${({ theme }) => theme.colors.primary};
  opacity: 0;
  cursor: pointer;
  ${STodoItem}:hover & {
    opacity: 1;
  }
  &:hover {
    fill: ${({ theme }) => theme.colors.accentDark};
    stroke: ${({ theme }) => theme.colors.accentDark};
  }
`;
