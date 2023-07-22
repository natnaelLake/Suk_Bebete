import styled from 'styled-components';

import {
  background,
  color,
  compose,
  variant,
  width,
  height,
  top,
} from 'styled-system';
import { BadgeStyleProps } from './type';

export const Badge = () => {
  return (
    <BadgeStyle
      height="19px"
      singleDigit={false}
      top="21px"
      variant="primary"
      width="74px"
    >
      {/* <Text>Processing</Text> */}
    </BadgeStyle>
  );
};
const BadgeStyle = styled('div')<BadgeStyleProps>`
  background-color: #ffcb3d;
  display: flex;
  left: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  padding: 2px, 8px, 2px, 8px;
  gap: 8px;
  ${width}
  ${() =>
    compose(
      background,
      color,
      height,
      top,
      variant({
        variants: {
          secondary: {},
          tertiary: {},
        },
      })
    )}
`;

