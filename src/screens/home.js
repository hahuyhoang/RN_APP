import {
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

import { LineChart } from "react-native-chart-kit";
import { data } from "../../data.json";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Home = () => {
  const [timeframe, setTimeframe] = useState("ALL");
  const [dataType, setDataType] = useState("data");
  const [price, setPrice] = useState(11943);
  const [activeCategory, setActiveCategory] = useState(0);

  const [chartData, setChartData] = useState({
    datasets: [
      {
        data: [10, 14, 8, 6, 6, 9],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  });

  const generateFakeData = (timeframe, dataType) => {
    const labels = [];
    const data = [];

    switch (timeframe) {
      case "D":
        for (let i = 0; i < 24; i++) {
          labels.push(`${i}:00`);
          data.push(Math.floor(Math.random() * 14));
        }
        break;
      case "W":
        for (let i = 0; i < 7; i++) {
          labels.push(`Day ${i + 1}`);
          data.push(Math.floor(Math.random() * 14));
        }
        break;
      case "M":
        for (let i = 0; i < 31; i++) {
          labels.push(`Day ${i + 1}`);
          data.push(Math.floor(Math.random() * 14));
        }
        break;
      case "Y":
        for (let i = 0; i < 12; i++) {
          labels.push(`Month ${i + 1}`);
          data.push(Math.floor(Math.random() * 14));
        }
        break;
      case "ALL":
        for (let i = 0; i < 5; i++) {
          labels.push(`Year ${i + 1}`);
          data.push(Math.floor(Math.random() * 14));
        }
        break;
      default:
        break;
    }

    if (dataType === "price") {
      data.forEach((value, index, array) => {
        array[index] = value * 14;
      });
    }
    return {
      labels: labels,
      datasets: [
        {
          data: data,
          color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
          strokeWidth: 2,
        },
      ],
    };
  };
  const handleButtonPress = () => {
    const newData = generateFakeData(timeframe, dataType);
    setChartData(newData);
  };
  const customData = [
    {
      id: 1,
      name: "WEALTHFRONT",
      description: "Persional Saving",
      image:
        "https://play-lh.googleusercontent.com/5S8jg7ib715oTaXjOl0ZwtUarz6mszRJXu6Z9sCusXWP1nULo33HxJWFDYq_1BvLRA",
      money: 9.102,
    },
    {
      id: 2,
      name: "BANK OF AMERICA",
      description: "BofA Checkings",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgtCABoe9E-0I18DIcS-DtsV71oQ0cpZbRWA&usqp=CAU",
      money: 910.2,
    },
    {
      id: 3,
      name: "ROBINHOOD",
      description: "Robinhood Cash",
      image:
        "https://assets.materialup.com/uploads/e28ab279-b02b-483a-9521-669782128e6f/0x0ss-85.jpg",
      money: 191.02,
    },
    {
      id: 4,
      name: "COINBASE PRO",
      description: "Coinbase USD",
      image: "https://paganresearch.io/images/coinbase.png",
      money: 191.02,
    },
    {
      id: 5,
      name: "BITCOIN",
      description: "BITCOIN USD",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png",
      money: 19100.02,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* text header */}
      <View style={styles.header}>
        <Text className="font-semibold text-white mt-3 text-xl">Home</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
        {/* chart */}
        <View className="bg-white mb-3">
          <View>
            <LineChart
              data={chartData}
              onDataPointClick={({ index }) => {
                console.log("dada");
              }}
              width={Dimensions.get("window").width * (1.24) } // from react-native
              height={200}
              withVerticalLabels={false}
              withHorizontalLabels={true}
              withHorizontalLines={false}
              withVerticalLines={false}
              // horizontalLabelRotation={
              chartConfig={{
                backgroundGradientFrom: "#fff",
                yAxis: { visible: false },
                grid: { visible: false },
                backgroundGradientTo: "#fff",
                decimalPlaces: 0,
                color: (opacity = 255) => `rgba(0, 2, 5, ${opacity})`,
                withDots: false,
                propsForDots: {
                  r: "",
                  strokeWidth: "2",
                },
              }}
              bezier
              style={{
                marginRight: 10,
                alignItems: 'center',
                
              }}
            />
            <View className= "absolute right-1">
              <Text className="font-medium text-xs pb-2 pt-6 text-gray-400">19K</Text>
              <Text className="font-medium text-xs pb-2 text-gray-400">18K</Text>
              <Text className="font-medium text-xs pb-2 text-gray-400">16K</Text>
              <Text className="font-medium text-xs pb-2 text-gray-400">14K</Text>
              <Text className="font-medium text-xs pb-2 text-gray-400">12K</Text>
              <Text className="font-medium text-xs pb-2 text-gray-400">1K</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                paddingHorizontal: 5,
                marginBottom: 10
              }}
            >
              <TouchableOpacity onPress={handleButtonPress} style={styles.btn}>
                <Text style={{fontWeight: '600'}}>1D</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleButtonPress} style={styles.btn}>
                <Text style={{fontWeight: '600'}}>1W</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleButtonPress} style={styles.btn}>
                <Text style={{fontWeight: '600'}}>1M</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleButtonPress} style={styles.btn}>
                <Text style={{fontWeight: '600'}}>3M</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleButtonPress} style={styles.btn}>
                <Text style={{fontWeight: '600'}}>1Y</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleButtonPress} style={styles.btn}>
                <Text style={{fontWeight: '600'}}>ALL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* cash */}
        <View>
          <View className="bg-white h-16 justify-center pl-4 rounded-t-sm rounded-r-sm">
            <Text className="font-semibold text-xl">Cash</Text>
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
                    <Text className="text-lg">{item.description}</Text>
                  </View>
                </View>
                <View className="pr-3">
                  <Text className="text-lg">${item.money}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

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
    // marginTop: 10,
    height: windowHeight / 2.5,
    marginBottom: 10,
  },
  wrap: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F4F6F9",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  listItem: {
    marginTop: 20,
    height: 500,
    width: "100%",
    backgroundColor: "#FFF",
  },
  title: {
    height: 60,
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
    paddingLeft: 10,
  },
  item: {
    height: 70,
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  sty_title: {
    fontWeight: "500",
    fontSize: 16,
    color: "#000",
  },
  img: {
    width: 45,
    height: 45,
    resizeMode: "contain",
    borderRadius: 22,
  },
  item_title: {
    justifyContent: "center",
    paddingLeft: 20,
  },
  item_name: {
    fontSize: 15,
    fontWeight: "500",
    color: "#808F9D",
  },
  item_text: {
    fontSize: 16,
    fontWeight: "600",
  },
  btn: {
    width: "14%",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B3B7BD",
    borderRadius: 10,
  },
});
