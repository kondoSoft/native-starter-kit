
const React = require('react-native');

const { StyleSheet } = React;

export default {
  sidebar: {
    flex: 1,
    padding: 0,
    paddingTop: 30,
    backgroundColor: '#fff',
    // width: 300,
  },
  text:{
    marginLeft: 10,
  },
  view:{
    flex: 1,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    flex: 1,
    height: 200,
  },
  listItem:{
    borderBottomWidth: 1.5,
    width: 235,
    marginLeft: 35,
  },
  icon:{
    color: '#039BE5',
  },
};
