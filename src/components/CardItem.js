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
  data,
  navigate,
}) => (
  <TouchableHighlight onPress={() => navigate('Media', { data })}>
    <View style={styles.wrapper}>
      <Image
        source={data.source}
        style={styles.image}
      />
      <Text style={styles.title}>
        {data.title}
      </Text>
      {data.subtitle.length > 0
        && (
          <Text style={styles.subtitle}>
            {data.subtitle}
          </Text>
        )
      }
    </View>
  </TouchableHighlight>
);

CardItem.propTypes = {
  navigate: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

CardItem.defaultProps = {
  subtitle: ''
};

export default CardItem;
