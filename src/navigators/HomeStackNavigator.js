import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

const HomeScreenNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
}, {
  initialRouteName: 'Home'
});

export default HomeScreenNavigator;
