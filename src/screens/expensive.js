import {
  Button,
  Dimensions,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Expensive = ({ navigation }) => {
  const customData = [
    {
      id: 1,
      name: "HOME & UTILITIES",
      image:
        "https://cdn.pixabay.com/photo/2014/04/03/00/42/power-plug-309142__340.png",
      money: "9,102",
      color: "#177AD5",
    },
    {
      id: 2,
      name: "TRAVEL",
      image:
        "https://modyolo.com/wp-content/uploads/2022/04/cartoon-city-2.png",
      money: "910,2",
      color: "#79D2DE",
    },
    {
      id: 3,
      name: "RIDER SHARING",
      image:
        "https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/f452c7aefd72a6f52b36705c8015464e.jpg",
      money: "191,02",
      color: "#ED6665",
    },
    {
      id: 4,
      name: "GROCERIES",
      image:
        "https://www.pngitem.com/pimgs/m/51-517074_cartoon-grocery-png-transparent-png.png",
      money: "191,02",
      color: "orange",
    },
    {
      id: 5,
      name: "DRINK",
      image:
        "https://img.freepik.com/premium-vector/illustration-soft-drink-vector-cartoon-isolated_592024-28.jpg?w=2000",
      money: "19100,02",
      color: "green",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* text header */}
      <View style={styles.header}>
        <Text className="font-semibold text-white mt-3 text-xl">Expenses</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
        {/* chart */}
        <View style={styles.chartView} className="bg-white">
          <View className="absolute flex-row bottom-0 justify-between ">
            {customData.map((item) => (
              <>
                <View key={item.id} style={{ backgroundColor: item.color }} />
                <Text style={{ fontSize: 8, paddingLeft: 20 }}>
                  {item.name}
                </Text>
              </>
            ))}
          </View>
          <View className="mt-1 ml-14"></View>
        </View>
        {/* cash */}
        <View>
          <View className="bg-white h-16 justify-center pl-4 rounded-t-sm rounded-r-sm">
            <Text className="font-semibold text-xl">
              Top Spending Categories
            </Text>
          </View>
          <View>
            {customData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={{ marginTop: 1 }}
                className="bg-white h-16 items-center pl-4 flex-row justify-between"
              >
                <View className="flex-row items-center">
                  <Image
                    source={{ uri: item.image }}
                    className="w-11 h-11 rounded-full"
                  />
                  <View className="pl-4">
                    <Text className="text-xs text-gray-500">{item.name}</Text>
                    <Text className="text-lg">${item.money} spent</Text>
                  </View>
                </View>
                <View className="pr-3">
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Allcategories");
            }}
            style={{ marginTop: 1 }}
            className="bg-white h-16 items-center pl-4 flex-row justify-between"
          >
            <View>
              <Text className="text-blue-400 font-medium">
                View all categorys
              </Text>
            </View>
            <View className="pr-4">
              <AntDesign name="right" size={24} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Expensive;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    backgroundColor: "#497bd0",
    alignItems: "center",
    height: windowHeight / 12,
    justifyContent: "center",
  },
  main: {
    marginHorizontal: 10,
    marginBottom: 70,
  },
  chartView: {
    marginTop: 10,
    height: windowHeight / 2.5,
    marginBottom: 10,
  },
});
