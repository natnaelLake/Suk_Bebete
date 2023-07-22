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
    TopProps
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
      BorderWidthProps{
        variant:VariantProps;
        singleDigit:boolean;
      }


      export type  VariantProps = | 'primary' | 'secondary' | 'tertiary'
  