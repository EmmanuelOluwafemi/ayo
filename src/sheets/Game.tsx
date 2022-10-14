import { View, Text } from "react-native";
import React from "react";
import { GameLayout } from "../layouts";
import { Board } from "../features/game";

const Game = () => {
  return (
    <GameLayout>
      <Board />
    </GameLayout>
  );
};

export default Game;
