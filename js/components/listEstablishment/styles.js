import { Dimensions } from 'react-native';
const React = require('react-native');

const { StyleSheet } = React;
const { width, height } = Dimensions.get('window');

export default {
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
    },
  content:{
    maxHeight: 85,
    width: 370,
  },
  paginationStyle:{
    bottom: 90,
    width,
  },
  card:{
    borderWidth: 0,
    shadowColor: 'transparent',
    paddingBottom: 0,
  },

  thumbnail:{
    width: 55,
    height: 55,
    position: 'relative',
    bottom: 25,
    right: 5,
    // marginBottom: 10,
  },
  header:{
    paddingLeft: 75,
    paddingBottom: 7,
    paddingTop: 10,
    backgroundColor: 'transparent',

  },
  cardText:{
    paddingTop: 0,
    borderBottomWidth: 2,
    paddingBottom: 0,
    bottom: 6,
  },
  bodyText:{
    paddingTop: 0,
    backgroundColor: 'transparent',
    paddingBottom: 0,
  },
  textDescription:{
    fontSize: 10,
    right: 10,
    width: 200,

  },
  iconFav:{
    top: 0,
    left: 0,
  },
  textIconFav:{
    fontSize: 8,
  },
  paginationStyle:{
    bottom: 70,
    width,
    backgroundColor: '#fff',
    height: 80,
  }
};
