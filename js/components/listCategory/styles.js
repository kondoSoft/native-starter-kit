import { Dimensions } from 'react-native';
const React = require('react-native');

const { StyleSheet } = React;
const { width, height } = Dimensions.get('window');

export default {
  wrapper: {
    flex: 1,

  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  view:{
    flex: 1,
    height,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    height: 95,
  },
  thumbnail:{
    width: 110,
    height: 90,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',

  },
  text:{
    fontSize: 14,
    color: 'white',
  },
  paginationStyle:{
    bottom: 70,
    width,
    backgroundColor: 'lightgray',
    height: 90,
  },
};
