import { CSSProp } from 'styled-components';
import {
  SpaceProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  BoxShadowProps,
  ShadowProps,
} from 'styled-system';

export interface BoxProps
  extends SpaceProps,
    ColorProps,
    FlexProps,
    FlexboxProps,
    LayoutProps,
    GridProp,
    BackgroundProps,
    BorderProps,
    PositionProps,
    BoxShadowProps,
    ShadowProps {
  onClick?: () => void;
  hover?: CSSProp;
}

export interface FlexProps extends FlexboxProps {}
export interface GridProp extends GridProps {}
type GlassBackgroundVariants = 'light' | 'dark';

export interface GlassBackgroundProps extends BoxProps, FlexProps {
  variant?: GlassBackgroundVariants;

  blurIndex?: number;
}

export interface GradientBackgroundProps extends BoxProps, FlexProps {}
