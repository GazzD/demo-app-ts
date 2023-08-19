import { CompositeScreenProps, NavigationProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackNavigatorParamList = {
  Home: undefined;
  Settings: undefined;
};

export type StackNavigationProps = NativeStackNavigationProp<StackNavigatorParamList>;