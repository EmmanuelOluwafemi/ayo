import { View, Text } from "react-native";
import React from "react";
import { Image } from "native-base";

import Seed1 from "../../../assets/seed1.png";
import Seed2 from "../../../assets/seed2.png";

const seeds = [Seed1, Seed2];

// select any seed from seeds array
const randomSeed = seeds[Math.floor(Math.random() * seeds.length)];

interface Props {
    top: number;
    left: number;
}

const Seed = ({ top, left }: Props) => {
  return (
    <Image
      source={randomSeed}
      position="absolute"
      top={top + "%"}
      left={left + "%"}
      w="16px"
      h="16px"
      alt="ayo seed"
    />
  );
};

export default Seed;
