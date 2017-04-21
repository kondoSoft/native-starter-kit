import { Dimensions } from 'react-native';

const React = require('react-native');
const { width, height } = Dimensions.get('window');

const { StyleSheet } = React;
export default {
  backgroundImage:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    opacity: 1,

  },
  container: {
    backgroundColor: '#FBFAFA',
  },
  header: {
    backgroundColor: '#ffa726',
  },
  item:{
    backgroundColor: 'white',
    flex: 3,

  },
  cardItem:{
    shadowColor: 'dimgray',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 0.8,
  },
  itemInput:{
    fontSize: 12,
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
  mt: {
    marginTop: 22,
  },
  imagePub:{
    flex: 1,
    height: 60,
  },
  videoRow:{
    flexDirection: 'column',
    height: 170,
    width: 240,
    borderWidth: 0.3,
    borderColor: '#A0A0A0',
    borderRadius: 1,
    backgroundColor: '#fff'
  },
  videoGrid:{
    alignItems: 'center',
    marginTop: 17,
    shadowColor: 'dimgray',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 0.8,

  }
};
