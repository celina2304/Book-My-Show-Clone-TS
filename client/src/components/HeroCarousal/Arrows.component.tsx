import React from "react";

export interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
export const NextArrow: React.FC<ArrowProps> = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style, backgroundColor: "black" }}
        onClick={props.onClick}
      />
    </>
  );
};

export const PrevArrow: React.FC<ArrowProps> = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style, backgroundColor: "black" }}
        onClick={props.onClick}
      />
    </>
  );
};