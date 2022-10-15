import React from "react";
import { Box, Text, HStack, Center, Image } from "native-base";

import Avatar1 from "../../../assets/player1.png";
import Avatar2 from "../../../assets/player2.png";

const GameHeader = () => {
  return (
    <Box position="absolute" top="-18px" w="100%" maxW="600px">
      <Text textAlign="center" color="white" fontWeight="bold" fontSize="sm">
        ROUND 1
      </Text>

      <HStack
        position="relative"
        px={8}
        alignItems="center"
        justifyContent="space-between"
        w="full"
        h="48px"
        bg="rgba(255, 255, 255, 0.3)"
        rounded="md"
      >
        <Text fontSize="lg" fontWeight="bold" color="white">
          Emaz
        </Text>

        <HStack alignItems="center" space={4}>
          <Center width="40px" h="40px" bg="white" rounded="md">
            <Text fontSize="2xl" fontWeight="bold">
              8
            </Text>
          </Center>
          <Text color="white" fontSize="3xl" fontWeight="bold">
            :
          </Text>

          <Center width="40px" h="40px" bg="white" rounded="md">
            <Text fontSize="2xl" fontWeight="bold">
              4
            </Text>
          </Center>
        </HStack>

        <Text fontSize="lg" fontWeight="bold" color="white">
          Sproff
        </Text>

        {/* <Center
          top="1px"
          left="-24px"
          rounded="full"
          roundedBottomLeft="lg"
          w="56px"
          h="56px"
          bg="rgba(255, 255, 255, 0.3)"
          borderColor="rgba(0, 0, 0, 0.3)"
          borderWidth="4px"
          position="absolute"
        >
          <Image w="40px" h="40px" source={Avatar1} alt="player 1" />
        </Center> */}

        {/* <Center
          position="absolute"
          top="1px"
          right="-24px"
          rounded="full"
          roundedBottomRight="lg"
          w="56px"
          h="56px"
          bg="rgba(255, 255, 255, 0.3)"
          borderColor="rgba(0, 0, 0, 0.3)"
          borderWidth="4px"
        >
          <Image w="40px" h="40px" source={Avatar2} alt="player 1" />
        </Center> */}
      </HStack>
    </Box>
  );
};

export default GameHeader;
