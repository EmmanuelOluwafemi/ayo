import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

interface Props {
    size?: number;
}

function AddIcon({ size } : Props) {
  return (
    <Svg
      width={size || 10}
      height={size || 10}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M7.083 4.583H5.417V2.917a.417.417 0 10-.834 0v1.666H2.917a.417.417 0 100 .834h1.666v1.666a.417.417 0 10.834 0V5.417h1.666a.417.417 0 100-.834z"
        fill="#fff"
      />
    </Svg>
  );
}

export default AddIcon;
