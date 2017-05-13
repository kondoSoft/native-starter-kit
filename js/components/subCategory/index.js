import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Dimensions } from 'react-native'
import { Container, Header, Title, Thumbnail, Content, Text, Button, Icon, Item, Input, Left, Right, Body, Footer } from 'native-base';
import ListSubCategory from '../listSubCategory'
import { openDrawer } from '../../actions/drawer';
import { setZone } from '../../actions/listZone';
import { resetState } from '../../actions/list';

import styles from './style';
import { Grid, Row, Col } from 'react-native-easy-grid';
const {
  reset,
  popRoute,
} = actions;


class SubCategory extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    setZone: React.PropTypes.func,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.object),
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
    this.props.resetState()
  }

  render() {

    const { props: { name, index } } = this;
    return (
      <Container style={styles.container}>
        <Header searchBar style={{ backgroundColor: '#ffa726' }}>
          <Left>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon style={{color: 'dimgray'}} name="arrow-round-back" />
            </Button>
          </Left>
          <Body>
            <Title></Title>
          </Body>
          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon style={{color: 'dimgray'}} name="md-more" />
            </Button>
          </Right>
        </Header>
        <Grid style={{ maxHeight: 60 }}>
          <Row style={{height: 60}}>
            <Thumbnail style={styles.imagePub} square source={require('../../../assets/img/Publicidad/publicidad3.png')} />
          </Row>
        </Grid>
        <Content padder scrollEnabled={false} style={styles.content}>
          <ListSubCategory/>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    resetState: () => dispatch(resetState()),
    popRoute: key => dispatch(popRoute(key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  name: state.user.name,
  index: state.list.selectedIndex,

});


export default connect(mapStateToProps, bindAction)(SubCategory);
