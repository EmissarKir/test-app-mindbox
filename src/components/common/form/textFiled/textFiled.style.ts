import styled from "styled-components";

export const STextField = styled.div`
  position: relative;
  width: 100%;
  margin: "0 0 10px 0";
  padding: "0 0 20px 0";
  & input {
    width: 100%;
    outline: none;
    border: none;
    font-family: inherit;
    background: ${(props) => props.theme.colors.primary};
    padding: 8px 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: ${(props) => props.theme.colors.textDark};
    font-size: 1.5rem;
    line-height: 2.4;
    font-weight: 300;

    &:focus {
      outline: ${({ theme }) => `1px solid ${theme.colors.accentDark}`};
    }
    &:disabled,
    :read-only {
      opacity: 0.5;
      outline: none;
    }
  }
`;
