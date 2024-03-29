import React from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";

function App() {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  console.log(`tis' working`);
  // const props = useSpring({ opactiy: 1, from: { opactiy: 0 } });

  function Card() {
    const [props, set] = useSpring(() => ({
      xys: [0, 0, 1],
      config: { mass: 5, tension: 350, friction: 40 },
    }));
    return (
      <animated.div
        className="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />
    );
  }
  return (
    <React.Fragment>
      <div className="overlay"></div>
      <Card>
        {/* <div id='test-div'>
        HEYYYYYYYYY
      </div> */}
      </Card>
    </React.Fragment>
  );
}

export default App;
