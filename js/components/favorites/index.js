
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Dimensions } from 'react-native'
import { Container, Card, CardItem, TouchableOpacity, Header, Title, Content, Text, Button, Icon, ListItem, Input, Left,Thumbnail, Right, Body, Footer } from 'native-base';
import Classified from '../classified'
import ListZone from '../listZone'
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { setEstablishment, fetchEstablishment } from '../../actions/listEstablishment';

const {
  reset,
  popRoute,
} = actions;


class Favorites extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    listEstablishment: React.PropTypes.arrayOf(React.PropTypes.object),
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
  }
  pushRoute(route, index) {
    this.props.setEstablishment(index);
    this.props.pushRoute({ key: route, index: 1}, this.props.navigation.key);
  }
  componentWillMount(){
    this.props.fetchEstablishment()
  }

  render() {
    const { props: { name, index, list } } = this;
    const { width, height } = Dimensions.get('window')
    return (
      <Container style={styles.container}>
        <Header searchBar style={{ backgroundColor: '#ffa726' }}>
          <Left>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon style={{color: 'dimgray'}} name="arrow-round-back" />
            </Button>
          </Left>
          <Body>
            <Title>FAVORITOS</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon style={{color: 'dimgray'}} name="md-more" />
            </Button>
          </Right>
        </Header>
        <Content padder scrollEnabled={false} style={{ height, paddingLeft: 5 }}>
          <ListItem>
            <Text>Establesimientos</Text>
            <Right>
               <Icon name="arrow-forward" />
             </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setEstablishment: index => dispatch(setEstablishment(index)),
    fetchEstablishment: index => dispatch(fetchEstablishment(index)),
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  name: state.user.name,
  index: state.list.selectedIndex,
  listEstablishment: state.listEstablishment.results,
  list: state.list.list,

});


export default connect(mapStateToProps, bindAction)(Favorites);
