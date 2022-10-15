import React from "react";
import { GameLayout } from "../../layouts";
import { HStack, VStack, Text, Box, Pressable } from "native-base";
import { Logo, PlayerAvatar } from "../../components";
import { EndIcon, RefreshIcon } from "../../components/icons";

const GameWinner = () => {
  return (
    <GameLayout isWinner>
      <VStack h="full" py="8" justifyContent="space-between">
        <HStack justifyContent="center">
          <Logo width="96.23px" height="29px" />
        </HStack>

        <HStack space="24px">
          <PlayerAvatar player={1} />

          <VStack space={6}>
            <Text color="white" fontSize="2xl" fontWeight="bold">
              PLAYER 1 WINS
            </Text>

            <Pressable>
                <HStack alignItems="center" space={2}>
                    <RefreshIcon color="#FDB316" size={16} />
                    <Text underline color="white" fontSize="md">Restart Game</Text>
                </HStack>
            </Pressable>
            
            <Pressable>
                <HStack alignItems="center" space={2}>
                    <EndIcon color="#FDB316" size={16} />
                    <Text underline color="white" fontSize="md">End Game</Text>
                </HStack>
            </Pressable>
          </VStack>
        </HStack>

        <Box />
      </VStack>
    </GameLayout>
  );
};

export default GameWinner;
