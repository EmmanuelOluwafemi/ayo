import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

interface Props {
  size?: number;
}

function CopyIcon({ size }: Props) {
  return (
    <Svg
      width={size || 11}
      height={size || 11}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_655_2267)">
        <Path
          d="M9.696 1.5L8.65.418A1.384 1.384 0 007.661 0h-2.16a2.296 2.296 0 00-2.247 1.833h-.046A2.294 2.294 0 00.917 4.125v4.583A2.294 2.294 0 003.208 11h2.75A2.294 2.294 0 008.25 8.708v-.046a2.296 2.296 0 001.833-2.245v-3.96c.001-.358-.138-.701-.387-.957zm-3.738 8.583h-2.75a1.375 1.375 0 01-1.375-1.375V4.125A1.375 1.375 0 013.208 2.75v3.667A2.294 2.294 0 005.5 8.708h1.833a1.375 1.375 0 01-1.375 1.375zm1.834-2.291H5.5a1.375 1.375 0 01-1.375-1.375V2.292A1.375 1.375 0 015.5.917h1.833v.916a.917.917 0 00.917.917h.917v3.667a1.375 1.375 0 01-1.375 1.375z"
          fill="#6F6F6F"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_655_2267">
          <Path fill="#fff" d="M0 0H11V11H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CopyIcon;
