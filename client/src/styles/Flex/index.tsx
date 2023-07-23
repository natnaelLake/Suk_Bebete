import styled from 'styled-components';
import { Box } from '../Boxs/index';
import {
  boxShadow,
  flexbox,
  compose,
  flex,
  layout,
  space,
  typography,
  border,
  position,
  borderRadius,
  
} from 'styled-system';
import { FlexProps } from './type';

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${compose(
    flexbox,
    flex,
    space,
    layout,
    typography,
    border,
    position,
    borderRadius,
    boxShadow,
  )};
`;
