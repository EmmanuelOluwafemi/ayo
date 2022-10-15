import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { Center, Flex, Image } from "native-base";

import BackgroundImg from "../../assets/bgImg.jpg";
import WinBg from "../../assets/win-bg.png";

interface Props {
  children: React.ReactNode;
  isWinner?: boolean;
}

const GameLayout = ({ children, isWinner }: Props): JSX.Element => {
  return (
    <>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={BackgroundImg}
        resizeMode="cover"
      >
        {
          isWinner && (
            <Image
              position="absolute"
              top="0"
              left="0"
              w="full"
              h="full"
              source={WinBg}
              alt="winners bg"
            />
          )
        }
        <Center py={8} px={12} w="full" h="full" position="relative">
          {children}
        </Center>
      </ImageBackground>
    </>
  );
};

export default GameLayout;
