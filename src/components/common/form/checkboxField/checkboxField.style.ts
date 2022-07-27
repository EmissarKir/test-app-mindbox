import styled from "styled-components";

export const SCheckboxContainer = styled.label`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  align-items: top;
`;
export const SCheckbox = styled.input`
  position: relative;
  top: 2px;
  box-sizing: border-box;
  width: ${({ size }) => (size ? size + "px" : "16px")};
  height: ${({ size }) => (size ? size + "px" : "16px")};
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
  border-radius: 100%;
  cursor: pointer;
  transition: border-color 0.15s, background-color 0.15s;
  flex-shrink: 0;
  -webkit-appearance: none;
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: calc(${({ size }) => (size ? size + "px" : "16px")} / 2 - 1px);
    left: calc(${({ size }) => (size ? size + "px" : "16px")} / 5 - 3px);
    width: calc(${({ size }) => (size ? size + "px" : "16px")} * 0.55);
    height: calc(${({ size }) => (size ? size + "px" : "16px")} * 0.35);
    background-color: ${({ theme }) => theme.colors.accentDark};
    border-left: ${({ theme }) => `2px solid ${theme.colors.primaryLigth}`};
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.primaryLigth}`};
    opacity: 0;
    transition: opacity 0.15s, transform 0.15s, background-color 0.08s;
    transform: rotate(-50deg) scale(0, 1);
    transform-origin: 0 0;
  }
  &:checked {
    background-color: ${({ theme }) => theme.colors.accentDark};
    border-color: ${({ theme }) => theme.colors.accentDark};
    &::before {
      opacity: 1;
      transform: rotate(-50deg) scale(1, 1);
    }
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.accentDark};
    &:checked {
      background-color: ${({ theme }) => theme.colors.accentLigth};
      border-color: ${({ theme }) => theme.colors.accentLigth};
    }
    &::before {
      background-color: ${({ theme }) => theme.colors.accentLigth};
    }
  }
`;
export const SText = styled.span<{ checked: boolean }>`
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  line-height: 1.5;
  text-decoration: ${({ checked }) => (checked ? "line-through" : "")};
`;
