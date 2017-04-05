import { Dimensions } from 'react-native';
const React = require('react-native');

const { StyleSheet } = React;
const { width, height } = Dimensions.get('window');

export default {
  image:{
    flex: 1,
    height: 300,
    width,
    shadowColor: 'dimgray',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.8,
    shadowRadius: 0.8,
  },
  fontIconHeart:{
    fontSize: 24,
    color: 'dimgray',
  },
  buttonMaps:{
    justifyContent: 'center',
    bottom: 8,
  },
  gridDescription:{
    padding: 15,
  },
  colDescription:{
    flexDirection: 'row',
    marginBottom: 10,

  },
  rowDescription:{
    borderBottomWidth: 2,
    borderBottomColor: 'darkgray',
    marginTop: 5,
    marginBottom: 5,
  },
  rowMain:{
    paddingTop: 10,
    maxWidth: 270,
  },
  fontText:{
    fontSize: 10,
    paddingBottom: 7,
    color: 'dimgray',
  },
  textRow:{
    marginTop: 2,
    marginLeft: 5,
    fontSize: 11,
    color: 'dimgray'
  },
  iconGray:{
    color: 'darkgray',
    fontSize: 18,
  },
  iconFooter:{
    marginRight: 13,
    marginTop: 5,
    marginBottom: 5,
    color: 'dodgerblue',
  },
  fontFooter:{
    fontSize: 10,
    color: 'gray',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
  },
  fab:{
    backgroundColor: '#5067FF',

  },
  buttonW:{
    backgroundColor: '#34A34F',

  },
  buttonF:{
    backgroundColor: '#3B5998',

  },
  buttonM:{
    backgroundColor: '#DD5144',

  },

};
