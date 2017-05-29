import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Dimensions } from 'react-native'
import { Container, Header, Title, Content, Text, Button, Icon, Item, Input, Left, Right, Body, Footer } from 'native-base';
import ListEstablishment from '../listEstablishment'
import {resetNameSearch} from '../../actions/listEstablishment'
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const {
  reset,
  popRoute,
} = actions;

class Establishments extends Component {
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
    this.props.resetNameSearch()
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
            {/* <Title>{list[index]}</Title> */}
{/* {this.props.listTypeClassifieds[this.props.selectedType].type_classifieds} */}
            {(this.props.nameSearch) == null ? <Title></Title>:<Title>{this.props.nameSearch}</Title>  }

          </Body>

          <Right>

            <Button transparent onPress={this.props.openDrawer}>
              <Icon style={{color: 'dimgray'}} name="md-more" />
            </Button>
          </Right>
        </Header>
        <Content scrollEnabled={true} style={styles.content}>
           <ListEstablishment/>

        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    resetNameSearch: () => dispatch(resetNameSearch()),
    popRoute: key => dispatch(popRoute(key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  name: state.user.name,
  index: state.list.selectedIndex,
  listTypeClassifieds: state.listTypeClassifieds.results,
  selectedType: state.listTypeClassifieds.selectedType,
  nameSearch: state.listEstablishment.name

});


export default connect(mapStateToProps, bindAction)(Establishments);
