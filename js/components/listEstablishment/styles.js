import { Platform, Dimensions } from 'react-native';
const React = require('react-native');

const { StyleSheet } = React;

export default {

  content:{
  },

  card:{
    flex: 1,
    borderWidth: 0,
    shadowColor: 'transparent',
    paddingBottom: 0,
    height: 85,
    flexDirection: 'column',
  },
  textHeader:{
    flex: 1,
    fontSize: (Platform.OS === 'ios') ? 13 : 14,
    top: 2,
  },
  thumbnail:{
    flex: 1,
    bottom:(Platform.OS === 'ios') ? 14 : 9,
    width: (Platform.OS === 'ios') ? 55 : 60,
    height: 55,
    // bottom: 14,
    right: 3,
    ...Platform.select({
      android: {
        maxHeight: 65,
      },
    }),
  },
  header:{
    flex: 1,
    paddingLeft: 75,
    paddingBottom: 0,
    paddingTop: 0,
    backgroundColor: 'transparent',
    maxHeight:30,
  },

  bodyText:{
    flex: (Platform.OS === 'ios') ? 1 : 3,
    paddingTop: 0,
    backgroundColor: 'transparent',
    paddingBottom: 0,
    ...Platform.select({
      android: {
        paddingLeft: 12,
      },
    }),
  },
  cardText:{
    flex: 1,
    flexDirection: 'row',
    padding: 0,
    borderBottomWidth: 2,
    borderColor: 'lightgray',
    bottom: (Platform.OS === 'ios') ? 3 : 5,
    paddingRight: 0,
  },
  textDescription:{
    flex: 1,
    fontSize: (Platform.OS === 'ios') ? 10 : 14,
    lineHeight:(Platform.OS === 'ios') ? 10 : 11,
    top: (Platform.OS === 'ios') ? 0 : 4,
    color: 'gray',
  },
  textIconFav:{
    fontSize: 11,
    // marginLeft: 2,
  },
  fontIcon: {
    fontSize: 15,
  },

  iconFav:{
    flex: 1,
  },

};
