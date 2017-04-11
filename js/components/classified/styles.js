import { Dimensions } from 'react-native';
const React = require('react-native');

const { StyleSheet } = React;
const { width, height } = Dimensions.get('window');

export default {
  content: {
    paddingLeft: 5,
    backgroundColor: 'white',
  },
  imagePub:{
    flex: 1,
    height: 60,
  },
};
