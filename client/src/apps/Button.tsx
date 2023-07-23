import { Box } from "styles/Boxs";
import { Button } from "../styles/Buttons/Button/index";

import { VarinatConstants } from "./constants";
import { Flex } from "styles/Flex";

export function Buttons() {
  return (
    <>
      <h1>Dot Badges With Label </h1>
      <Box>
        <Flex flexDirection={'column'} width={'fit-content'}>
          {VarinatConstants.map((variant, index) => (
            <Button key={`badge${index}`} my={1} variant={variant}>
              {variant}
            </Button>
          ))}
        </Flex>
      </Box>
    </>
  );
}
