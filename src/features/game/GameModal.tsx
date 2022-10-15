import React from "react";
import { CustomModal, Logo } from "../../components";
import { HStack, Text, VStack, Pressable } from "native-base";
import GameModalMenuItem from "./GameModalMenuItem";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const GameModal = () => {
  const isPaused = useSelector((state: RootState) => state.game.isPaused);
  return (
    <CustomModal isOpen={isPaused} noAction onClose={() => {}}>
      <HStack w="full" px="16px" py="12px" space={12}>
        <VStack justifyContent="space-between">
          <Logo width="73px" height="22px" />

          <Text fontSize="xs" fontWeight="medium" color="white">
            VERSION 1.0
          </Text>
        </VStack>

        <VStack space={6}>
          <GameModalMenuItem text="Resume Game" />
          <GameModalMenuItem text="Restart Game" />
          <GameModalMenuItem text="Exit Game" />
        </VStack>
      </HStack>
    </CustomModal>
  );
};

export default GameModal;
