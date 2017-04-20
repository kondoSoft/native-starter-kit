import { Dimensions } from 'react-native';
const React = require('react-native');

const { StyleSheet } = React;
const { width, height } = Dimensions.get('window');

export default {
  content:{
    backgroundColor: '#fff',
  },
  header:{
    backgroundColor: '#ffa726',
    shadowColor: 'dimgray',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  gridDescription:{
    paddingTop: 25,
    padding: 60,
    paddingBottom: 30,
    alignItems: 'center',
  },
  textDescription:{
    textAlign: 'center',
    fontSize: 14,
    marginTop: 20,
  },
  iconGray:{
    color: 'darkgray',
  },
  form:{
    paddingLeft: 10,
    paddingRight: 20,
  },

  icon:{
    paddingRight: 0,
    left: 20,
    color: 'gray'
  },
  input:{
    left: 35,
    
  },
  button:{
    marginTop: 30,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 2,
    shadowRadius: 1.5,
  },
  textButton:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
};
