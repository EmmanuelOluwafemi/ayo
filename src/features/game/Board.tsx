import { View, Text } from "react-native";
import React from "react";
import { Box, Center, HStack, Image } from "native-base";

import Gameboard from "../../../assets/game-board.png";
import BoardHole from "./BoardHole";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import GameHeader from "./GameHeader";
import GameMenu from "./GameMenu";
import GameModal from "./GameModal";

const Board = () => {
  const seeds = useSelector((state: RootState) => state.game.seedCounts);
  return (
    <Center w="full" h="full">
      <GameHeader />
      <Box position="relative">
        <Image
          source={Gameboard}
          alt="Gameboard"
          width="650px"
          height="191.8px"
        />

        <HStack space={8} position="absolute" top={8} left="72px">
          <BoardHole size={seeds[0]} />
          <BoardHole size={seeds[1]} />
          <BoardHole size={seeds[2]} />
          <BoardHole size={seeds[3]} />
          <BoardHole size={seeds[4]} />
          <BoardHole size={seeds[5]} />
        </HStack>

        <HStack space={8} position="absolute" bottom={8} left="72px">
          <BoardHole size={seeds[6]} />
          <BoardHole size={seeds[7]} />
          <BoardHole size={seeds[8]} />
          <BoardHole size={seeds[9]} />
          <BoardHole size={seeds[10]} />
          <BoardHole size={seeds[11]} />
        </HStack>
      </Box>

      {/* game menu */}
      <GameMenu />

      {/* game modal */}
      <GameModal />
    </Center>
  );
};

export default Board;
