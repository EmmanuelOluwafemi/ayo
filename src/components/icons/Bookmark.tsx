import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

interface Props {
  size?: number;
}

function BookmarkIcon({ size }: Props) {
  return (
    <Svg
      width={size || 8}
      height={size || 8}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_655_2216)">
        <Path
          d="M6.712 8a.933.933 0 01-.662-.278L4 5.684 1.95 7.723a.933.933 0 01-1.032.203.933.933 0 01-.585-.875V1.667A1.667 1.667 0 012 0h4a1.667 1.667 0 011.667 1.667V7.05a.933.933 0 01-.584.875.956.956 0 01-.37.074zM2 .667a1 1 0 00-1 1V7.05a.281.281 0 00.48.2l2.287-2.273a.333.333 0 01.47 0L6.522 7.25A.28.28 0 007 7.05V1.667a1 1 0 00-1-1H2z"
          fill="#FDB316"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_655_2216">
          <Path fill="#fff" d="M0 0H8V8H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default BookmarkIcon;
