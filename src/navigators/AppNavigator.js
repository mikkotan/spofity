import React from 'react';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import LibraryScreen from '../screens/LibraryScreen';
import RadioScreen from '../screens/RadioScreen';
import SearchScreen from '../screens/SearchScreen';

import HomeStackNavigator from './HomeStackNavigator';
import BrowseStackNavigator from './BrowseStackNavigator';

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
    screen: HomeStackNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: CustomTabIcon('ios-home', 22)
    }
  },
  Browse: {
    screen: BrowseStackNavigator,
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
    borderTopWidth: 1,
  }
});

export default AppNavigator;
