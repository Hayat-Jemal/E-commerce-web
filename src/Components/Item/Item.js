import React from "react";
import {
  Img,
  Title,
  ProductContainer,
  InfoContainer,
    AllProductContainer,
  Button,
} from "./Item.style";
import { useHistory } from "react-router";

const Item = ({id,title ,image ,price,rating}) => {
  const history = useHistory();
  return (
    <AllProductContainer>
      <ProductContainer>
        <Title>{title}</Title>
        <Img src={image} alt="" />
        <h3>{price}</h3>
      </ProductContainer>
      <InfoContainer>
        <h3>
          Rating: {rating.rate}🌟
        </h3>
        <Button onClick={() => history.push(`/product/${id}`)}>View</Button>
      </InfoContainer>
    </AllProductContainer>
  );
};

export default Item;
