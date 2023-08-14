import { ButtonHTMLAttributes } from 'react';
import { CSSProp } from 'styled-components';
import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  BoxShadowProps,
  BorderRadiusProps,
  BorderStyleProps,
  BorderWidthProps,
  FontSizeProps,
  FontWeightProps,
  OpacityProps,
  TypographyProps,
} from 'styled-system';

export interface ButtonStyleProps
  extends SpaceProps,
    LayoutProps,
    BorderProps,
    BorderRadiusProps,
    BorderStyleProps,
    SpaceProps,
    PositionProps,
    OpacityProps,
    BackgroundProps,
    FontSizeProps,
    FontWeightProps,
    ShadowProps,
    BoxShadowProps,
    ColorProps,
    TypographyProps,
    BorderWidthProps {
  variant?: ButtonVariants;
  hover?: CSSProp;
}
export type ButtonVariants =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'text'
  | 'destructive';

export type ButtonProps = Omit<ButtonStyleProps, 'color'> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean;
  };
