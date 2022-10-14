import { View, Text } from "react-native";
import React from "react";
import { Box, Center, HStack, Image } from "native-base";

import Gameboard from "../../../assets/game-board.png";

const Board = () => {
  return (
    <Center w="full" h="full">
      <Box position="relative">
        <Image
          source={Gameboard}
          alt="Gameboard"
          width="650px"
          height="191.8px"
        />

        <HStack space={8} position="absolute" top={8} left="72px">
          <Box bg="white" w="56px" h="56px" rounded="full"></Box>
          <Box bg="white" w="56px" h="56px" rounded="full"></Box>
          <Box bg="white" w="56px" h="56px" rounded="full"></Box>
          <Box bg="white" w="56px" h="56px" rounded="full"></Box>
          <Box bg="white" w="56px" h="56px" rounded="full"></Box>
          <Box bg="white" w="56px" h="56px" rounded="full"></Box>
        </HStack>

        <HStack space={8} position="absolute" bottom={8} left="72px">
          <Box bg="white" w="56px" h="56px" rounded="full"></Box>
          <Box bg="white" w="56px" h="56px" rounded="full"></Box>
          <Box bg="white" w="56px" h="56px" rounded="full"></Box>
          <Box bg="white" w="56px" h="56px" rounded="full"></Box>
          <Box bg="white" w="56px" h="56px" rounded="full"></Box>
          <Box bg="white" w="56px" h="56px" rounded="full"></Box>
        </HStack>
      </Box>
    </Center>
  );
};

export default Board;
