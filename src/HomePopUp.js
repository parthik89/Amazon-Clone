import { Cancel } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePopUp.css";
import { useStateValue } from "./StateProvider";

function HomePopUp() {
  const [{ basket }, dispatch] = useStateValue();
  const [tempBasket, setTempBasket] = useState([]);

  useEffect(() => {
    setTempBasket([...basket]);
  }, [basket]);

  var Final = [];

  const ABC = (id) => {
    const index = tempBasket.findIndex((basketItem) => basketItem.id === id);
    let newBasket = [...tempBasket];
    console.log(index);

    if (index >= 0) {
      newBasket.splice(index, 1);
    } else {
      console.warn(`Cant remove product (id: ${id} ) as its not in basket`);
    }
    console.log(newBasket);
    // return { ...state, basket: newBasket };

    // let number = tempBasket.filter((item) => item.);
    //    console.log("🍌", number);
    console.log("🍌🍌", tempBasket);
    let newBask = tempBasket.filter((item) => item.id != id);
    setTempBasket([...newBasket]);
  };
  //   console.log(arr);

  return (
    <div className="Modal">
      <div>
        {tempBasket.length > 0 &&
          tempBasket.map((singleProduct) => (
            <div className="main ">
              <div className="container">
                <div>
                  <Link to="/checkout">
                    <div className="imgcontainer">
                      <img src={singleProduct.image} className="img" />
                    </div>
                  </Link>
                </div>
                <div className="data ">
                  <div clasName="title ">
                    {`${singleProduct?.title?.slice(0, 22)} ...`}{" "}
                  </div>
                  <div>
                    <strong className="VB"> $ {singleProduct?.price} </strong>
                  </div>
                </div>
                <div
                  className="ABC cancel"
                  onClick={() => ABC(singleProduct?.id)}
                >
                  <Cancel />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HomePopUp;

// import { Cancel } from "@material-ui/icons";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./HomePopUp.css";

// function HomePopUp({ basket }) {
//   const [basket, setBasket] = useState(basket);

//   const ABC = () => {
//     document.querySelector(".ABC").classList.add("hide");
//     console.log("JD");
//   };
//   return (
//     <div className="main ">
//       {/* <div>{basket.id} </div> */}

//       <div className="container">
//         <div>
//           <Link to="/checkout">
//             <div className="imgcontainer">
//               <img src={basket.image} className="img" />
//             </div>
//           </Link>
//         </div>
//         <div className="data ">
//           <div clasName="title ">{`${basket.title.slice(0, 18)} ...`} </div>
//           <div>
//             <strong className="VB"> $ {basket.price} </strong>
//           </div>
//         </div>
//         <div className="ABC" onClick={ABC}>
//           <Cancel />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePopUp;
