import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Dimensions } from 'react-native'
import { Container, Header, Title, Content, Text, Button, Icon, Item, Input, Left, Right, Body, Footer } from 'native-base';
import ListEstablishment from '../listEstablishment'
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const {
  reset,
  popRoute,
} = actions;

class Establishments extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
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
            <Button transparent onPress={() => this.popRoute()}>
              <Icon name="arrow-round-back" />
            </Button>
          </Left>
          <Body>
            {/* <Title>{list[index]}</Title> */}
            <Title>Lista</Title>
          </Body>

          <Right>

            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="md-more" />
            </Button>
          </Right>
        </Header>
        <Content padder scrollEnabled={false} style={styles.content}>
          <ListEstablishment/>
        </Content>
        {/* <Footer style={{backgroundColor: 'lightgray', height: 50}}/> */}

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
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list,
});


export default connect(mapStateToProps, bindAction)(Establishments);
