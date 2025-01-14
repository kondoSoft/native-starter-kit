import { Platform, Dimensions } from 'react-native';
const React = require('react-native');

const { StyleSheet } = React;
const { width, height } = Dimensions.get('window');
export default {
  containerSwiper: {

  },
  slide: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  col:{
    width: 100,
    height: 100,
    shadowColor: 'dimgray',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  thumbnail:{
    flex: 1,
    width: 100,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  touchableOpacity:{
    flex: 1,
    // width: 100,
    alignItems: 'center',
    // flexDirection: 'row',

  },

  text:{
    fontSize: 12,
    color: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 1,
    bottom: 2,
  },
  paginationStyle:{
    flex: 1,
    bottom: 70,
    backgroundColor: 'lightgray',
    height: 90,
  },

};
