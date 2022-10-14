import { View } from "react-native";
import React from "react";
import { SubLayout } from "../layouts";
import { Box, Card, Center, HStack, Pressable, Text } from "native-base";
import { CreateGame, JoinGame } from "../features/gameOptions";

const GameOptions = () => {
  return (
    <SubLayout bottom logo>
      <Box position="relative">
        <Text fontSize="14px" color="white">
          Game Option
        </Text>
        <Box
          w="90px"
          h="2px"
          bg={{
            linearGradient: {
              colors: ["#D93F31", "#211F20"],
              start: [0, 0],
              end: [0.98, 0],
            },
          }}
        />
      </Box>

      <HStack mt={6} space={8}>
        <CreateGame />
        <JoinGame />
      </HStack>
    </SubLayout>
  );
};

export default GameOptions;

