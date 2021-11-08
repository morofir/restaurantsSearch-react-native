import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]); //array of search results
  const [errorMsg, setErrorMsg] = useState("");

  //helper function is async
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: { limit: 50, term: searchTerm, location: "san jose" },
      });
      //assign when getting data
      //what we add on the second argument, params will add into the link of the api response: https://..../search?limit=50
      //instead of term:term, we can just put term,
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMsg(e.toString());
    }
  };

  //bad code: call search api when component is rendered
  // searchApi("pasta");-> this making it run any time component is rendered
  //yelp api 2 options: fetch(more code) and axios(better and easy to use)
  useEffect(() => {
    searchApi("pizza");
  }, []);
  return [searchApi, results, errorMsg]; // we returning the thing we need inside the components
};
