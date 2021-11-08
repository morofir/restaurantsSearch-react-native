import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultShow: ResultShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);
export default createAppContainer(navigator);
/* 
Client ID
sQrmVRHght2eTsXJgGGRDg

API Key
5ziG5d-nxrd9oRoaO1Mf9nvcsBez3oRbJ83dA09sFj7UDoNPi1Xlcj8dNF1A7C2V6zc_asRGYE5MrmXUuWE5C0llJORo0EXPTVG1bDaBKiperVVtZLtMJZ9PwMuGYXYx
 */
