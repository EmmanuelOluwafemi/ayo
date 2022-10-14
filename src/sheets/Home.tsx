import { View } from "react-native";
import React from "react";
import { SubLayout } from "../layouts";
import { Button, Center, Box, Text, HStack, Pressable } from "native-base";
import { BoardPlayIcon, BookmarkIcon, SettingsIcon } from "../components/icons";

interface Props {
  navigation: any;
}

const Home = ({ navigation }: Props) => {
  return (
    <SubLayout bottom logo>
      <Center>
        <Box
          bg="#FDB316"
          p="1px"
          rounded="sm"
          _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "warmGray.50",
            textAlign: "center",
          }}
        >
          <Button onPress={() => navigation.navigate("GameOptions")} px="67px" py="15px" bgColor="#211F20">
            <HStack alignItems="center" space={2}>
              <BoardPlayIcon size={12} />
              <Text color="white">Play Game</Text>
            </HStack>
          </Button>
        </Box>
        
        <HStack mt={4} alignItems="center" space="27px">
          <Pressable>
            <HStack alignItems="center" space={2}>
              <BookmarkIcon size={12} />
              <Text underline color="white">Tutorial</Text>
            </HStack>
          </Pressable>
          <Pressable>
            <HStack alignItems="center" space={2}>
              <SettingsIcon size={12} />
              <Text underline color="white">Settings</Text>
            </HStack>
          </Pressable>
        </HStack>
        <Text>HGelll</Text>
      </Center>
    </SubLayout>
  );
};

export default Home;
