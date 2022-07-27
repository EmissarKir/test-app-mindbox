import styled, { css } from "styled-components";

export const SFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: ${({ theme }) => `2px solid ${theme.colors.primaryLigth}`};
  padding: 1rem;
  @media ${({ theme }) => theme.media.small} {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
export const SLeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SRightSide = styled.div<{ isCompleted: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.35s ease-in-out;
  opacity: 0;
  &:hover {
    color: ${({ theme }) => theme.colors.accentDark};
  }
  ${({ isCompleted }) =>
    isCompleted &&
    css`
      opacity: 1;
    `}
`;
