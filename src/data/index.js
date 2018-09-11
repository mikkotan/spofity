import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    label: 'Recently Played',
    items: [
      {
        id: uuid(),
        source: require('../../assets/images/acoustic_hits_obg.png'),
        title: 'Acoustic Hits',
        subtitle: '',
      },
      {
        id: uuid(),
        source: require('../../assets/images/ambient_chill.png'),
        title: 'Ambient Chill',
        subtitle: '',
      },
      {
        id: uuid(),
        source: require('../../assets/images/ily_sabado.png'),
        title: 'I Love You, Sabado!',
        subtitle: '',
      },
      {
        id: uuid(),
        source: require('../../assets/images/its_a_hit.png'),
        title: "It's a hit",
        subtitle: '',
      },
    ],
  },
  {
    id: uuid(),
    label: 'Work-mode!',
    items: [
      {
        id: uuid(),
        source: require('../../assets/images/ambient_chill.png'),
        title: 'Ambient Chill',
        subtitle: '1,110,908 FOLLOWERS',
      },
      {
        id: uuid(),
        source: require('../../assets/images/its_a_hit.png'),
        title: "It's a hit",
        subtitle: '3,190,441 FOLLOWERS',
      },
      {
        id: uuid(),
        source: require('../../assets/images/todays_top_hits.png'),
        title: "Today's Top Hits",
        subtitle: '5,231,890 FOLLOWERS',
      },
      {
        id: uuid(),
        source: require('../../assets/images/ily_sabado.png'),
        title: 'I Love You, Sabado!',
        subtitle: '1,231,890 FOLLOWERS',
      },
    ],
  },
  {
    id: uuid(),
    label: 'Your Heavy Rotation',
    items: [
      {
        id: uuid(),
        source: require('../../assets/images/us_the_duo.png'),
        title: 'This is: Us the Duo',
        subtitle: '929,008 FOLLOWERS',
      },
      {
        id: uuid(),
        source: require('../../assets/images/todays_top_hits.png'),
        title: "Today's Top Hits",
        subtitle: '5,231,890 FOLLOWERS',
      },
      {
        id: uuid(),
        source: require('../../assets/images/ily_sabado.png'),
        title: 'I Love You, Sabado!',
        subtitle: '1,231,890 FOLLOWERS',
      },
    ],
  },
];