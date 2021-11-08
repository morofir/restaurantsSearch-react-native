import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

//useEFFECT take 2 arguments, function we want to run amount of time, the second argument is the amount of time
// if we dont have sec arg, the function will run every render,[] -> run once when renderd
//[value] , first renderder, and when value will changed

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMsg] = useResults();

  // const [low,medium,high] =
  const filterResultByPrice = (price) => {
    //price ==='$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  //can be adding empty elements <> </> instead of <View></View>

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)} //ref to function
      />
      {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}

      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultByPrice("$")}
        />
        <ResultsList title="Bit Pricer" results={filterResultByPrice("$$")} />
        <ResultsList title="Big Spender" results={filterResultByPrice("$$$")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  error: { fontSize: 30, color: "red", padding: 10 },
});

export default SearchScreen;
