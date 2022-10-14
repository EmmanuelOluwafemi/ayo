import { View, Text } from "react-native";
import React from "react";
import { Center, Flex, Image } from "native-base";

import BackgroundTop from "../../assets/sub-background-top.png";
import BackgroundBottom from "../../assets/sub-background-bottom.png";
import Logo from "../../assets/logo.png";

interface Props {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
  logo?: boolean;
}

const SubLayout = ({ children, top, bottom, logo }: Props) => {
  return (
    <Flex w="full" h="full" position="relative" bg="#211F20">
      {top && (
        <Image
          source={BackgroundTop}
          w="full"
          h="50px"
          position="absolute"
          top={0}
          left={0}
          alt="Alternate Text"
        />
      )}
      {bottom && (
        <Image
          source={BackgroundBottom}
          w="full"
          h="50px"
          position="absolute"
          bottom={0}
          left={0}
          alt="Alternate Text"
        />
      )}

      {
        logo && (
          <Image
            source={Logo}
            w="73px"
            h="22px"
            position="absolute"
            top="44px"
            left="56px"
            alt="Alternate Text"
          />
        )
      }

      <Center flex={1}>{children}</Center>
    </Flex>
  );
};

export default SubLayout;
