import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Image } from 'react-native'
import { Container, Header, Content, Fab, Text,Thumbnail, Button, Icon, Item, Input, Left, Right, Body, H3, View } from 'native-base';
import ListEstablishment from '../listEstablishment'
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import { Grid, Row, Col } from 'react-native-easy-grid';
const {
  reset,
  popRoute,
} = actions;

class Establishments extends Component {

  constructor() {
    super();
       this.state = {
           active: false
       };
   }
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

    return (
      <Container>
        <Header style={styles.header}>
          <Image
            style={styles.image}
            source={require('../../../images/zone.jpg')}
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
        <Grid style={{ alignItems: 'center', maxHeight: 50 }}>
          <Row style={{ height: 50 }}>
            <Button style={styles.buttonMaps} transparent>
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
              <H3>Presidente Intercontinental Villa Mercedes Merida</H3>
            </Row>
            <Row style={styles.rowDescription}>
              <Text style={styles.fontText}>El hotel esta a una corta distancia a pie del Centro de Convenciones
              Siglo XXI, del palacio del gobernador y de la catedral.</Text>
            </Row>
            <Row style={styles.rowMain}>
              <Icon style={styles.iconGray} name="md-pin" />
              <Text style={styles.textRow}>Av. Colon No. 500 Col. Centro, Merida, Yucatan, Mexico</Text>
            </Row>
            <Row style={styles.rowDescription}>
              <Col style={styles.colDescription}>
                <Icon style={styles.iconGray} name="md-call" />
                <Text style={styles.textRow}>01 800 502 0500</Text>
              </Col>
              <Col style={styles.colDescription}>
                <Icon style={styles.iconGray} name="clock"/>
                <Text style={styles.textRow}>7:00 AM - 11:00 PM</Text>
              </Col>
            </Row>
            <Row style={styles.rowDescription}>
              <Icon style={styles.iconFooter} name="logo-facebook"></Icon>
              <Icon style={styles.iconFooter} name="logo-instagram"></Icon>
              <Icon style={styles.iconFooter} name="logo-whatsapp"></Icon>
              <Icon style={styles.iconFooter} name="globe"></Icon>
            </Row>
            <Row>

              <Right>
                <Text style={styles.fontFooter}>Te encuentras en "Presidente Intercontinental Villa Mercedes Merida" a traves de Que Hace? Merida</Text>

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
