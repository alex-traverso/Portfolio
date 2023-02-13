import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={props}
    height={props}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill='none'
      stroke={props}
      strokeWidth={props}
      d='M7,7 L17,17 M7,17 L17,7'
    />
  </svg>
);
export default SVGComponent;
