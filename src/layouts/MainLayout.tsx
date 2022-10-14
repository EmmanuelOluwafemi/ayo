import { View, Text } from "react-native";
import React from "react";
import { Flex, Image } from "native-base";

import BackgroundTop from "../../assets/main-background-top.png";
import BackgroundBottom from "../../assets/mainBackgroundBottom.png";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Flex w="full" h="full" position="relative" bg="#211F20">
      <Image
        source={BackgroundTop}
        w="full"
        h={110}
        position="absolute"
        top={0}
        left={0}
        alt="Alternate Text"
      />
      <Image
        source={BackgroundBottom}
        w="full"
        h={110}
        position="absolute"
        bottom={0}
        left={0}
        alt="Alternate Text"
      />

      {children}
    </Flex>
  );
};

export default MainLayout;
