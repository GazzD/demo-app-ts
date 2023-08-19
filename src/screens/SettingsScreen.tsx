import React from "react";
import { useNavigation } from '@react-navigation/core';
import { Button, SafeAreaView, Text, View } from "react-native";
import { StackNavigationProps, StackNavigatorParamList } from "../../type";

export default function SettingsScreen() {
  const navigation = useNavigation<StackNavigationProps>();
  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button title="Go to Home" onPress={goToHome} />
    </SafeAreaView>
  );
}