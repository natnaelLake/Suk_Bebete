import { ButtonHTMLAttributes } from 'react';
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
  WidthProps,
  HeightProps,
  TopProps,
} from 'styled-system';

export interface BadgeStyleProps
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
    WidthProps,
    HeightProps,
    TopProps,
    BorderWidthProps {
  variant?: VariantProps;
}

export type VariantProps =
  | 'Default'
  | 'Warning'
  | 'Success'
  | 'Info'
  | 'Transparent'
  | 'Destructive';

export type BadgeProps = Omit<BadgeStyleProps, 'color'> &
  ButtonHTMLAttributes<HTMLDivElement>;

