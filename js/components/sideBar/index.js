
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem, Icon } from 'native-base';

import { setIndex } from '../../actions/list';
import navigateTo from '../../actions/sideBarNav';
import myTheme from '../../themes/base-theme';

import styles from './style';

class SideBar extends Component {

  static propTypes = {
    setIndex: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
    // console.log(route)

  }

  render() {
    const i = this.props.navigation.index
    // console.log("este es navigation index: " + this.props.navigation.index)
    // console.log("este es key de la ruta:  " + this.props.navigation.routes[i].key);
    return (
      <Content style={styles.sidebar} >
          <ListItem button onPress={() => this.navigateTo('home')} >
            <Icon name="ios-home"/>
            <Text style={styles.text}>Inicio</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('contactus')} >
            <Icon name="ios-mail"/>
            <Text style={styles.text}>Contactanos</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('contactus')} >
            <Icon name="ios-heart"/>
            <Text style={styles.text}>Favoritos</Text>
          </ListItem>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(SideBar);
