import { Dimensions, Platform } from 'react-native';
const React = require('react-native');

const { StyleSheet } = React;
const { width, height } = Dimensions.get('window');

export default {
  container:{
    // backgroundColor: 'blue',
    ...Platform.select({
      android: {
        maxHeight: height,
      },
      ios: {
        maxHeight: null,
      },
    })
  },
  content: {
    padding: 0,
    flex: 1,
    // backgroundColor: 'yellow',
  },
  imagePub:{
    flex: 1,
  },
};
