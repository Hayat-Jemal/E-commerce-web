import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
// import CartContext from "../../Context/CartContext";
import "./Product.css"
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { useStateValue } from "../../StateProvider/StateProvider";
const Product = () => {
   const [{ cart }, dispatch] = useStateValue();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  // const [count, setCount] = useState(0);
  // const { cart, setCart } = useContext(CartContext);
  const history = useHistory();
  
  useEffect(() => {
    console.log(id);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
    
  }, [id]);
  
  const addTocart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        description: product.description,
       
      },
    });
    history.push("/");
  };


  return (
    <div className="product_container">
      <div className="product_image_container">
        <img src={product.image} alt="" className="product_image" />
      </div>
      <div className="productInfo_container">
        <h2 className="product_title">{product.title}</h2>
        <p className="product_description">{product.description}</p>
        <div className="addCart">
          <div>
          </div>
          <button className="Btn" onClick={addTocart}>
            Add to cart
          </button>
          {/* <button
            style={{ backgroundColor: "lightgreen", padding: "10px" }}
            onClick={() => {
              setCart([...cart, { ...product, count }]);
              history.push("/");
            }}
            className="cntBtn"
          >
            Add To Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
