import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import Fade from "react-reveal/Fade";
// SHOW DIFFERNT ANIMATION IMPORT
import { rollIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  //  console.log(basket);

  const styles = {
    rollIn: {
      animation: "x 1s",
      animationName: Radium.keyframes(rollIn, "rollIn"),
    },
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3> Hello , {user?.email} </h3>

          <h2 className="checkout__title">Your Shopping Basket</h2>

          {/* <CheckoutProduct productdetails={basket} /> */}
          {/* Other way */}
          {/* <Fade right> */}
          {basket.map((item, i) =>
            i % 2 == 0 ? (
              <Fade right>
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              </Fade>
            ) : (
              <Fade left>
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              </Fade>
            )
          )}
          {/* </Fade> */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

// import React from "react";
// import "./Checkout.css";
// import CheckoutProduct from "./CheckoutProduct";
// import { useStateValue } from "./StateProvider";
// import Subtotal from "./Subtotal";
// import { rollIn } from "react-animations";
// import Radium, { StyleRoot } from "radium";

// function Checkout() {
//   const [{ basket, user }, dispatch] = useStateValue();
//   //  console.log(basket);

//   const styles = {
//     rollIn: {
//       animation: "x 1s",
//       animationName: Radium.keyframes(rollIn, "rollIn"),
//     },
//   };

//   return (
//     <div className="checkout">
//       <div className="checkout__left">
//         <img
//           className="checkout__ad"
//           src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
//           alt=""
//         />

//         <div>
//           <h3> Hello , {user?.email} </h3>

//           <h2 className="checkout__title">Your Shopping Basket</h2>

//           {/* <CheckoutProduct productdetails={basket} /> */}
//           {/* Other way */}
//           {basket.map((item) => (
//             <StyleRoot>
//               <div className="test" style={styles.rollIn}>
//                 <CheckoutProduct
//                   id={item.id}
//                   title={item.title}
//                   image={item.image}
//                   price={item.price}
//                   rating={item.rating}
//                 />
//               </div>
//             </StyleRoot>
//           ))}
//         </div>
//       </div>

//       <div className="checkout__right">
//         <Subtotal />
//       </div>
//     </div>
//   );
// }

// export default Checkout;
