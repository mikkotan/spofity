import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, ScrollView } from 'react-native';
import {
  View,
  Text,
} from 'native-base';

import CardItem from './CardItem';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
  },
  label: {
    alignSelf: 'center',
    color: 'white',
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 15,
  },
})

const HorizontalCardList = ({
  listLabel,
  listItems,
  navigate,
}) => (
  <View style={styles.root}>
    <Text style={styles.label}>
      {listLabel}
    </Text>
    <ScrollView
      horizontal
      contentContainerStyle={styles.scrollView}
      showHorizontalScrollIndicator={false}
    >
      {listItems.map(item => (
        <CardItem
          key={item.id}
          source={item.source}
          title={item.title}
          subtitle={item.subtitle}
          navigate={navigate}
        />
      ))}
    </ScrollView>
  </View>
);

HorizontalCardList.propTypes = {
  listLabel: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.object),
  navigate: PropTypes.func.isRequired,
};

export default HorizontalCardList;
