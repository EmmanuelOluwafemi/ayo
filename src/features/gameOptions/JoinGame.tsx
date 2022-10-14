import React, { useState } from "react";
import { Box, Center, HStack, Input, Pressable, Text, VStack } from "native-base";
import { AddIcon } from "../../components/icons";
import { CustomModal } from "../../components";

const JoinGame = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <Box
      rounded="xl"
      bg={{
        linearGradient: {
          colors: ["#FDB217", "rgba(253, 179, 22, 0)", "black"],
          start: [0, 1],
          end: [0.2, 0.2],
        },
      }}
      w="118px"
      h="118px"
      p="1px"
    >
      <Pressable onPress={() => setShowModal(true)} p="12px" bg="#1A1819" w="full" h="full" rounded="xl">
        <Box w="full" h="56px" bg="#D9D9D9" rounded="md" />

        <HStack mt={2} alignItems="center" justifyContent="space-between">
            <Text color="white" fontSize="10px" maxW="40px">Join Game.</Text>

            <Box
                rounded="sm"
                bg={{
                    linearGradient: {
                        colors: ["#D93F31", "#211F20"],
                        start: [1, 0],
                        end: [0.9, 0.9],
                    },
                }}
                w="21px"
                h="21px"
                p="1px"
            >
                <Center rounded="sm" w="full" h="full" bg="#1A1819">
                    <AddIcon  />
                </Center>
            </Box>    
        </HStack>
      </Pressable>

      <CustomModal isOpen={showModal} actionButtonText="Join Game" onClose={() => setShowModal(false)}>
        <VStack px={2} space={2} mb={6}>
            <Input size="2xl" borderColor="#FBBC04" color="#fff" placeholder="Name" fontSize="sm" py="0.75rem" />
            <Input size="2xl" borderColor="#FBBC04" color="#fff" placeholder="Invite Code" fontSize="sm" py="0.75rem" />
        </VStack>
      </CustomModal>
    </Box>
  );
};

export default JoinGame;
