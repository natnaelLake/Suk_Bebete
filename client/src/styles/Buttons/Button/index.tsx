import styled from 'styled-components';
import { ButtonStyleProps, ButtonProps } from './type';
import { theme } from '../../../styles/Theme/theme';
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
  variant,
} from 'styled-system';

export const Button = ({ children, variant, ...rest }: ButtonProps) => {
  return (<StyledButton variant={variant} {...rest}>{children}</StyledButton>);
};

const StyledButton = styled('button') <ButtonStyleProps>`
  display:flex;
  background: ${theme.colors.pink[9]};
  color: ${theme.colors.white[9]};
  font-size: ${theme.sizes[7]};
  border-radius: ${theme.sizes[2]};
  &:hover {
    background: ${theme.colors.cyan[9]};
    cursor: pointer;
  }
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
  textAlign,
  variant({
    variants: {
      Primary: {
        background: theme.colors.succes[7],
        color: theme.colors.white[9],
      },
      Secondary: {
        background: theme.colors.alert[9],
        color: theme.colors.white[9],
      },
      Tertiary: {
        background: theme.colors.cyan[9],
        color: theme.colors.white[9],
      },
    },
    prop:'variant'
  })
)}
`;
