import { FlexTemplate } from "./Flex";
import { GridTemplate } from "./Grid";
import { InputTemplate } from "./Input";

export const DesignSystem = () => {
  return (
    <>
      <h1>Grid Template</h1>
      <GridTemplate />
      <h1>Flex Template</h1>
      <FlexTemplate />
      <h1>Input Template</h1>
      <InputTemplate />
    </>
  );
};
