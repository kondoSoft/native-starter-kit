import { Dimensions } from 'react-native';
const React = require('react-native');

const { StyleSheet } = React;
const { width, height } = Dimensions.get('window');

export default {
  wrapper: {
    height,
    padding: 0,
    margin: 0,
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  view:{
    height: 100,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    height: 100,
  },
  textName:{
    color: '#FFF',
    // shadowColor: '#000000',
    // shadowOpacity: 1,
    // shadowRadius: 2,
    // shadowOffset: {width: 0, height: 0},
    fontSize: 14
  },
  imageZone:{
    width: 150,
    height: 70,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  colImage:{
    width: 150,
    height: 75,
    // shadowColor: 'dimgray',
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 1,
    // shadowRadius: 1,
  },
};
