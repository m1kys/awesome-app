import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../components/HomeScreen/HomeScreen';
import ItemScreen from '../components/ItemScreen/ItemScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Item: {
      screen: ItemScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);