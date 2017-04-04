import { Dimensions } from 'react-native';
const React = require('react-native');

const { StyleSheet } = React;
const { width, height } = Dimensions.get('window');

export default {
  wrapper: {

  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent',

  },
  view:{
    backgroundColor: 'yellow',
    height,

  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    height: 120,
  },
  thumbnail:{
    width: 110,
    height: 90,
    marginBottom: 10,
  },
  text:{
    fontSize: 14,
  },
  paginationStyle:{
    bottom: 70,
    width,
    backgroundColor: 'lightgray',
    height: 90,
  }
};
