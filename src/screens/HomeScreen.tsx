import React from "react";
import { useNavigation } from '@react-navigation/core';
import { Button, SafeAreaView, Text, View } from "react-native";
import { StackNavigationProps, StackNavigatorParamList } from "../../type";

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProps>();
  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Button title="Go to Settings" onPress={goToSettings} />
    </SafeAreaView>
  );
}