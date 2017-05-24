import { Dimensions } from 'react-native';

import { Platform, StyleSheet, React } from 'react-native';

const { width, height } = Dimensions.get('window');



export default {
  wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android: {
        maxHeight: 300,
      },
    }),

    // maxHeight: (Platform.OS === 'ios') ? 285 : 300,
  },
  swiper:{
    flex: 1,
  },
  image:{
    flex: 1,
    ...Platform.select({
      android: {
        top: 0,
      },
    }),
    // bottom: 25,
    width,
    // resizeMode: 'cover',
    // height: (Platform.OS === 'ios') ? 180 : 299, //alto de imagen
  },
  gridCircle:{
    flex: 1,
    alignItems: 'center',
    maxHeight: (Platform.OS === 'ios') ? 25 : 70,
  },
  thumbnailMaps:{
    // flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center' ,
    ...Platform.select({
      android: {
        bottom: 5,
    },
    // bottom: 10,
  }),
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
    top: (Platform.OS === 'ios') ? 0 : 0,
    bottom: (Platform.OS === 'ios') ? 0 : 30,
    height: (Platform.OS === 'ios') ? 0 : 70,
    paddingTop: (Platform.OS === 'andoird') ? 0 : 0,
  },
  gridDescription:{
    flex: 1,
    padding: 15,
  },
  colDescription:{
    flex: 1,
    flexDirection: 'row',
  },
  rowDescriptionData:{
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: 'darkgray',
    marginTop: 5,
  },
  rowDescription:{
    flex: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'darkgray',
    marginTop: 5,
  },
  rowMain:{
    paddingTop: 10,
    maxWidth: 270,
  },
  fontText:{
    fontSize: 12,
    paddingBottom: 7,
    color: 'dimgray',
  },
  textRow:{
    marginTop: 2,
    marginLeft: 5,
    fontSize: 12,
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
    marginTop: 4,
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
  rowDescriptionSocial:{
    flex:1,
    borderBottomWidth: 2,
    borderBottomColor: 'darkgray',
    margin: 0,
    padding: 0,
    paddingBottom: 10,
  },

};
