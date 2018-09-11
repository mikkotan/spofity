import { createStackNavigator } from 'react-navigation';

import BrowseScreen from '../screens/BrowseScreen';

const BrowseStackNavigator = createStackNavigator({
  Browse: {
    screen: BrowseScreen,
    navigationOptions: {
      header: null,
    },
  },
}, {
  initialRouteName: 'Browse'
});

export default BrowseStackNavigator;
