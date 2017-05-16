import { Dimensions } from 'react-native';
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
    fontSize: 13,
    top: 2,
  },
  thumbnail:{
    flex: 1,
    // width: 55,
    // height: 55,
    bottom: 14,
    right: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    // marginBottom: 10,
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
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'transparent',
    paddingBottom: 0,
    height: 55,
  },
  cardText:{
    flex: 1,
    flexDirection: 'row',
    padding: 0,
    // paddingTop: 0,
    borderBottomWidth: 2,
    borderColor: 'lightgray',
    // paddingBottom: 0,
    bottom: 5,
    paddingRight: 0,
    height: 40
  },
  textDescription:{
    flex: 1,
    fontSize: 10,
    lineHeight: 10,
    top: 3,
    maxHeight: 40,
    // paddingLeft: 0,
    // right: 15,
    // width: 230,
    // bottom: 5,
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
