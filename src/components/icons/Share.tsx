import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

interface Props {
  size?: number;
}

function ShareIcon({ size }: Props) {
  return (
    <Svg
      width={size || 11}
      height={size || 11}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_655_2276)">
        <Path
          d="M10.542 11a.458.458 0 01-.458-.459 2.753 2.753 0 00-2.75-2.75H4.66v.727a.917.917 0 01-1.564.648L.402 6.472a1.375 1.375 0 010-1.944l2.695-2.695a.917.917 0 011.564.648v.727h2.214A4.13 4.13 0 0111 7.333v3.208a.459.459 0 01-.458.459zM3.745 2.48L1.05 5.176a.458.458 0 000 .648l2.695 2.694V7.333a.458.458 0 01.458-.458h3.13a3.66 3.66 0 012.75 1.244v-.786a3.212 3.212 0 00-3.208-3.208H4.203a.458.458 0 01-.458-.459V2.481z"
          fill="#6E6E6E"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_655_2276">
          <Path fill="#fff" d="M0 0H11V11H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ShareIcon;
