import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

interface Props {
  size?: number;
  color?: string;
}

function RefreshIcon({ size, color }: Props) {
  return (
    <Svg
      width={size || 25}
      height={size || 25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G
        clipPath="url(#clip0_739_2718)"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M1.636 4.97v6h6M23.636 20.97v-6h-6" />
        <Path d="M21.126 9.97a9 9 0 00-14.85-3.36l-4.64 4.36m22 4l-4.64 4.36a9 9 0 01-14.85-3.36" />
      </G>
      <Defs>
        <ClipPath id="clip0_739_2718">
          <Path fill="#fff" transform="translate(.636 .97)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default RefreshIcon;
