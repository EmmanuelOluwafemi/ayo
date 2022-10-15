import React from "react";
import { ImageBackground } from "react-native";
import { Box } from "native-base";

import BoardHoleImage from "../../../assets/board-hole.png";
import Seed from "./Seed";

interface Props {
    size?: number;
}

const BoardHole = ({ size=4 }: Props) => {
  return (
    <Box w="56px" h="56px" rounded="full">
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
        source={BoardHoleImage}
      >
        {
            [...Array(size).keys()].map((_, index) => (
                <Seed
                    key={index}
                  left={Math.floor(Math.random() * 70)}
                  top={Math.floor(Math.random() * 70)}
                />
            ))
        }
      </ImageBackground>
    </Box>
  );
};

export default BoardHole;
