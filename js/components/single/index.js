import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Image } from 'react-native'
import { Container, Header, Content, Fab, Text,Thumbnail, Button, Icon, Item, Input, Left, Right, Body, H3, View } from 'native-base';
import { setEstablishment } from '../../actions/listEstablishment';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import { Grid, Row, Col } from 'react-native-easy-grid';
const {
  reset,
  popRoute,
  pushRoute,
} = actions;

class Single extends Component {

  constructor() {
    super();
       this.state = {
           active: false
       };
   }
  static propTypes = {
    setEstablishment: React.PropTypes.func,
    listEstablishment: React.PropTypes.arrayOf(React.PropTypes.object),
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  pushRoute(route, index) {
    this.props.setEstablishment(index);
    this.props.pushRoute({ key: route, index: 1}, this.props.navigation.key);
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {
    const activeFab = this.state.active;
    const { props: { name, index, list } } = this;
    return (
      <Container key={index}>
        <Header style={styles.header}>
          <Image
            style={styles.image}
            source={require('../../../assets/img/Negocios/lugar.png')}
          >
            <Body style={styles.body}>
              <Left>
                <Button transparent onPress={() => this.popRoute()}>
                  <Icon style={{ color: '#fff' }} name="arrow-round-back" />
                </Button>
              </Left>
              <Right style={styles.headerRight}>
                <Button transparent >
                  <Icon style={styles.fontIconHeart} name="heart" />
                </Button>
                <Button style={{ marginRight: -8 }} transparent onPress={this.props.openDrawer}>
                  <Icon style={{ color: '#fff' }} name="md-more" />
                </Button>
              </Right>

            </Body>

          </Image>
        </Header>
        <Grid  style={{ alignItems: 'center', maxHeight: 50 }}>
          <Row style={{ height: 50 }}>
            <Button style={styles.buttonMaps} transparent onPress={() => this.pushRoute('singlemap', index)}>
              <Thumbnail style={{ backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
                <Icon style={{ fontSize: 22, color: 'dimgray', bottom: 4}} name="md-pin" />
                <Text style={{ fontSize: 12, color: 'dimgray', bottom: 6 }}>Mapa</Text>
              </Thumbnail>
            </Button>
          </Row>
        </Grid>
        <Content scrollEnabled={false}>
          <Grid style={styles.gridDescription}>
            <Row>
              <H3>{this.props.listEstablishment[index].name}</H3>
            </Row>
            <Row style={styles.rowDescription}>
              <Text style={styles.fontText}>{this.props.listEstablishment[index].description}</Text>
            </Row>
            <Row style={styles.rowMain}>
              <Icon style={styles.iconGray} name="md-pin" />
              <Text style={styles.textRow}>{this.props.listEstablishment[index].address}</Text>
            </Row>
            <Row style={styles.rowDescription}>
              <Col style={styles.colDescription}>
                <Icon style={styles.iconGray} name="md-call" />
                <Text style={styles.textRow}>{this.props.listEstablishment[index].phone}</Text>
              </Col>
              <Col style={styles.colDescription}>
                <Icon style={styles.iconGray} name="clock"/>
                <Text style={styles.textRow}>{this.props.listEstablishment[index].horary}</Text>
              </Col>
            </Row>
            <Row style={styles.rowDescription}>
              {/* <Button> */}
                <Icon style={styles.iconFooter} name="logo-facebook"></Icon>
              {/* </Button> */}
              <Icon style={styles.iconFooter} name="logo-instagram"></Icon>
              <Icon style={styles.iconFooter} name="logo-whatsapp"></Icon>
              <Icon style={styles.iconFooter} name="globe"></Icon>
            </Row>
            <Row>

              <Right>

                { activeFab ? (
                  <Text style={styles.fontFooter}>Te encuentras en "{this.props.listEstablishment[index].name}" a traves de Que Hacer? Merida</Text>
                ):(
                  <Text></Text>
                )}
              </Right>

            </Row>
          </Grid>
        </Content>
        <Fab
              active={this.state.active}
              direction="up"
              style={styles.fab}
              position="bottomRight"
              onPress={() => this.setState({ active: !this.state.active })}
          >
              <Icon name="md-share" />
              <Button style={styles.buttonW}>
                  <Icon name="logo-whatsapp" />
              </Button>
              <Button style={styles.buttonF}>
                  <Icon name="logo-facebook" />
              </Button>
              <Button style={styles.buttonM}>
                  <Icon name="mail" />
              </Button>
          </Fab>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setEstablishment: index => dispatch(setEstablishment(index)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    popRoute: key => dispatch(popRoute(key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  name: state.user.name,
  index: state.listEstablishment.selectedEstablishment,
  listEstablishment: state.listEstablishment.results,
});


export default connect(mapStateToProps, bindAction)(Single);
