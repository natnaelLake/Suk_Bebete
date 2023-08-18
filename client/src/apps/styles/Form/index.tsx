// import { cardProps } from "./type";
import { styled } from "styled-components";
import image from "../../../assets/pexels-tuấn-kiệt-jr-1391498.jpg";

import Button from "../Buttons";
import { TextInput } from "../Inputs";
export const Form = () => {
  return (
    <StyledCardsContainer >
      <CardHeader>
        <CardImageMainContainer>
          <CardImageContainer>
          </CardImageContainer>
        </CardImageMainContainer>
      </CardHeader>
      <CardBody>
        <TextInput placeholder='User Name' label="User Name" type="text"/>
        <TextInput placeholder='Phone Number' label="Phone Number" type="tel"/>
        <Button mt={4} variant="destructive">
          SignUp
        </Button>
      </CardBody>
      <CardFooter></CardFooter>
    </StyledCardsContainer>
  );
};

const CardFooter = styled("div")``;
const CardImageContainer = styled("div")`
  background-image: url("${image}");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 20px 20px 0px 0px;
  height:270px;
  margin-top:-25px;

`;
const CardImageMainContainer = styled("div")`
  position: absolute;
  left: -2.5em;
  display: grid;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;
const CardBody = styled("div")`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-right:15px;
`;
const CardHeader = styled("div")`
  position: relative;
  width: 300px;
`;
const StyledCardsContainer = styled("div")`
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  margin: 20px 10px;
  margin-left:60px;
  padding: 2.5em 0;
  max-width: 700px;
  background-color: #fff;
  border-radius: 5px;
  height: fit-content;
  box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
`;
// const Icons = styled("div")`
//   display: flex;
//   font-size: 1.5rem;
//   justify-content: space-between;
//   padding: 0.8em;
//   color: #fff;
//   left: -2.5em;
// `;
