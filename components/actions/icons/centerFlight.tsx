import * as React from "react"

const CenterFlightIcon = (props:any) => (
  <svg
    width={43}
    height={43}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={0.5} y={0.5} width={42} height={42} rx={21} fill="#fff" />
    <g clipPath="url(#a)">
      <path
        d="M13.058 19.671a.763.763 0 0 1 .165-.83l3.47-3.47a.763.763 0 1 1 1.079 1.078l-2.168 2.168h14.633a.763.763 0 0 1 0 1.525H13.763a.763.763 0 0 1-.705-.47Zm17.18 2.187H13.762a.763.763 0 1 0 0 1.526h14.633l-2.168 2.168a.763.763 0 0 0 1.079 1.078l3.47-3.47a.762.762 0 0 0-.54-1.302Z"
        fill="#000"
      />
    </g>
    <rect x={0.5} y={0.5} width={42} height={42} rx={21} stroke="#EFEFEF" />
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(13 12)" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default CenterFlightIcon
