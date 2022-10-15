import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

interface Props {
  size?: number;
  color?: string;
}

function EndIcon({ size, color }: Props) {
  return (
    <Svg
      width={size || 16}
      height={size || 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12.393 7.013c.7.34 1.36.767 1.974 1.274L13.653 9a9.162 9.162 0 00-1.253-.847v-1.14h-.007zm-8.793 0v1.134a9.122 9.122 0 00-1.247.846L1.64 8.28c.607-.5 1.267-.92 1.96-1.267zM8 4.667A11.314 11.314 0 00.193 7.78.665.665 0 000 8.253c0 .187.073.354.193.467l1.654 1.653c.12.12.286.194.473.194.18 0 .347-.067.467-.187A7.675 7.675 0 014.56 9.147a.672.672 0 00.373-.6V6.48C5.9 6.167 6.933 6 8 6c1.067 0 2.1.167 3.06.487v2.066c0 .267.153.494.373.6.654.327 1.254.74 1.78 1.233.12.114.287.187.467.187a.664.664 0 00.473-.193l1.654-1.653A.665.665 0 0016 8.253a.665.665 0 00-.193-.473A11.314 11.314 0 008 4.667z"
        fill={color || "#fff"}
      />
    </Svg>
  );
}

export default EndIcon;
