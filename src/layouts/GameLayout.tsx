import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { Center, Flex, Image } from "native-base";

import BackgroundImg from "../../assets/bgImg.jpg";

interface Props {
  children: React.ReactNode;
}

const GameLayout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <ImageBackground style={{ width: "100%", height: "100%" }} source={BackgroundImg} resizeMode="cover">
          <Center py={8} px={12} w="full" h="full" position="relative">
          {children}
          </Center>
      </ImageBackground>
    </>
  );
};

export default GameLayout;
