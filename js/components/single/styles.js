import { Dimensions } from 'react-native';
const React = require('react-native');

const { StyleSheet } = React;
const { width, height } = Dimensions.get('window');

export default {
  swiper:{
    flex: 1,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    height: 285,
  },
  image:{
    flex: 1,
    width,
    resizeMode: 'cover',
    height: 300,
  },

  gridCircle:{
    flex: 1,
    alignItems: 'center',
    maxHeight: 50
  },
  contentDescription:{
    flex: 3,
    padding: 0,
  },

  fontIconHeart:{
    fontSize: 24,
    color: 'dimgray',
  },
  headerRight:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonMaps:{
    justifyContent: 'center',
    bottom: 25,
  },
  gridSwiper:{
    shadowColor: 'dimgray',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 1,
    shadowRadius: 1,
    maxHeight: 285,
    width: 430,
  },

  gridDescription:{

    padding: 15,
  },
  colDescription:{
    flexDirection: 'row',
  },
  rowDescription:{
    borderBottomWidth: 2,
    borderBottomColor: 'darkgray',
    marginTop: 5,
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
    marginRight: 2,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 2,
    color: 'dodgerblue',
  },
  fontFooter:{
    fontSize: 10,
    color: 'gray',
    marginLeft: 20,
    marginRight: 20,
    paddingRight: 50,
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
  buttonSocial:{
    padding: 0,

  },

};
