import React from "react";
import { styled } from "styled-components";
import { ReactType } from "./type";

export const Grid = ({ children }: ReactType) => {
  return (
    <StyledGrid>
        {children}
    </StyledGrid>
  );
};

const StyledGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 10px;
`;
export const GridItem = styled("div")`
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
`;
