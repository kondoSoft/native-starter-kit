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
    width: 50,
    height: 50,
    position: 'relative',
    bottom: 5,
    right: 5,
    // marginBottom: 10,
  },
  leftHeader:{
    paddingLeft: 80,
    paddingBottom: 4,
  },
  cardText:{
    paddingTop: 0,
    borderBottomWidth: 2,
  },
  bodyText:{
    paddingTop: 0,
  },
  textDescription:{
    fontSize: 14,
  },
  paginationStyle:{
    bottom: 70,
    width,
    backgroundColor: 'lightgray',
    height: 90,
  },
  iconFav:{
    top: 4,
  },
  textIconFav:{
    fontSize: 10,
  },
};
