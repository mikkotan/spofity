import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
  Container,
  View,
  Text,
  Header,
  Body,
  Title,
  Content,
} from 'native-base';

import CardItem from '../components/CardItem';
import HorizontalCardList from '../components/HorizontalCardList';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#121212',
  },
  text: {
    color: 'white',
  },
  header: {
    backgroundColor: '#222326',
  },
  body: {
    alignItems: 'center',
    flex: 1,
  },
  categories: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 15,
  },
});

const data = [
  {
    listLabel: 'Recently Played',
    listItems: [
      {
        id: 1,
        source: require('../../assets/images/acoustic_hits_obg.png'),
        title: 'Acoustic Hits',
        subtitle: '',
      },
      {
        id: 2,
        source: require('../../assets/images/ambient_chill.png'),
        title: 'Ambient Chill',
        subtitle: '',
      },
      {
        id: 3,
        source: require('../../assets/images/ily_sabado.png'),
        title: 'I Love You, Sabado!',
        subtitle: '',
      },
      {
        id: 4,
        source: require('../../assets/images/its_a_hit.png'),
        title: "It's a hit",
        subtitle: '',
      },
    ],
  },
  {
    listLabel: 'Your Heavy Rotation',
    listItems: [
      {
        id: 5,
        source: require('../../assets/images/us_the_duo.png'),
        title: 'This is: Us the Duo',
        subtitle: '929,008 FOLLOWERS',
      },
      {
        id: 6,
        source: require('../../assets/images/todays_top_hits.png'),
        title: "Today's Top Hits",
        subtitle: '5,231,890 FOLLOWERS',
      },
      {
        id: 7,
        source: require('../../assets/images/ily_sabado.png'),
        title: 'I Love You, Sabado!',
        subtitle: '1,231,890 FOLLOWERS',
      },
    ],
  },
]

const HomeScreen = () => (
  <Container style={styles.root}>
    <Header style={styles.header}>
      <Body style={styles.body}>
        <Title>Home</Title>
      </Body>
    </Header>
    <Content padder>
      {data.map(playlist => (
        <HorizontalCardList listLabel={playlist.listLabel} listItems={playlist.listItems} />
      ))}
    </Content>
  </Container>
);

export default HomeScreen;
