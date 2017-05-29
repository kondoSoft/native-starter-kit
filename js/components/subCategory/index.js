import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Dimensions } from 'react-native'
import { Container, Header, Title, Thumbnail, Content, Text, Button, Icon, Item, Input, Left, Right, Body, Footer } from 'native-base';
import ListSubCategory from '../listSubCategory'
import { openDrawer } from '../../actions/drawer';
import { setZone } from '../../actions/listZone';

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
    selectedCategory: React.PropTypes.number,
    index: React.PropTypes.number,
    listTypeClassifieds: React.PropTypes.arrayOf(React.PropTypes.object),
    list: React.PropTypes.arrayOf(React.PropTypes.object),
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  getRandomIndex(){
    const advertising = this.props.advertising
    randomIndex = Math.floor(Math.random()*advertising.length)
    return randomIndex
  }
  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {
    var randomIndex = this.getRandomIndex()
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
            {(this.props.listCategory[this.props.selectedCategory])== undefined ? <Title></Title> : <Title>{this.props.listCategory[this.props.selectedCategory].name}</Title>}
          </Body>
          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon style={{color: 'dimgray'}} name="md-more" />
            </Button>
          </Right>
        </Header>
        <Grid style={{ maxHeight: 62, flex: 1 }}>
            <Row>
              <Thumbnail style={styles.imagePub} square source={{ uri: this.props.advertising[randomIndex].image}} />
            </Row>
        </Grid>
        <Content padder scrollEnabled={true} style={styles.content}>
          <ListSubCategory/>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  advertising: state.list.advertising,
  listCategory: state.listZone.selectedPKCategory,
  name: state.user.name,
  index: state.list.selectedIndex,
  selectedCategory: state.listCategory.selectedCategory,


});


export default connect(mapStateToProps, bindAction)(SubCategory);
