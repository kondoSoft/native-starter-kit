
import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, Card, CardItem, Thumbnail, Header, Title, Text, Button, Item, Icon, Input, Left, Body, Right } from 'native-base';
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
    list: React.PropTypes.arrayOf(React.PropTypes.object),
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
    const list = Object.keys(this.props.list)
    console.log(this.props.list[0].image);
    return (
      <Container style={styles.container}>
        <Header searchBar style={styles.header}>
          <Item style={styles.item}>
            <Icon name="search" />
            <Input placeholder="A dónde quieres ir?" style={styles.itemInput}/>
          </Item>
          <Right style={{ flex: 1 }}>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="md-more" />
            </Button>
          </Right>
        </Header>
        <Content padder scrollEnabled={false} >
          <Grid>
            <Row style={{padding: 10, backgroundColor: 'yellow', height: 50 }}>
              <Text>Publicidad</Text>
            </Row>
            <Row style={{padding: 10, backgroundColor: 'red', height: 200 }}>
              <Text>Video</Text>
            </Row>
          </Grid>
          <Grid style={styles.mt}>
            {this.props.list.map((item, i) =>


            <Card key={i}>
              <TouchableOpacity
                onPress={() => this.pushRoute('blankPage', i)}
              >
              <CardItem bordered>
                <Body>
                  <Thumbnail square source={{ uri: "../../../../assets/img/" + this.props.list[i].image }} style={{width: 145, height: 125}} />

                  {/* <Thumbnail square source={require('../../../assets/img/catzone.png')} style={{width: 145, height: 125}} /> */}
                  <Text style={styles.text}>{this.props.list[i].name}</Text>
                </Body>
              </CardItem>
              </TouchableOpacity>
            </Card>
            )}
          </Grid>
          <Grid>
            <Row style={{ justifyContent: 'center' }}>
              <Button style={{ width: 300, justifyContent: 'center' , backgroundColor: 'orange' }} >
                <Text style={{ textAlign: 'center', color: 'black' }} >ANUNCIATE AQUI</Text>
              </Button>
            </Row>
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
