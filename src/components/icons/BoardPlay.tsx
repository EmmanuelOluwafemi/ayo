import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

interface Props {
    size?: number;
}

function BoardPlayIcon({ size } : Props) {
  return (
    <Svg
      width={size || 8}
      height={size || 8}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_655_2232)" fill="#FDB316">
        <Path d="M2.333 0h-1A1.333 1.333 0 000 1.333v1a1.333 1.333 0 001.333 1.334h1a1.333 1.333 0 001.334-1.334v-1A1.333 1.333 0 002.333 0zM3 2.333A.667.667 0 012.333 3h-1a.667.667 0 01-.666-.667v-1a.667.667 0 01.666-.666h1A.667.667 0 013 1.333v1zM6.667 0h-1a1.333 1.333 0 00-1.334 1.333v1a1.333 1.333 0 001.334 1.334h1A1.333 1.333 0 008 2.333v-1A1.333 1.333 0 006.667 0zm.666 2.333A.667.667 0 016.667 3h-1A.667.667 0 015 2.333v-1a.667.667 0 01.667-.666h1a.667.667 0 01.666.666v1zM2.333 4.333h-1A1.333 1.333 0 000 5.667v1A1.333 1.333 0 001.333 8h1a1.333 1.333 0 001.334-1.333v-1a1.333 1.333 0 00-1.334-1.334zM3 6.667a.667.667 0 01-.667.666h-1a.667.667 0 01-.666-.666v-1A.667.667 0 011.333 5h1A.667.667 0 013 5.667v1zM6.667 4.333h-1a1.333 1.333 0 00-1.334 1.334v1A1.333 1.333 0 005.667 8h1A1.333 1.333 0 008 6.667v-1a1.333 1.333 0 00-1.333-1.334zm.666 2.334a.667.667 0 01-.666.666h-1A.667.667 0 015 6.667v-1A.667.667 0 015.667 5h1a.667.667 0 01.666.667v1z" />
      </G>
      <Defs>
        <ClipPath id="clip0_655_2232">
          <Path fill="#fff" d="M0 0H8V8H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default BoardPlayIcon;
