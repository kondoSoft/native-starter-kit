
import React, { Component } from 'react';
import { Image } from 'react-native';

const launchscreen = require('../../../assets/img/splash.png');
// const launchscreen = require('../../../images/shadow.png');

export default class SplashPage extends Component {

  static propTypes = {
    navigator: React.PropTypes.shape({}),
  }

  componentWillMount() {
    const navigator = this.props.navigator;

    setTimeout(() => {
      navigator.replace({
        id: 'home',
      });
    }, 1500);
  }

  render() { // eslint-disable-line class-methods-use-this

    return (
      <Image source={{ uri: 'http://138.68.2.137:8080/media/hotel_4.png'}} style={{ flex: 1, height: null, width: null }} />
    );
  }
}
