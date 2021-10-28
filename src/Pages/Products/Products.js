import React, { useEffect, useState } from "react";
import Item from "../../Components/Item/Item";
import { ProductWrapper } from "./Products.style";
const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
console.log(allProducts);
  return (
    <ProductWrapper>
      {allProducts.map((product, index) => (
        
        <Item
          key={index}
          // product={product}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </ProductWrapper>
  );
};

export default Products;
