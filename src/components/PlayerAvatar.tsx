import { Box, Center, Image } from "native-base";
import React, { useMemo } from "react";

import PlayerOneAvatar from "../../assets/player1.png";
import PlayerTwoAvatar from "../../assets/player2.png";

interface PlayerAvatarProps {
  size?: number;
  player?: number;
}

const PlayerAvatar = ({ size, player }: PlayerAvatarProps) => {
  const imageSize = useMemo(() => {
    if (size) {
      return size - 32;
    }
    return 40;
  }, [size]);

  if (player === 1) {
    return (
      <Center
        rounded="full"
        roundedBottomLeft="md"
        borderColor="rgba(0, 0, 0, 0.3)"
        borderWidth="3"
        w={size || 72 + "px"}
        h={size || 72 + "px"}
        bg="rgba(255, 255, 255, 0.4)"
      >
        <Image
          w={imageSize + "px"}
          h={imageSize + "px"}
          source={PlayerOneAvatar}
          alt="player avatar"
        />
      </Center>
    );
  }

  return (
    <Center
      rounded="full"
      roundedBottomRight="md"
      borderColor="rgba(0, 0, 0, 0.3)"
      borderWidth="3"
      w={size || 72 + "px"}
      h={size || 72 + "px"}
      bg="rgba(255, 255, 255, 0.4)"
    >
      <Image
        w={imageSize + "px"}
        h={imageSize + "px"}
        source={PlayerTwoAvatar}
        alt="player avatar"
      />
    </Center>
  );
};

export default PlayerAvatar;
