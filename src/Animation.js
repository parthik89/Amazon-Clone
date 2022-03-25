import React from "react";
import FlipMove from "react-flip-move";
import Slider from "react-slick";

import { bounceOut } from "react-animations";
import Radium, { StyleRoot } from "radium";

function Animation() {
  const styles = {
    bounceOut: {
      animation: "x 3s",
      animationName: Radium.keyframes(bounceOut, "bounceOut"),
    },
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="NO IMAGE"
          />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>

      <div className="your-own-element">
        <FlipMove typeName={null}>
          <div key="a">Hello</div>
          <div key="b">World</div>
        </FlipMove>
      </div>

      <div>
        <StyleRoot>
          <div className="test" style={styles.bounceOut}>
            <h1> VERY HARD TIME FIGURE IT OUT</h1>
          </div>
        </StyleRoot>

        <StyleRoot>
          <div className="test" style={styles.bounceOut}>
            <h1> VERY HARD TIME FIGURE IT OUT</h1>
          </div>
        </StyleRoot>
        <StyleRoot>
          <div className="test" style={styles.bounceOut}>
            <h1> VERY HARD TIME FIGURE IT OUT</h1>
          </div>
        </StyleRoot>
        <StyleRoot>
          <div className="test" style={styles.bounceOut}>
            <h1> VERY HARD TIME FIGURE IT OUT</h1>
          </div>
        </StyleRoot>
      </div>
    </div>
  );
}

export default Animation;

// import { useRef, useState } from "react";
// import { useSpring, animated, config } from "@react-spring/web";
// import { useControls } from "leva";

// import "./Animation.css";

// import React from "react";

// function Animation() {
//   const calc = (x, y, rect) => [
//     -(y - rect.top - rect.height / 2) / 5,
//     (x - rect.left - rect.width / 2) / 5,
//     1.4,
//   ];
//   const trans = (x, y, s) =>
//     `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
//   const configList = Object.keys(config);
//   const ref = useRef(null);
//   const [xys, set] = useState([0, 0, 1]);
//   const { preset } = useControls({
//     preset: { value: "default", options: configList },
//   });
//   const props = useSpring({ xys, config: config[preset] });

//   return (
//     <>
//       <h1> COOL cccANIMATION DUDE</h1>
//       <div>
//         <div className="ccard-main" ref={ref}>
//           <animated.div
//             className="ccard"
//             style={{ transform: props.xys.to(trans) }}
//             onMouseLeave={() => set([0, 0, 1])}
//             onMouseMove={(e) => {
//               const rect = ref.current.getBoundingClientRect();
//               set(calc(e.clientX, e.clientY, rect));
//             }}
//           />
//         </div>
//       </div>
//       <h1>dfnjvndfjvnjd</h1>
//       <h1>fjbfjkdfbkj</h1>
//     </>
//   );
// }

// export default Animation;

// import React, { useState } from "react";
// import { useSpring, animated, config, POINTS } from "react-spring";

// function Animation() {
//   // const [flip, set] = useState(false);
//   // const props = useSpring({
//   //   to: { opacity: 1 },
//   //   from: { opacity: 0 },
//   //   reset: true,
//   //   reverse: flip,
//   //   delay: 200,
//   //   config: config.molasses,
//   //   onRest: () => set(!flip),
//   // });

//   function SVG() {
//     const [flip, set] = useState(false);
//     const { x } = useSpring({
//       reset: true,
//       reverse: flip,
//       from: { x: 0 },
//       x: 1,
//       delay: 200,
//       config: config.molasses,
//       onRest: () => set(!flip),
//     });

//     return (
//       <animated.svg
//         style={{ margin: 20, width: 80, height: 80 }}
//         viewBox="0 0 45 44"
//         strokeWidth="2"
//         fill="white"
//         stroke="rgb(45, 55, 71)"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeDasharray={156}
//         strokeDashoffset={x.to((x) => (1 - x) * 156)}
//       >
//         <polygon points={POINTS} />
//       </animated.svg>
//     );
//   }
//   function Number() {
//     const [flip, set] = useState(false);
//     const { number } = useSpring({
//       reset: true,
//       reverse: flip,
//       from: { number: 0 },
//       number: 1,
//       delay: 200,
//       config: config.molasses,
//       onRest: () => set(!flip),
//     });

//     return <animated.div>{number.to((n) => n.toFixed(2))}</animated.div>;
//   }

//   return (
//     <>
//       {/* <animated.div style={props}>I will fade in</animated.div> */}
//       <h1> Hello</h1>
//       {Number()}
//     </>
//   );
// }

// export default Animation;

// import React, { forwardRef } from "react";
// import FlipMove from "react-flip-move";

// function Animation() {
//   let ab = [1, 2, 3, 4, 5];
//   return (
//     <div>
//       <h1> JIIII </h1>
//       // JSX
//       <FlipMove style={{ color: "red" }}>
//         <div key="a">Hello</div>
//         <div key="b">World</div>
//       </FlipMove>
//       // HTML
//     </div>
//   );
// }

// export default Animation;

// import "../helpers/array_helpers";

// import React, { Component, PropTypes } from "react";
// import moment from "moment";
// import { shuffle } from "lodash";
// import classNames from "classnames";
// import Dropdown from "react-dropdown";
// import ReactSlider from "react-slider";

// import FlipMove from "react-flip-move";
// import Toggle from "./Toggle.jsx";
// import cats from "../data/cats.js";

// class Laboratory extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       duration: 500,
//       delay: 0,
//       easingPreset: { value: "0,0,1.0,1.0", label: "linear" },
//       easingValues: ["0", "0", "1.0", "1.0"],
//       staggerDurationBy: 0,
//       staggerDelayBy: 0,
//       cats,
//     };

//     this.handleSlide = this.handleSlide.bind(this);
//     this.shuffleCats = this.shuffleCats.bind(this);
//     this.selectEasing = this.selectEasing.bind(this);
//     this.changeCustomEasing = this.changeCustomEasing.bind(this);
//     this.selectPreset = this.selectPreset.bind(this);
//   }

//   handleSlide(field, val) {
//     this.setState({
//       preset: null,
//       [field]: val,
//     });
//   }

//   shuffleCats() {
//     this.setState({
//       cats: shuffle(this.state.cats),
//     });
//   }

//   selectEasing(selected) {
//     this.setState({
//       preset: null,
//       easingPreset: selected,
//       easingValues: selected.value.split(","),
//     });
//   }

//   changeCustomEasing(n, val) {
//     let easingValues = this.state.easingValues.slice();
//     easingValues.splice(n, 1, val);
//     this.setState({
//       preset: null,
//       easingValues,
//     });
//   }

//   selectPreset(num) {
//     switch (num) {
//       case 0:
//         return this.setState({
//           duration: 700,
//           delay: 0,
//           easingPreset: { value: "0.25,0.1,0.25,1.0", label: "ease" },
//           easingValues: ["0.25", "0.1", "0.25", "1.0"],
//           staggerDelayBy: 20,
//           staggerDurationBy: 15,
//           preset: 0,
//         });
//       case 1:
//         return this.setState({
//           duration: 400,
//           delay: 0,
//           easingPreset: { value: "0.42, 0.0, 0.58, 1.0", label: "ease-in-out" },
//           easingValues: ["0.42", "0.0", "0.58", "1.0"],
//           staggerDelayBy: 300,
//           staggerDurationBy: 0,
//           preset: 1,
//         });
//       case 2:
//         return this.setState({
//           duration: 500,
//           delay: 0,
//           easingPreset: {
//             value: "0.39,0,0.45,1.4",
//             label: "cubic-bezier",
//             custom: true,
//           },
//           easingValues: ["0.39", "0", "0.45", "1.4"],
//           staggerDelayBy: 0,
//           staggerDurationBy: 22,
//           preset: 2,
//         });
//       case 3:
//         return this.setState({
//           duration: 600,
//           delay: 0,
//           easingPreset: {
//             value: "0.5,1,0.5,0",
//             label: "cubic-bezier",
//             custom: true,
//           },
//           easingValues: ["0.5", "1", "0.5", "0"],
//           staggerDelayBy: 0,
//           staggerDurationBy: 0,
//           preset: 3,
//         });
//       case 4:
//         return this.setState({
//           duration: 900,
//           delay: 0,
//           easingPreset: {
//             value: "0.13,1.15,0.8,1.5",
//             label: "cubic-bezier",
//             custom: true,
//           },
//           easingValues: ["0.13", "1.15", "0.8", "1.5"],
//           staggerDelayBy: 0,
//           staggerDurationBy: 260,
//           preset: 4,
//         });
//     }
//   }

//   render() {
//     return (
//       <div id="laboratory">
//         <CatList {...this.state} />
//         <Settings
//           {...this.state}
//           handleSlide={this.handleSlide}
//           shuffleCats={this.shuffleCats}
//           selectEasing={this.selectEasing}
//           changeCustomEasing={this.changeCustomEasing}
//           selectPreset={this.selectPreset}
//         />
//       </div>
//     );
//   }
// }

// class Settings extends Component {
//   renderDuration() {
//     return (
//       <div className="col col-3 input-area">
//         <h6 className="slider-value">{this.props.duration}ms</h6>
//         <h5 className="field-name">Duration</h5>
//         <div className="input">
//           <ReactSlider
//             value={this.props.duration}
//             min={0}
//             max={2000}
//             withBars={true}
//             onChange={(val) => this.props.handleSlide("duration", val)}
//           />
//         </div>
//       </div>
//     );
//   }

//   renderDelay() {
//     return (
//       <div className="col col-2 input-area">
//         <h6 className="slider-value">{this.props.delay}ms</h6>
//         <h5 className="field-name">Delay</h5>
//         <div className="input">
//           <ReactSlider
//             value={this.props.delay}
//             min={0}
//             max={1000}
//             withBars={true}
//             onChange={(val) => this.props.handleSlide("delay", val)}
//           />
//         </div>
//       </div>
//     );
//   }

//   renderEasing() {
//     return (
//       <div className="col col-2 input-area">
//         <h5 className="field-name">Easing</h5>
//         <div className="input">
//           <Dropdown
//             name="easing"
//             options={[
//               { value: "0,0,1.0,1.0", label: "linear" },
//               { value: "0.25,0.1,0.25,1.0", label: "ease" },
//               { value: "0.42,0.0,1.0,1.0", label: "ease-in" },
//               { value: "0.0,0.0,0.58,1.0", label: "ease-out" },
//               { value: "0.42,0.0,0.58,1.0", label: "ease-in-out" },
//               { value: "0.39,0,0.45,1.4", label: "cubic-bezier", custom: true },
//             ]}
//             value={this.props.easingPreset}
//             onChange={this.props.selectEasing}
//           />
//           <div className="dropdown-spacer" style={{ height: 40 }} />
//         </div>
//       </div>
//     );
//   }

//   renderCubicBezier() {
//     if (!this.props.easingPreset.custom) return;

//     return (
//       <div className="col col-4 input-area">
//         <h5 className="field-name">Cubic Bezier</h5>
//         <div className="input">
//           <input
//             type="number"
//             min="0"
//             max="1"
//             value={this.props.easingValues[0]}
//             onChange={(ev) => this.props.changeCustomEasing(0, ev.target.value)}
//           />
//           <input
//             type="number"
//             min="-2"
//             max="2"
//             value={this.props.easingValues[1]}
//             onChange={(ev) => this.props.changeCustomEasing(1, ev.target.value)}
//           />
//           <input
//             type="number"
//             min="0"
//             max="1"
//             value={this.props.easingValues[2]}
//             onChange={(ev) => this.props.changeCustomEasing(2, ev.target.value)}
//           />
//           <input
//             type="number"
//             min="-2"
//             max="2"
//             value={this.props.easingValues[3]}
//             onChange={(ev) => this.props.changeCustomEasing(3, ev.target.value)}
//           />
//         </div>
//       </div>
//     );
//   }

//   renderStaggeredDuration() {
//     return (
//       <div className="col input-area">
//         <h6 className="slider-value">{this.props.staggerDurationBy}ms</h6>
//         <h5 className="field-name">Stagger Duration By</h5>
//         <div className="input">
//           <ReactSlider
//             value={this.props.staggerDurationBy}
//             min={0}
//             max={500}
//             withBars={true}
//             onChange={(val) => this.props.handleSlide("staggerDurationBy", val)}
//           />
//         </div>
//       </div>
//     );
//   }
//   renderStaggeredDelay() {
//     return (
//       <div className="col input-area">
//         <h6 className="slider-value">{this.props.staggerDelayBy}ms</h6>
//         <h5 className="field-name">Stagger Delay By</h5>
//         <div className="input">
//           <ReactSlider
//             value={this.props.staggerDelayBy}
//             min={0}
//             max={500}
//             withBars={true}
//             onChange={(val) => this.props.handleSlide("staggerDelayBy", val)}
//           />
//         </div>
//       </div>
//     );
//   }

//   renderPresets() {
//     return (
//       <div className="input-area presets">
//         <div className="field-name">Presets</div>
//         <Toggle
//           clickHandler={() => this.props.selectPreset(0)}
//           text="Organic"
//           active={this.props.preset === 0}
//         />
//         <Toggle
//           clickHandler={() => this.props.selectPreset(1)}
//           text="Turn-based"
//           active={this.props.preset === 1}
//         />
//         <Toggle
//           clickHandler={() => this.props.selectPreset(2)}
//           text="Bouncy"
//           active={this.props.preset === 2}
//         />
//         <Toggle
//           clickHandler={() => this.props.selectPreset(3)}
//           text="2-Step"
//           active={this.props.preset === 3}
//         />
//         <Toggle
//           clickHandler={() => this.props.selectPreset(4)}
//           text="Catnip"
//           active={this.props.preset === 4}
//         />
//       </div>
//     );
//   }

//   render() {
//     return (
//       <div className="settings card">
//         <h2>Settings</h2>
//         <div className="row">
//           {this.renderDuration()}
//           {this.renderDelay()}
//         </div>

//         <div className="row">
//           {this.renderEasing()}
//           {this.renderCubicBezier()}
//         </div>

//         <div className="row">
//           {this.renderStaggeredDuration()}
//           {this.renderStaggeredDelay()}
//         </div>

//         {this.renderPresets()}

//         <div className="shuffle-spacer" />
//         <div className="shuffle-container">
//           <Toggle
//             clickHandler={this.props.shuffleCats}
//             text="Shuffle"
//             icon="random"
//             active={true}
//             large={true}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// class CatList extends Component {
//   constructor(props) {
//     super(props);
//   }

//   renderCats() {
//     return this.props.cats.map((cat) => <Cat key={cat.id} {...cat} />);
//   }
//   formatEasing() {
//     return `cubic-bezier(${this.props.easingValues.join(",")})`;
//   }
//   render() {
//     return (
//       <div className="cat-list">
//         <FlipMove
//           duration={this.props.duration}
//           delay={this.props.delay}
//           easing={this.formatEasing()}
//           staggerDurationBy={this.props.staggerDurationBy}
//           staggerDelayBy={this.props.staggerDelayBy}
//           typeName="ul"
//         >
//           {this.renderCats()}
//         </FlipMove>
//       </div>
//     );
//   }
// }

// class Cat extends Component {
//   render() {
//     const { name, origin, breed, catchphrase, img, url } = this.props;

//     return (
//       <li className="cat card">
//         <img src={img} className="cat-img" />
//         <h3 className="cat-name">{name}</h3>
//         <h5 className="cat-catchphrase">{catchphrase}</h5>
//         <h6 className="cat-origin">{origin}</h6>
//         <div className="clearfix" />
//       </li>
//     );
//   }
// }

// export default Laboratory;
