import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

interface Props {
  size?: number;
  color?: string;
}

function SettingsIcon({ size, color }: Props) {
  return (
    <Svg
      width={size || 8}
      height={size || 8}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_655_2219)">
        <Path
          d="M4.5 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-2.25a.75.75 0 100 1.5.75.75 0 000-1.5zM4.5 9a1.878 1.878 0 01-1.806-1.37A1.903 1.903 0 01.887 4.48C-.388 3.165.891.88 2.7 1.35a1.88 1.88 0 013.6 0C8.138.894 9.375 3.155 8.11 4.497c1.279 1.326.005 3.54-1.804 3.134A1.878 1.878 0 014.5 9zM3 6.75a.375.375 0 01.375.375 1.125 1.125 0 002.25 0 .375.375 0 01.565-.324c1.3.629 2.4-1.193 1.13-1.972a.377.377 0 010-.658c1.243-.754.197-2.707-1.131-1.97a.375.375 0 01-.564-.326 1.125 1.125 0 10-2.25 0 .375.375 0 01-.562.326C1.5 1.466.427 3.405 1.679 4.15a.378.378 0 010 .66C.424 5.602 1.487 7.424 2.81 6.8a.375.375 0 01.19-.05z"
          fill={color || "#FDB316"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_655_2219">
          <Path fill="#fff" d="M0 0H9V9H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SettingsIcon;
