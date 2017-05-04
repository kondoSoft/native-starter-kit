import { Dimensions } from 'react-native';
const React = require('react-native');

const { StyleSheet } = React;
const { width, height } = Dimensions.get('window');

export default {
  content: {
    padding: 0,
    backgroundColor: 'white',
  },
  imagePub:{
    flex: 1,
  },
};
