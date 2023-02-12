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
      strokeWidth={2}
      d='M2,19 L22,19 M2,5 L22,5 M2,12 L22,12'
    />
  </svg>
);
export default SVGComponent;
