import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Bankaccount from "../../screens/bankaccount";
import Expensive from "../../screens/expensive";
import Home from "../../screens/home";
import More from "../../screens/more";
import Portfolio from "../../screens/portfolio";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center">
              <AntDesign
                name="home"
                size={26}
                color={focused ? "#497BD0" : "gray"}
              />
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center">
              <Feather
                name="bookmark"
                size={26}
                color={focused ? "#497BD0" : "gray"}
              />
            </View>
          ),
        }}
        name="Expensive"
        component={Expensive}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center">
              <Ionicons
                name="notifications-outline"
                size={26}
                color={focused ? "#497BD0" : "gray"}
              />
            </View>
          ),
        }}
        name="Portfolio"
        component={Portfolio}
      />
      <Tab.Screen name="Bankaccount" component={Bankaccount} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}
