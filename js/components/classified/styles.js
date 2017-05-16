import { Dimensions } from 'react-native';
const React = require('react-native');

const { StyleSheet } = React;
const { width, height } = Dimensions.get('window');

export default {
  content: {
    padding: 0,
    flex: 1,
    height: 3000,
  },
  imagePub:{
    flex: 1,
  },
};
