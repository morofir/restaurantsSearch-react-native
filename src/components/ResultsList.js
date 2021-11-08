import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation"; //important

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          //   return <Text>{item.name} </Text>; //we will not return big jsx, just a component
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ResultShow", { id: item.id })}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    padding: 5,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
  },
  container: { marginBottom: 10 },
});
export default withNavigation(ResultsList); //special version of Navigation
