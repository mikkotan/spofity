import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Image,
  TouchableHighlight,
  View,
} from 'react-native';
import { Text } from 'native-base'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: "400",
  },
  subtitle: {
    alignSelf: 'center',
    color: '#b1b1b1',
    fontWeight: "200",
    fontSize: 8
  }
});

const CardItem = ({
  source,
  title,
  subtitle,
  navigate,
}) => (
  <TouchableHighlight onPress={() => navigate('Media')}>
    <View style={styles.wrapper}>
      <Image
        source={source}
        style={styles.image}
      />
      <Text style={styles.title}>
        {title}
      </Text>
      {subtitle.length > 0
        && (
          <Text style={styles.subtitle}>
            {subtitle}
          </Text>
        )
      }
    </View>
  </TouchableHighlight>
);

CardItem.propTypes = {
  source: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  navigate: PropTypes.func.isRequired,
};

CardItem.defaultProps = {
  subtitle: ''
};

export default CardItem;
