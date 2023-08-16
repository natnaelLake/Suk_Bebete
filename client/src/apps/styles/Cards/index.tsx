import { cardProps } from "./type";
import { styled } from "styled-components";
import image from "../../../assets/ቅድስት ድንግል ማርያ .jpeg";
import image1 from "../../../assets/pexels-tuấn-kiệt-jr-1391498.jpg";
import image2 from "../../../assets/dingl maryam.jpeg";
import image3 from "../../../assets/pexels-taha-samet-arslan-15530621.jpg";
import image4 from "../../../assets/saint mikael.jpeg";

import Button from "../Buttons";
import { Flex } from "../Flex";
export const Card = ({ children }: cardProps) => {
  return (
    <StyledCardsContainer>
      <CardHeader>
        <CardImageMainContainer>
          <CardImageContainer>
            <Icons>{children}</Icons>
          </CardImageContainer>
          <ImageAlbums>
            <Flex>
              <AlbumList>
                <Image src={image2} />
              </AlbumList>
              <AlbumList>
                <Image src={image3} />
              </AlbumList>
              <AlbumList>
                <Image src={image4} />
              </AlbumList>
              <AlbumList>
                <Image src={image1} />
              </AlbumList>
            </Flex>
          </ImageAlbums>
        </CardImageMainContainer>
      </CardHeader>
      <CardBody>
        <CardTitle>
          <H1>Product Name</H1>
        </CardTitle>
        <CardPrice>$ 7.90</CardPrice>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          provident, sit corrupti, sunt dolorum nulla, velit rerum
          necessitatibus vero omnis inventore. Vero ipsa praesentium temporibus
          nam illum totam. Eaque, beatae?
        </CardDescription>
        <Button mt={4} variant="destructive">
          Add To Cart
        </Button>
      </CardBody>
      <CardFooter></CardFooter>
    </StyledCardsContainer>
  );
};

const CardFooter = styled("div")``;
const Image = styled("img")`
  max-width: 100%;
  border-radius: 50%;
  filter: drop-shadow(1px 1px 3px #000);
`;
const CardImageContainer = styled("div")`
  background-image: url("${image}");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 20px 20px 0px 0px;
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
const ImageAlbums = styled("div")`
  padding: 0.7em 1em;
  border-radius: 0 0 6px 6px;
  background-color: #fff;
`;
const AlbumList = styled("li")`
  margin: 0.4em;
  float: left;
  width: 35px;
  height: 55px;
  padding: 7px;
  border: 1px solid #000;
  border-radius: 3px;
  list-style: none;
`;
const H1 = styled("h1")``;
const CardBody = styled("div")``;
const CardDescription = styled("div")`
  font-size: 16px;
  color: #333;
  margin: 10px 0px;
  line-height: 1.4;
`;
const CardTitle = styled("div")`
  font-size: 1.5rem;
  font-weight: 900;
  color: black;
  margin-bottom: 0.8rem;
`;
const CardPrice = styled("div")`
  font-size: 1.9rem;
  margin: 1.5rem 0;
  color: red;
`;
const CardHeader = styled("div")`
  position: relative;
  width: 300px;
`;
const StyledCardsContainer = styled("div")`
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  margin: 20px 10px;
  padding: 2.5em 0;
  max-width: 500px;
  background-color: #fff;
  border-radius: 5px;
  height: fit-content;
  box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
`;
const Icons = styled("div")`
  display: flex;
  font-size: 1.5rem;
  justify-content: space-between;
  padding: 0.8em;
  color: #fff;
  left: -2.5em;
`;
