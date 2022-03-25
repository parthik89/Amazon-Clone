import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  //   console.log(basket);
  //   console.log(basket[0].price);
  //   let finalPrice = 0;
  //   if (basket.length > 0) {
  //     for (let i = 0; i < basket.length; i++) {
  //       finalPrice = finalPrice + basket[i].price;
  //     }
  //   }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items):
              <strong> {value} </strong>
              {/* alternate Way */}
              {/* Subtotal({basket.length} items): */}
              {/* <strong>{finalPrice.toFixed(2)} </strong> */}
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => navigate("/payment")}>Procced to Checkout</button>
    </div>
  );
}

export default Subtotal;
