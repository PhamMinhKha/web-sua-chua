import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Typography, Grid } from "@material-ui/core";
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 120}px,${y / 120}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 110}px,${y / 110}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;
export default function parallax() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));
  const [scale, setscale] = useState(0);
  useEffect(() => {
    const setFromEvent = e => setscale(window.innerWidth / 1170);
    setFromEvent();
    window.addEventListener("resize", setFromEvent);

    return () => {
      window.removeEventListener("resize", setFromEvent);
    };
  }, []);
  console.log(scale);
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      style={{
        backgroundImage: 'url("/img/bg/bg.png")',
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        width: scale * 1145,
        height: scale * 962,
        backgroundSize: "contain"
      }}
    >
      <animated.div
        className="card1"
        style={{ transform: props.xy.interpolate(trans1) , position:'absolute', left:'1%'}}
      >
        <img
          src="/img/media/iphone-mockup.png"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "left",
            width: scale * 731,
            height: scale * 630,
            backgroundSize: "contain"
          }}
        />
      </animated.div>
      <div style={{top:'20%', position:'absolute', width:'20rem', right:'15%'}}>
      <Typography variant="h2" color="initial" style={{fontWeight:600}}>
        SuaChua.Pro
      </Typography>
      <Typography variant="h5" color="secondary">
        Chung tôi cung cấp ứng dụng giúp bạn quản lý thiết bị đã sửa và quản lý
        bảo hành tốt hơn
      </Typography>
      </div>
    </Grid>
    // <div
    //   onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    //   style={{
    //     backgroundImage: 'url("/img/bg/bg.png")',
    //     position: "relative",
    //     backgroundRepeat: "no-repeat",
    //     backgroundPositionX: "right",
    //     width: scale * 1145,
    //     height: scale * 962,
    //     backgroundSize: "contain"
    //   }}
    // >
    //   <animated.div
    //     className="card1"
    //     style={{ transform: props.xy.interpolate(trans1) }}
    //   >
    //     <img
    //       src="/img/media/iphone-mockup.png"
    //       style={{
    //         backgroundRepeat: "no-repeat",
    //         backgroundPositionX: "right",
    //         width: scale * 731,
    //         height: scale * 630,
    //         backgroundSize: "contain"
    //       }}
    //     />
    //   </animated.div>
    //   <animated.div
    //     className="card2"
    //     style={{ transform: props.xy.interpolate(trans2), position:'absolute', right:'10%', top:'50%' }}
    //   >
    //     <Typography
    //       variant="h4"
    //       color="secondary"
    //     >
    //       SuaChua.Pro
    //     </Typography>
    //   </animated.div>
    // </div>
  );
}
