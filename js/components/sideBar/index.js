
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem, Icon, Thumbnail, View } from 'native-base';

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
  }

  render() {
    return (
      <Content style={styles.sidebar} >
          <View style={styles.view} >
            <Thumbnail square style={styles.image} source={require('../../../assets/img/Menu-Imagen.png')} />
          </View>
          <ListItem style={styles.listItem} button onPress={() => this.navigateTo('home')} >
            <Icon style={styles.icon} name="ios-home"/>
            <Text style={styles.text}>INICIO</Text>
          </ListItem>
          <ListItem style={styles.listItem} button onPress={() => this.navigateTo('contactus')} >
            <Icon style={styles.icon} name="ios-mail"/>
            <Text style={styles.text}>CONTACTANOS</Text>
          </ListItem>
          <ListItem style={styles.listItem} button onPress={() => this.navigateTo('establishments')} >
            <Icon style={styles.icon} name="ios-heart"/>
            <Text style={styles.text}>FAVORITOS</Text>
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
