import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Container, Header, Body, Title, Content } from 'native-base';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    backgroundColor: '#222326',
  },
  body: {
    alignItems: 'center',
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  }
});

const BrowseScreen = () => (
  <Container style={styles.root}>
    <Header style={styles.header}>
      <Body style={styles.body}>
        <Title>Browse</Title>
      </Body>
    </Header>
    <View style={styles.content}>
      <Text style={styles.text}>
        Browse Screen
      </Text>
    </View>
  </Container>
);

export default BrowseScreen;
