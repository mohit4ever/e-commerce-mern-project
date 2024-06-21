import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ProductDisplay from "../components/productdisplay/ProductDisplay";
import DescriptionBox from "../components/descriptionbox/DescriptionBox";
import RelatedProducts from "../components/relatedproducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return(
<>
<Breadcrumb product={product} />
<ProductDisplay product={product} />
<DescriptionBox/>
<RelatedProducts/>

</>

  )
  
};

export default Product;
