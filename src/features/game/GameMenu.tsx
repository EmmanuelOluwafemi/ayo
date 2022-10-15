import React from 'react'
import { Box, Center, HStack, Pressable } from 'native-base'
import { EndIcon, RefreshIcon, SettingsIcon } from '../../components/icons'

const GameMenu = () => {
  return (
    <Center position="absolute" bottom="8px">
      <HStack space={8}>
        <Pressable bg="rgba(255, 255, 255, 0.3)" borderColor="rgba(255, 255, 255, 0.5)" borderWidth="3" p="8px" rounded="full" _focus={{ borderColor: "rgba(255, 255, 255, 0.7)" }}>
          <SettingsIcon color="white"  size={16} />
        </Pressable>
        <Pressable bg="rgba(255, 255, 255, 0.3)" borderColor="rgba(255, 255, 255, 0.5)" borderWidth="3" p="8px" rounded="full" _focus={{ borderColor: "rgba(255, 255, 255, 0.7)" }}>
          <RefreshIcon color="white"  size={16} />
        </Pressable>
        <Pressable bg="rgba(255, 255, 255, 0.3)" borderColor="rgba(255, 255, 255, 0.5)" borderWidth="3" p="8px" rounded="full" _focus={{ borderColor: "rgba(255, 255, 255, 0.7)" }}>
          <EndIcon color="white"  size={16} />
        </Pressable>
      </HStack>
    </Center>
  )
}

export default GameMenu