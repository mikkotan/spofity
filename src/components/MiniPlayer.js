import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Left,
  Right,
  View,
  Text,
} from 'native-base';

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
    backgroundColor: '#222326',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  trackDetails: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  trackInfo: {
    flexDirection: 'row'
  },
  trackName: {
    color: 'white',
    fontWeight: '100',
    fontSize: 12
  },
  trackSinger: {
    color: '#bdbdbd',
    fontWeight: '100',
    fontSize: 12
  },
  trackDevice: {
    flexDirection: 'row'
  },
  left: {
    marginLeft: 10,
  },
  right: {
    marginRight: 10,
  }
})

const MiniPlayer = () => (
  <View style={styles.wrapper}>
    <View style={styles.content}>
      <Left style={styles.left}>
        <Icon
          name="ios-arrow-up"
          size={20}
          color="white"
        />
      </Left>
      <View style={styles.trackDetails}>
        <View style={styles.trackInfo}>
          <Text style={styles.trackName}>Parallel Universe </Text>
          <Text style={styles.trackSinger}>• Clara Benin</Text>
        </View>
        <View style={styles.trackDevice}>
          <Icon
            name="ios-desktop"
            size={16}
            color="white"
          />
          <Text style={styles.trackName}> Available Devices</Text>
        </View>
      </View>
      <Right style={styles.right}>
        <Icon
          name="ios-play"
          size={20}
          color="white"
        />
      </Right>
    </View>
  </View>
);

export default MiniPlayer;
