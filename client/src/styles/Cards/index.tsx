import styled from "styled-components";
import { theme } from "styles/Theme/theme";
import { CardProps, CardStyleProps } from "./types";
import imageOne from "../../assets/images/pexels-laura-garcia-4246754.jpg";

import {
  background,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  boxShadow,
  color,
  compose,
  fontSize,
  fontWeight,
  layout,
  opacity,
  position,
  shadow,
  space,
  textAlign,
  width,
  height,
} from "styled-system";
import { Button } from "styles/Buttons/Button";
import { Flex } from "styles/Flex";

export const Card = ({ children, ...rest }: CardProps) => {
  return (
    <StyledCard {...rest}>
      <Image
        height={"200px"}
        src={imageOne}
        style={{ borderRadius: "15px" }}
        width={"inherit"}
      ></Image>
      <Description mt={10}>{children}</Description>
      <Flex justifyContent={'center'}>
        <Button mt={5} variant="Primary">
          Book
        </Button>
      </Flex>
    </StyledCard>
  );
};

const StyledCard = styled("div")<CardStyleProps>`
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  width: ${theme.sizes[47]};
  height: fit-content;
  padding: 10px;
  border-radius: 15px;
  ${compose(
    background,
    borderColor,
    borderRadius,
    borderStyle,
    borderWidth,
    boxShadow,
    color,
    fontSize,
    fontWeight,
    layout,
    opacity,
    position,
    shadow,
    space,
    textAlign
  )}
`;

const Image = styled("img")<CardStyleProps>`
  margin-bottom: 20px;
  ${width}
  ${height}
`;
const Description = styled("div")<CardStyleProps>`
  font-family: Roboto;
  font-weight: 400;
`;
