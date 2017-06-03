import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Dimensions } from 'react-native'
import { Container, Header, Title, Content, Text, Button, Icon, Item, Input, Left, Right, Body, Footer } from 'native-base';
import ListItems from '../listItems'
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import {add_bookmark, remove_bookmark} from '../../actions/bookmarks'

const {
  reset,
  popRoute,
} = actions;

class Bookmarks extends Component {
  static propTypes = {
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

  render() {

    const { props: { name, index, list } } = this;
    const { width, height } = Dimensions.get('window')

    return (
      <Container style={styles.container}>
        <Header searchBar style={{ backgroundColor: '#ffa726' }}>
          <Left>
            <Button transparent onPress={() => this.props.reset(this.props.navigation.key)}>
              <Icon style={{ color: 'dimgray' }} name="md-close" />
            </Button>
          </Left>
          <Body>
            {/* <Title>{list[index]}</Title> */}
            <Title>Favoritos</Title>
          </Body>

          <Right>

            <Button transparent onPress={this.props.openDrawer}>
              <Icon style={{color: 'dimgray'}} name="md-more" />
            </Button>
          </Right>
        </Header>
        <Content scrollEnabled={true} style={styles.content}>
          <ListItems source={this.props.bookmarks} add_bookmark={this.props.add_bookmark} remove_bookmark={this.props.remove_bookmark}/>

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
    add_bookmark: () => dispatch(add_bookmark()),
    remove_bookmark: id => dispatch(remove_bookmark(id))
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  name: state.user.name,
  index: state.list.selectedIndex,
  listEstablishment: state.listEstablishment.results,
  listTypeClassifieds: state.listTypeClassifieds.results,
  selectedType: state.listTypeClassifieds.selectedType,
  bookmarks:state.bookmarks.space

});


export default connect(mapStateToProps, bindAction)(Bookmarks);
