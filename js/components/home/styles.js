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
  contentHome:{
    flex: 1,
    height,
    paddingTop: 0,
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
    shadowOpacity: 1,
    shadowRadius: 1,
    justifyContent: 'center',
    flex: 1,
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
    flex: 1,
  },
  imagePub:{
    flex: 1,
  },
  videoRow:{
    flexDirection: 'column',
    height: 160,
    width: 240,
    borderWidth: 0.3,
    borderColor: '#A0A0A0',
    borderRadius: 1,
    backgroundColor: '#fff'
  },
  videoGrid:{
    shadowColor: 'dimgray',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,

  },
  webView:{
    margin: 7,
    flex: 1
  },
  thumbnailHome:{
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
    height: 125,
    width: 145,
  },
  textAnun:{
    textAlign: 'center',
    color: 'black',

  },
  rowAnun:{
  flex: 1,
  justifyContent: 'center',

  },

};
