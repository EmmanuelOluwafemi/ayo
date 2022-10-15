import { Text, Pressable, Box } from "native-base";
import React from "react";

interface GameModalMenuItemProps {
  text: string;
  onPress?: () => void;
}

const GameModalMenuItem = ({ text, onPress }: GameModalMenuItemProps) => {
  return (
    <Pressable onPress={onPress} position="relative" w="180px" py="8px">
      <Text color="white">{text}</Text>

      <Box
        position="absolute"
        bottom="0"
        w="full"
        h="1px"
        bg={{
          linearGradient: {
            colors: ["#D93F31", "#211F20"],
            start: [0, 0],
            end: [0.98, 0],
          },
        }}
      />
    </Pressable>
  );
};

export default GameModalMenuItem;
