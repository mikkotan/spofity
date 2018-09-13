import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { View, Text, Right, Left } from 'native-base';

const ListItem = ({
  title,
  caption,
  hasAvatar,
  hasOptions,
  avatar,
  optionIcon,
}) => (
  <View style={styles.container}>
    <View style={styles.content}>
      {hasAvatar && 
        <Left style={styles.left}>
          {avatar}
        </Left>
      }
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.caption}>{caption}</Text>
      </View>
      {hasOptions &&
        <Right style={styles.right}>
          {optionIcon}
        </Right>
      }
    </View>
  </View>
);

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  hasAvatar: PropTypes.bool,
  hasOptions: PropTypes.bool,
  avatar: PropTypes.func,
  optionIcon: PropTypes.func,
};

ListItem.defaultProps = {
  hasAvatar: false,
  hasOptions: false,
  avatar: null,
  optionIcon: null,
};

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

export default ListItem;
