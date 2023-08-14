import styled from "styled-components";
import { ButtonStyleProps, ButtonProps } from "./type";
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
  variant
} from "styled-system";
import { theme } from "../../utils/theme/theme";

export const Button = ({
  children,
  variant = "default",
  ...rest
}: ButtonProps) => {
  return (
    <ButtonStyle variant={variant} {...rest}>
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled("button")<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  max-width: 200px;
  min-width: max-content;
  width: 100%;
  height: 45px;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;

  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s ease-in-out;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    ${(props) => props.hover};
    /* for ripple effect */
    transition: background 0.8s;
    background-position: center;
  }

  &:focus {
    /* ring */
    outline: ${(props) =>
      !props.disabled && `solid 4px ${theme.colors.border.default}`};
  }

  ${(props) =>
    compose(
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
      position,
      boxShadow,
      variant({
        variants: {
          default: {
            background: props.disabled
              ? theme.colors.primary[0]
              : `${theme.colors.primary[9]} radial-gradient(circle, transparent 1%, ${theme.colors.primary[9]} 1%)
      center/15000%;`,
            color: `${theme.colors.white[9]}`,
            "&:hover": {
              backgroundColor: !props.disabled && theme.colors.primary[5]
            },
            "&:active": {
              backgroundColor: !props.disabled && theme.colors.primary[5],
              backgroundSize: "100%",
              transition: "background 0s"
            }
          },
          primary: {
            background: props.disabled
              ? theme.colors.primary[0]
              : `${theme.colors.primary[9]} radial-gradient(circle, transparent 1%, ${theme.colors.primary[9]} 1%)
      center/15000%;`,
            color: `${theme.colors.white[9]}`,
            "&:hover": {
              backgroundColor: !props.disabled && theme.colors.primary[5]
            },
            "&:active": {
              backgroundColor: !props.disabled && theme.colors.primary[5],
              backgroundSize: "100%",
              transition: "background 0s"
            }
          },
          secondary: {
            border: `1px solid ${theme.colors.border.default}`,
            color: props.disabled
              ? theme.colors.black[0]
              : theme.colors.black[9],
            bg: "transparent",
            "&:hover": {
              boxShadow:
                !props.disabled && `3px 3px 5px 0px ${theme.colors.black[0]}`
            }
          },
          destructive: {
            background: props.disabled
              ? theme.colors.alert[0]
              : `${theme.colors.alert[9]} radial-gradient(circle, transparent 1%, ${theme.colors.alert[9]} 1%)
      center/15000%;`,
            color: `${theme.colors.white[9]}`,
            "&:hover": {
              backgroundColor: !props.disabled && theme.colors.alert[5]
            },
            "&:active": {
              backgroundColor: !props.disabled && theme.colors.alert[5],
              backgroundSize: "100%",
              transition: "background 0s"
            }
          },
          text: {
            color: props.disabled
              ? theme.colors.black[0]
              : theme.colors.black[9],
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent"
            }
          }
        }
      })
    )};
`;

export default Button;
