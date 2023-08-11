import { styled } from "styled-components";
import { Flex } from "../../styles/Flex";

export const FlexTemplate = () => {
  const gridElements = [
    "Product One",
    "Product Two",
    "Product Three",
    "Product Four",
    "Product Five",
    "Product Six"
  ];
  return (
    <>
      <Flex>
        {gridElements.map((grid) => (
          <ProductCard>{grid}</ProductCard>
        ))}
      </Flex>
    </>
  );
};

const ProductCard = styled("div")`
  display: flex;
  width: 200px;
  height: 250px;
  margin: 10px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 150px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;
