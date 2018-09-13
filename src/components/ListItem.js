import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { View, Text, Right, Left } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    height: 50,
    margin: 10
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  details: {
    flex: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  flex: {
    flex: 1
  },
  title: {
    color: 'white',
  },
  caption: {
    color: '#97989d'
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

const ListItem = ({
  title,
  caption,
  withLeft,
  withRight,
}) => (
  <View style={styles.container}>
    <View style={styles.content}>
      {withLeft && 
        <Left style={styles.left}>
          <Icon name="ios-disc" size={25} color="white" />
        </Left>
      }
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.caption}>{caption}</Text>
      </View>
      {withRight &&
        <Right style={styles.right}>
          <Icon name="md-more" size={25} color="#97989d" />
        </Right>
      }
    </View>
  </View>
);

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  withLeft: PropTypes.bool,
  withRight: PropTypes.bool,
};

ListItem.defaultProps = {
  withLeft: false,
  withRight: false,
};

export default ListItem;
