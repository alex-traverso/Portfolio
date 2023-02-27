import * as React from "react";
const SVGComponent = (props) => (
  <svg
    fill='none'
    stroke={props}
    width={props}
    height={props}
    viewBox='0 0 24 24'
    id='check'
    data-name='Flat Line'
    xmlns='http://www.w3.org/2000/svg'
    className='icon flat-line'
    {...props}
  >
    <polyline
      id='primary'
      points='5 12 10 17 19 8'
      style={{
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);
export default SVGComponent;
