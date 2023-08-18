import React from "react";
import { styled } from "styled-components";
import { theme } from "../../utils/theme/theme";
import { inputTypes } from "./type";

export const TextInput = ({
  label,
  type,
  showError,
  errorMessage
}: inputTypes) => {
  return (
    <>
      <Label>{label}</Label>
      <StyledInput type={type} />
      {showError && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
    </>
  );
};

const Label = styled("label")`
  align-text: left;
`;
const InputErrorMessage = styled("p")`
  align-text: center;
`;
const StyledInput = styled("input")`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 1rem 2.2rem 1rem 1rem;
  border: 1px solid #9bdc28;
  &:focus {
    outline: none;
    box-shadow: 0 0 4px #9bdc28;
    caret-color: #e2567d;
  }
  color: ${theme.colors.black[9]};
`;
