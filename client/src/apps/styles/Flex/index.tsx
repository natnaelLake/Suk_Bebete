import { ReactType } from "../Grid/type";
import { styled } from "styled-components";

export const Flex = ({ children }: ReactType) => {
  return (
    <>
      <StyledFlex>{children}</StyledFlex>
    </>
  );
};

const StyledFlex = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
