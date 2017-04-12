import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Dimensions } from 'react-native'
import { Container, Header, Title, Thumbnail, Content, Text, Button, Icon, Item, Input, Left, Right, Body, Footer } from 'native-base';
import ListCategory from '../listCategory'
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import { Grid, Row, Col } from 'react-native-easy-grid';
const {
  reset,
  popRoute,
} = actions;


class Classified extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    listCategory: React.PropTypes.arrayOf(React.PropTypes.object),
    index: React.PropTypes.number,
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
    const { props: { name, index, listCategory } } = this;
    return (
      <Container style={styles.container}>
        <Header searchBar style={{ backgroundColor: '#ffa726' }}>
          <Left>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon name="arrow-round-back" />
            </Button>
          </Left>
          <Body>
            <Title></Title>
          </Body>

          <Right>

            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="md-more" />
            </Button>
          </Right>
        </Header>
        <Grid style={{ maxHeight: 60 }}>
          <Row style={{height: 60}}>
            <Thumbnail style={styles.imagePub} square source={{uri: 'https://placeholdit.imgix.net/~text?txtsize=13&txt=350%C3%9750&w=350&h=50'}} />
          </Row>
        </Grid>
        <Content padder scrollEnabled={false} style={styles.content}>
          <ListCategory />
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
  listCategory: state.listCategory.results,
});


export default connect(mapStateToProps, bindAction)(Classified);
