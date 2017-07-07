import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Image, TouchableOpacity, Dimensions, Linking, Platform } from 'react-native'
import { Container, Header, Content, Fab, Text,Thumbnail, Button, Icon, Item, Input, Left, Right, Body, H3, View } from 'native-base';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import { Grid, Row, Col } from 'react-native-easy-grid';
import markerMerida from '../../../assets/img/marker-merida.png';
import ActionButton from 'react-native-action-button';
import { setLoading } from '../../actions/listZone'
import Spinner from 'react-native-loading-spinner-overlay';

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

class SingleMap extends Component {

  constructor(props) {
    super(props);
       this.state = {
         region: {
           latitude: '',
           longitude: '',
           latitudeDelta: LATITUDE_DELTA,
           longitudeDelta: LONGITUDE_DELTA,
          },
          active: false,
          establishment:{

          },
        }
      this.handleMaps = this.handleMaps.bind(this)
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
  componentWillMount(){
    this.getEstablishment()
  }
  componentDidMount(){
    setTimeout(()=>{
      this.props.setLoading()
    }, 3000)
  }
  getEstablishment(){

    this.props.listEstablishment.map((item, i)=>{
      if (item.id == this.props.index) {
        this.setState({
          establishment: item,
          region:{
            latitude: item.coor.latitude,
            longitude: item.coor.longitude
          },
        })
      }
    })

  }
  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  handleMaps(id){

    var lat = this.state.establishment.coor.latitude
    var long = this.state.establishment.coor.longitude
    if(Platform.OS === 'ios'){
      var url = 'http://maps.apple.com/maps?daddr=' + lat + ',' + long
    }else{
      var url = 'http://maps.google.com/maps?daddr=' + lat + ',' + long
    }

    Linking.openURL(url);
  }
  goToURL(url){
    Linking.canOpenURL(url).then(supported => {
      if(supported){
          Linking.openURL(url)
        }else{
          alert('Hay un error, por favor contactanos...')
        }
      });

  }
  render() {
    const id = this.props.index

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
          </Right>
        </Header>
        <Grid style={{ flex: 1,
          shadowColor: 'dimgray',
          shadowOffset: {width: 0, height: 7},
          shadowOpacity: 1,
          shadowRadius: 1,}}>
         <View style={styles.container}>
            <MapView
              provider={this.props.provider}
              style={styles.map}
              initialRegion={this.state.establishment.coor}
            >
              <MapView.Marker
                title={this.state.establishment.name}
                key={this.state.establishment.id}
                coordinate={this.state.establishment.coor}
                image={markerMerida}
                onPress={() => this.handleMaps(id)}
              />
            </MapView>
          </View>
        </Grid>
        {/* <Content scrollEnabled={false}> */}
        <Grid style={styles.gridDescription}>
          <View style={{ flex: 1}}>
            <Spinner visible={this.props.loading} textStyle={{color: '#FFF'}} />
          </View>
          <Row style={styles.rowDescription}>
            <H3>{this.state.establishment.name}</H3>
          </Row>
          <Row style={styles.rowMain}>
            <Icon style={styles.iconGray} name="md-pin" />
            <Text style={styles.textRow}>{this.state.establishment.address}</Text>
          </Row>
          <Row style={styles.rowDescription}>
            <Col style={styles.colDescription}>
              <Icon style={styles.iconGray} name="md-call" />
              <Text style={styles.textRow}>{this.state.establishment.phone}</Text>
            </Col>
          </Row>
          <Row>
            <Right>
              { activeFab ? (
                <Text style={styles.fontFooter}>Estoy en: "{this.state.establishment.name}" a traves de Que Hacer? Merida</Text>
              ):(
                <Text></Text>
              )}
            </Right>
          </Row>
        </Grid>
        {/* </Content> */}
        {this.state.establishment.web ? (
          <ActionButton
            active={this.state.active}
            onPress={() => this.setState({ active: !this.state.active })}
            buttonColor='#5067FF'
            icon={<Icon name="md-share"
            style={{ color: 'white'}}/>} >
            <ActionButton.Item
              buttonColor='#3B5998'
              // title='facebook'
              onPress={()=> this.goToURL(`https://www.facebook.com/sharer/sharer.php?u=${this.state.establishment.web}`)} >
              <Icon name="logo-facebook" style={styles.buttonF}/>
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor='#3B5998'
              // title='facebook'
              onPress={()=> this.goToURL(`https://twitter.com/intent/tweet?text=Estoy en ${this.state.establishment.name} ${this.state.establishment.web} a traves de QueHacerMerida`)} >
              <Icon name="logo-twitter" style={styles.buttonF}/>
            </ActionButton.Item>

          </ActionButton>
          ):(
            console.log("no hay web")
          )}
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
    setLoading: () => dispatch(setLoading())
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  name: state.user.name,
  index: state.listEstablishment.selectedEstablishment,
  listEstablishment: state.listEstablishment.results,
  loading: state.listZone.loading,
});


export default connect(mapStateToProps, bindAction)(SingleMap);
