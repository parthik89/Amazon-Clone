import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Animation from "./Animation";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51KaLTASFKFa6j6vPbDu3aym3n4EG7T6GiG3o63uC6JvHQvXj5OFrKiogC6M9dQHJVWXU6mN2yS6x1RlJWziU2DED00IoRipDTl"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the User just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/animation" element={<Animation />}></Route>
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          ></Route>
          <Route path="/orders" element={[<Header />, <Orders />]}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/checkout" element={[<Header />, <Checkout />]}></Route>
          <Route path="/" element={[<Header />, <Home />]}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
