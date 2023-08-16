import { Card } from "../../styles/Cards";
import { BadgeTemplate } from "./Badge";
import { FlexTemplate } from "./Flex";
import { GridTemplate } from "./Grid";
import { InputTemplate } from "./Input";
import { BsShare } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Flex } from "../../styles/Flex";
import { Grid } from "../../styles/Grid";

export const DesignSystem = () => {
  return (
    <div>
      <h1>Grid Template</h1>
      <GridTemplate />
      <h1>Flex Template</h1>
      <FlexTemplate />
      <h1>Input Template</h1>
      <InputTemplate />
      <h1>Badge Template</h1>
      <BadgeTemplate />
      <h1>Card Template</h1>
      <Flex>
        <Card>
          <BsShare />
          <AiOutlineHeart />
        </Card>
        <Card>
          <BsShare />
          <AiOutlineHeart />
        </Card>
        <Card>
          <BsShare />
          <AiOutlineHeart />
        </Card>
        <Card>
          <BsShare />
          <AiOutlineHeart />
        </Card>
        <Card>
          <BsShare />
          <AiOutlineHeart />
        </Card>
        <Card>
          <BsShare />
          <AiOutlineHeart />
        </Card>
      </Flex>
    </div>
  );
};
