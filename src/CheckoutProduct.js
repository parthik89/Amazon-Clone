import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title"> {title} </p>
        <p className="checkoutProduct__price">
          <small> $</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p> ⭐</p>;
            })}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove From Basket </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;

// import React from "react";
// function CheckoutProduct({ productdetails }) {
//   console.log("dddd");
//   console.log(productdetails);
//   console.log(productdetails[0].price);

//   return (
//     <div>
//       {productdetails.map((product) => {
//         return (
//           <div style={{ display: "flex" }}>
//             <div>
//               {" "}
//               <img src={product.image} style={{ width: "100%" }} />{" "}
//             </div>
//             <div>
//               <div>{product.title} </div>
//               <div>{product.price} </div>
//               <div>{product.rating} </div>
//               <button> Remove the item</button>
//             </div>
//           </div>
//         );
//       })}
//       ffs
//     </div>
//   );
// }

// export default CheckoutProduct;
