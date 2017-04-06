import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Image, TouchableOpacity, Dimensions } from 'react-native'
import { Container, Header, Content, Fab, Text,Thumbnail, Button, Icon, Item, Input, Left, Right, Body, H3, View } from 'native-base';
import ListEstablishment from '../listEstablishment'
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
const LATITUDE_DELTA = 0.0043;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id=0;

class SingleMap extends Component {

  constructor(props) {
    super(props);
       this.state = {
         region: {
           latitude: LATITUDE,
           longitude: LONGITUDE,
           latitudeDelta: LATITUDE_DELTA,
           longitudeDelta: LONGITUDE_DELTA,
          },
          markers:[{
            title: 'Presidente Intercontinental',
            coordinate: {
              latitude: LATITUDE,
              longitude: LONGITUDE
            },
            key: id,
          }],
          active: false,
         }
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
                initialRegion={this.state.region}
              >
                {this.state.markers.map(marker => (
                  <MapView.Marker
                    title={marker.title}
                    key={marker.key}
                    coordinate={marker.coordinate}
                    image={markerMerida}
                  />
                ))}
              </MapView>
            </View>
          </Row>
        </Grid>

        <Grid style={{ alignItems: 'center', maxHeight: 50 }}>
          <Row style={{ height: 50 }}>
            <Button style={styles.buttonMaps} transparent>
              <Thumbnail style={{ backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
                <Icon style={{ fontSize: 22, color: 'dimgray', bottom: 4}} name="md-camera" />
                <Text style={{ fontSize: 12, color: 'dimgray', bottom: 6 }}>Galería</Text>
              </Thumbnail>
            </Button>
          </Row>
        </Grid>
        <Content scrollEnabled={false}>
          <Grid style={styles.gridDescription}>
            <Row style={styles.rowDescription}>
              <H3>Presidente Intercontinental Villa Mercedes Merida</H3>
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
            </Row>
            <Row>
              <Right>
                <Text style={styles.fontFooter}>Te encuentras en "Presidente Intercontinental Villa Mercedes Merida" a traves de Que Hacer? Merida</Text>
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
  index: state.list.selectedIndex,
  list: state.list.list,
});


export default connect(mapStateToProps, bindAction)(SingleMap);
