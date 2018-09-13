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

import ListItem from '../components/ListItem';

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
    flexDirection: 'column'
  },
  // content: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  text: {
    color: 'white',
  },
  flex: {
    flex: 1,
  },
});

class MediaScreen extends Component {
  constructor(props) {
    super(props)
  }

  navigateBack() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  render() {
    const { data } = this.props.navigation.state.params;

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
              {data.title}
            </Text>
          </Body>
          <Right style={styles.flex}>
            <Icon name="md-more" color="white" size={22} />
          </Right>
        </Header>
        <Content padder>
          <View style={styles.content}>
            <ListItem
              withRight
              title={`Let's See What The Night Can Do`}
              caption={`Jason Mraz`}
            />
            <ListItem
              withRight
              title={`Let's See What The Night Can Do`}
              caption={`Jason Mraz`}
            />
            <ListItem
              withRight
              title={`Let's See What The Night Can Do`}
              caption={`Jason Mraz`}
            />
            <ListItem
              withRight
              title={`Let's See What The Night Can Do`}
              caption={`Jason Mraz`}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default MediaScreen;
