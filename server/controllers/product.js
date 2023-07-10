import Products from "../models/products/index.js";
// import Products from "../models/Products/index.js";
import {join} from 'path'

export const createProductController = async (req, res) => {
  const {productName,productCost,productDesc} = req.body
  const images = []
  let productImage = req.files.image;
  const path = join(process.cwd(),'./public/uploads/')
  for(let i = 0;i<productImage.length;i++){
    productImage[i].mv(path + productImage[i].name,function (err) {
      if (err) {
       return res.status(500).send(err)
      }
  })
}
for(let i = 0;i<productImage.length;i++){
   images.push(productImage[i].name)
}
// const images = req.files.image.map((img)=>{
//   img.name
// })
  productImage = images
  try {
      const productInfo = {
        productName,productCost,productDesc,productImage
      };
      console.log('our product is: ',productInfo)
      const newProduct = await Products.createProduct(productInfo);
    console.log("welcome to post", newProduct);
    res.json(newProduct);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

export const getProductController = async (req, res) => {
  try {
      const newProduct = await Products.getProduct();
    console.log("welcome to get", newProduct);
    res.json(newProduct);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
