import { Center, Heading, Image } from "native-base";
import React from "react";
import { Fonts } from "../constants";
import { MainLayout } from "../layouts";

import Logo from "../../assets/logo.png";

const Start = () => {
  return (
    <MainLayout>
      <Center flex={1}>
        <Heading fontFamily={Fonts.extrabold} size="2xl" color="white">
          <Image source={Logo} w={147} h={44} alt="logo" />
        </Heading>
      </Center>
    </MainLayout>
  );
};

export default Start;
