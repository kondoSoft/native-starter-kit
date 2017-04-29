import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Image, TouchableOpacity, Dimensions } from 'react-native'
import { Container, Header, Content, Fab, Text,Thumbnail, Button, Icon, Item, Input, Left, Right, Body, H3, View } from 'native-base';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import { Grid, Row, Col } from 'react-native-easy-grid';
import markerMerida from '../../../assets/img/marker-merida.png';

const {
  reset,
  popRoute,
} = actions;

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 20.986035;
const LONGITUDE = -89.619899;
const LATITUDE_DELTA = 0.0053;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id=0;

class SingleMap extends Component {

  constructor(props) {
    super(props);
       this.state = {
         region: {
           latitude: props.listEstablishment[id].coor.latitude,
           longitude: props.listEstablishment[id].coor.longitude,
           latitudeDelta: LATITUDE_DELTA,
           longitudeDelta: LONGITUDE_DELTA,
          },
          active: false,
         }
   }

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    listEstablishment: React.PropTypes.arrayOf(React.PropTypes.object),
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
    const activeFab = this.state.active
    const { props: { name, index, listEstablishment } } = this;
    return (
      <Container >
        <Header searchBar style={{ backgroundColor: '#ffa726' }}>
          <Left>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon style={{ color: 'dimgray' }} name="arrow-round-back" />
            </Button>
          </Left>
          <Right style={styles.headerRight}>
            <Button transparent >
              <Icon style={styles.fontIconHeart} name="heart" />
            </Button>
            <Button style={{ marginRight: -8 }} transparent onPress={this.props.openDrawer}>
              <Icon style={{ color: 'dimgray' }} name="md-more" />
            </Button>
          </Right>
        </Header>
        <Grid>
          <Row>
            <View style={styles.container}>
              <MapView
                provider={this.props.provider}
                style={styles.map}
                initialRegion={this.props.listEstablishment[id].coor}
              >

                  <MapView.Marker
                    title={this.props.listEstablishment[id].name}
                    key={this.props.listEstablishment[id].id}
                    coordinate={this.props.listEstablishment[id].coor}
                    image={markerMerida}
                  />

              </MapView>
            </View>
          </Row>
        </Grid>
        <Content scrollEnabled={false}>
          <Grid style={styles.gridDescription}>
            <Row style={styles.rowDescription}>
              <H3>{this.props.listEstablishment[id].name}</H3>
            </Row>
            <Row style={styles.rowMain}>
              <Icon style={styles.iconGray} name="md-pin" />
              <Text style={styles.textRow}>{this.props.listEstablishment[id].address}</Text>
            </Row>
            <Row style={styles.rowDescription}>
              <Col style={styles.colDescription}>
                <Icon style={styles.iconGray} name="md-call" />
                <Text style={styles.textRow}>{this.props.listEstablishment[id].phone}</Text>
              </Col>
            </Row>
            <Row>
              <Right>
                { activeFab ? (
                  <Text style={styles.fontFooter}>Estoy en: "{this.props.listEstablishment[id].name}" a traves de Que Hacer? Merida</Text>
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
SingleMap.propTypes = {
  provider: MapView.ProviderPropType,
};

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
  index: state.listEstablishment.selectedEstablishment,
  listEstablishment: state.listEstablishment.results,
});


export default connect(mapStateToProps, bindAction)(SingleMap);
