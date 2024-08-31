import React from "react";
import "./clouds.css";

interface Position {
  position: "top" | "bottom";
  rotate?: boolean;
  color: "white" | "blue";
}
const Clouds = ({ position, rotate, color }: Position) => {
  return (
    <>
      <div className="relative">
        <svg
          className={`waves ${position === "bottom" ? "bottom-0" : "top-0"} ${
            rotate && "rotate-180"
          }`}
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          {color === "white" ? (
            <g className="parallax">
              <use
                href="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7)"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use href="#gentle-wave" x="48" y="7" fill="white" />
            </g>
          ) : (
            <g className="parallax">
              <use
                href="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(41, 183, 244,0.7"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(41, 183, 244,0.5)"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(41, 183, 244,0.3)"
              />
              <use href="#gentle-wave" x="48" y="7" fill="rgb(41, 183, 244)" />{" "}
              {/* zmienić na białe jak coś */}
            </g>
          )}
        </svg>
      </div>
    </>
  );
};

export default Clouds;
