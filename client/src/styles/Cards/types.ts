import { ClipboardEvent, HTMLAttributes } from "react";
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
} from "styled-system";

export interface CardStyleProps
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
    BorderWidthProps {}

export type CardProps = HTMLAttributes<HTMLDivElement> & {
    onCopy?: (event: ClipboardEvent<HTMLDivElement>) => void;
    // additional props as needed
  };
