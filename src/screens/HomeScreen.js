import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  View,
} from 'native-base';

import HorizontalCardList from '../components/HorizontalCardList';
import MiniPlayer from '../components/MiniPlayer';

import data from '../data';

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
  miniPlayerWrapper: {
    height: 50,
    backgroundColor: '#222326'
  },
  miniPlayerContent: {
    flex: 1,
    flexDirection: 'row',
    color: 'white',
    alignItems: 'center'
  },
});

const HomeScreen = ({ navigation: { navigate } }) => (
  <Container style={styles.root}>
    <Header style={styles.header}>
      <Body style={styles.body}>
        <Title>Home</Title>
      </Body>
    </Header>
    <Content padder>
      <View>
        {data.map(playlist => (
          <HorizontalCardList
            key={playlist.id}
            listLabel={playlist.label}
            listItems={playlist.items}
            navigate={navigate}
          />
        ))}
      </View>
    </Content>
    <MiniPlayer />
  </Container>
);

export default HomeScreen;
