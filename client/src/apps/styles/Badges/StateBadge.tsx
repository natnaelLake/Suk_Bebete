import styled from "styled-components";

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
  boxShadow
} from "styled-system";
import { BadgeProps, BadgeStyleProps } from "./type";
import { theme } from "../../utils/theme/theme";

export const StateBadge = ({ children, variant, ...rest }: BadgeProps) => {
  return (
    <StateBadgeStyle {...rest}>
      <Dot variant={variant} /> {children}
    </StateBadgeStyle>
  );
};

const Dot = styled("div")<BadgeStyleProps>`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-right: 6px;
  ${compose(
    variant({
      variants: {
        Info: {
          background: theme.colors.primary[9],
          color: theme.colors.black[9]
        },
        Warning: {
          background: theme.colors.warning,
          color: theme.colors.black[9]
        },
        Destructive: {
          background: theme.colors.alert[9],
          color: theme.colors.black[9]
        },
        Success: {
          background: theme.colors.success[9],
          color: theme.colors.black[9]
        },
        Default: {
          background: theme.colors.border.default,
          border: `1px solid ${theme.colors.border.default}`,
          color: theme.colors.black[9]
        }
      },
      prop: "variant"
    })
  )}
`;

const StateBadgeStyle = styled("div")<BadgeStyleProps>`
  display: flex;
  align-items: center;
  justify-content: start;
  ${compose(
    background,
    color,
    top,
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
    boxShadow
  )}
`;
