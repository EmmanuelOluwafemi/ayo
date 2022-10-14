import React, { useState } from "react";
import {
  Box,
  Center,
  Divider,
  HStack,
  Input,
  Pressable,
  ShareIcon,
  Text,
  VStack,
} from "native-base";
import { AddIcon, CopyIcon } from "../../components/icons";
import { CustomModal } from "../../components";

const CreateGame = () => {
  const [showModal, setShowModal] = useState(false);
  const [showInviteLink, setShowInviteLink] = useState(false);

  return (
    <Box
      rounded="xl"
      bg={{
        linearGradient: {
          colors: ["#FDB217", "rgba(253, 179, 22, 0)", "black"],
          start: [1, 0],
          end: [0.8, 0.8],
        },
      }}
      w="118px"
      h="118px"
      p="1px"
    >
      <Pressable
        onPress={() => setShowModal(true)}
        p="12px"
        bg="#1A1819"
        w="full"
        h="full"
        rounded="xl"
      >
        <Box w="full" h="56px" bg="#D9D9D9" rounded="md" />

        <HStack mt={2} alignItems="center" justifyContent="space-between">
          <Text color="white" fontSize="10px" maxW="40px">
            Create Game.
          </Text>

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
              <AddIcon />
            </Center>
          </Box>
        </HStack>
      </Pressable>

      <CustomModal
        isOpen={showModal}
        actionButtonText="Join Game"
        actionButtonOnPress={() => {
          setShowModal(false);
          setShowInviteLink(true)
        }}
        onClose={() => setShowModal(false)}
      >
        <VStack px={2} space={2} mb={6}>
          <Input
            size="2xl"
            borderColor="#FBBC04"
            color="#fff"
            placeholder="Name"
            fontSize="sm"
            py="0.75rem"
          />
        </VStack>
      </CustomModal>

      <CustomModal
        isOpen={showInviteLink}
        noAction
        onClose={() => setShowInviteLink(false)}
      >
        <VStack px={2} space={2} mb={6}>
          <Text color="white" textAlign="center" fontSize="12px">
            Waiting for player two...
          </Text>

          <HStack
            justifyContent="space-between"
            alignItems="center"
            w="full"
            bg="white"
            px="14px"
            py="10px"
            rounded="sm"
          >
            <HStack alignItems="center" space="2px">
              <Text color="#1B191A" fontSize="12px">
                Invite Code:
              </Text>
              <Text color="#A4A4A4" fontSize="12px">
                12628GH84
              </Text>
            </HStack>

            <HStack alignItems="center" space={2}>
              <Pressable>
                <ShareIcon />
              </Pressable>
              <Divider
                orientation="vertical"
                _light={{
                  bg: "rgba(110, 110, 110, 0.3)",
                }}
                _dark={{
                  bg: "rgba(110, 110, 110, 0.3)",
                }}
              />
              <Pressable>
                <CopyIcon />
              </Pressable>
            </HStack>
          </HStack>
        </VStack>
      </CustomModal>
    </Box>
  );
};

export default CreateGame;
