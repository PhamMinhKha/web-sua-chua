import React from "react";
import { Parallax, Background } from "react-parallax";
export default function parallax() {
  return (
    <div style={{ height: 500 }}>
      <Parallax
        bgImage={require("./../../../public/img/bg/bg.png")}
        strength={400}
        renderLayer={percentage => (
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        )}
      >
        <p>... Content</p>
      </Parallax>
    </div>
  );
}
