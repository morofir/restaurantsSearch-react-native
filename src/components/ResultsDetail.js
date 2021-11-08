import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.textStyle}>{result.name}</Text>
      <Text style={styles.textDetails}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  imageStyle: {
    width: 200,
    height: 130,
    borderRadius: 15,
    marginBottom: 5,
  },
  textDetails: {
    color: "gray",
  },
});

export default ResultsDetail;
