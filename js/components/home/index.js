
import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, Thumbnail, Header, Title, Text, Button, Item, Icon, Input, Left, Body, Right } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';
import styles from './styles';

const {
  reset,
  pushRoute,

} = actions;

class Home extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    setIndex: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  pushRoute(route, index) {
    this.props.setIndex(index);
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar style={styles.header}>
          <Item style={styles.item}>
            <Icon name="search" />
            <Input placeholder="A dónde quieres ir?" style={styles.itemInput}/>
          </Item>
          <Right style={{ flex: 1 }}>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon active name="menu" />
            </Button>
          </Right>
        </Header>
        <Content >
          <Grid style={styles.mt}>
            {this.props.list.map((item, i) =>
              <Col key={i} style={{ height: 200, alignItems: 'center', flexDirection: 'row',}}>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => this.pushRoute('blankPage', i)}
                >
                  {console.log(this.props)}
                  <Image square source={require('../../../images/city.jpg')} style={{width: 120, height: 120}}/>
                  <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
              </Col>
            )}
          </Grid>
          <Grid>
            <Col style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 10}}>
              <Button light >
                <Text>Anunciate Aqui!</Text>
              </Button>
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Home);
