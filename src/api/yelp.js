import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 5ziG5d-nxrd9oRoaO1Mf9nvcsBez3oRbJ83dA09sFj7UDoNPi1Xlcj8dNF1A7C2V6zc_asRGYE5MrmXUuWE5C0llJORo0EXPTVG1bDaBKiperVVtZLtMJZ9PwMuGYXYx",
  },
});
