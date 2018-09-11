import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import {
  Text,
  Container,
  Header,
  Body,
  Left,
  Right,
  Content,
  View,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    backgroundColor: '#222326',
    alignItems: 'center',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  flex: {
    flex: 1,
  },
});

class MediaScreen extends Component {
  navigateBack() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  render() {
    return (
      <Container style={styles.root}>
        <Header style={styles.header}>
          <Left style={styles.flex}>
            <TouchableHighlight onPress={() => this.navigateBack()}>
              <Icon name="ios-arrow-back" color="white" size={22} />
            </TouchableHighlight>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.text}>
              Acoustic Hits
            </Text>
          </Body>
          <Right style={styles.flex}>
            <Icon name="ios-more" color="white" size={22} />
          </Right>
        </Header>
        <Content padder>
          <View style={styles.content}>
            <Text style={styles.text}>Media Screen</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default MediaScreen;
