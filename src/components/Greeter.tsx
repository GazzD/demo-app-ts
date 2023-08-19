import React from "react";
import { Text, View } from "react-native";

interface GreeterProps {
  name?: string;
}


export default function Greeter({name = "World"}) {
  return (
    <View>
      <Text>Hello {name}</Text>
    </View>
  );
}