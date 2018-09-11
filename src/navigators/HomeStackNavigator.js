import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import MediaScreen from '../screens/MediaScreen';

const HomeScreenNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Media: {
    screen: MediaScreen,
    navigationOptions: {
      header: null,
    },
  },
}, {
  initialRouteName: 'Home'
});

export default HomeScreenNavigator;
