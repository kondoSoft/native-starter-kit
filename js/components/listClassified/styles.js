import { Platform, Dimensions } from 'react-native';
const React = require('react-native');

const { StyleSheet } = React;
const { width, height } = Dimensions.get('window');

export default {
  backgroundImage:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    opacity: 1,
  },
  wrapper: {
    flex: 1,
    width,
  },
  slide: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: 'blue',
    // backgroundColor: 'transparent',
    // height: 3000,
  },

  // row:{
  //   flex: 1,
  //   backgroundColor: 'yellow',
  //   flexDirection: 'row',
  //   // justifyContent: 'space-around',
  //   // alignItems: 'center',
  //   flexWrap: 'wrap',
  //   height: 100,
  // },
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
    // height: 90,
    // flexDirection: 'column',
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
  // paginationStyle:{
  //   flex: 1,
  //   bottom: 70,
  //   backgroundColor: 'lightgray',
  //   height: 90,
  // },
};
