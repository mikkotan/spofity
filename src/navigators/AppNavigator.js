import React from 'react';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import BrowseScreen from '../screens/BrowseScreen';
import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import RadioScreen from '../screens/RadioScreen';
import SearchScreen from '../screens/SearchScreen';

const CustomTabIcon = (name, size) => {
  const icon = ({ tintColor }) => (
    <Icon
      name={name}
      size={size}
      color={tintColor}
    />
  );

  icon.propTypes = {
    color: PropTypes.string.isRequired,
  }

  return icon;
}

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: CustomTabIcon('ios-home', 22)
    }
  },
  Browse: {
    screen: BrowseScreen,
    navigationOptions: {
      tabBarLabel: 'Browse',
      tabBarIcon: CustomTabIcon('ios-albums', 22)
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: CustomTabIcon('ios-search', 22)
    }
  },
  Radio: {
    screen: RadioScreen,
    navigationOptions: {
      tabBarLabel: 'Radio',
      tabBarIcon: CustomTabIcon('ios-radio', 22)
    }
  },
  Library: {
    screen: LibraryScreen,
    navigationOptions: {
      tabBarLabel: 'Your Library',
      tabBarIcon: CustomTabIcon('ios-stats', 22)
    }
  }
},{
  tabBarOptions: {
    inactiveTintColor: '#97989d',
    inactiveBackgroundColor: '#222326',
    activeTintColor: 'white',
    activeBackgroundColor: '#222326',
  }
});

export default AppNavigator;
