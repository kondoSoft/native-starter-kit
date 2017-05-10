import { Dimensions } from 'react-native';
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
    backgroundColor: 'transparent',
    height,
  },

  row:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    height: 100,
  },
  touchableOpacity:{
    flex: 1,
    alignItems: 'center',

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
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 3,
    bottom: 2,
  },
  // paginationStyle:{
  //   flex: 1,
  //   bottom: 70,
  //   backgroundColor: 'lightgray',
  //   height: 90,
  // },
};
