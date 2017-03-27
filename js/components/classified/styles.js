import { Dimensions } from 'react-native';
const React = require('react-native');

const { StyleSheet } = React;
const { width, height } = Dimensions.get('window');

export default {
  wrapper: {
    height,
    backgroundColor: 'gray',
    padding: 0,
    margin: 0,
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent',
    width,

  },
  view:{
    backgroundColor: 'blue',
    height: 100,

  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    height: 100,
  }
};
