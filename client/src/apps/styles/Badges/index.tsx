import React from "react";
import { styled } from "styled-components";
import { BadgeProps, BadgeStyleProps } from "./type";
import {
  background,
  color,
  compose,
  variant,
  top,
  borderRadius,
  borderWidth,
  borderColor,
  borderStyle,
  fontSize,
  fontWeight,
  opacity,
  shadow,
  layout,
  space,
  textAlign,
  boxShadow,
} from 'styled-system';
import { theme } from "../../utils/theme/theme";


export const Badge = ({ variant, children }: BadgeProps) => {
  return (
    <>
      <StyledBadge variant={variant}>{children && children}</StyledBadge>
    </>
  );
};

const StyledBadge = styled("div")<BadgeStyleProps>`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 40px;
padding: 2px 12px;
width: fit-content;
height: fit-content;
font-weight: 500;
font-size: 14px;
${compose(
  background,
  color,
  top,
  color,
  borderRadius,
  borderWidth,
  borderColor,
  borderStyle,
  fontSize,
  fontWeight,
  opacity,
  background,
  shadow,
  layout,
  space,
  textAlign,
  boxShadow,
  variant({
    variants: {
      Info: {
        background: theme.colors.primary[9],
        color: theme.colors.white[9],
      },
      Warning: {
        background: theme.colors.warning,
        color: theme.colors.white[9],
      },
      Destructive: {
        background: theme.colors.alert[9],
        color: theme.colors.white[9],
      },
      Success: {
        background: theme.colors.success[9],
        color: theme.colors.white[9],
      },
      Transparent: {
        background: '#F6F7FC',
        color: theme.colors.primary[9],
      },
      Default: {
        background: theme.colors.border.default,
        border: `1px solid ${theme.colors.border.default}`,
        color: theme.colors.black[9],
      },
    },
    prop: 'variant',
  }),
)}
`;
