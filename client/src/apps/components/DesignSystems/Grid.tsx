import { Grid, GridItem } from "../../styles/Grid";

export const GridTemplate = () => {
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
      <Grid>
        {gridElements.map((grid) => (
          <GridItem>{grid}</GridItem>
        ))}
      </Grid>
    </>
  );
};
