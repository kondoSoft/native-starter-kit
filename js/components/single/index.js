import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Image, Linking, Dimensions } from 'react-native'
import { Container, Header, Content, Fab, Text,Thumbnail, Button, Icon, Item, Input, Left, Right, Body, H3, View } from 'native-base';
import { setEstablishment } from '../../actions/listEstablishment';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import { Grid, Row, Col } from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
import { Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
const {
  reset,
  popRoute,
  pushRoute,
} = actions;


class Single extends Component {

  constructor() {
    super();
       this.state = {
           active: false,
           heightSwiper: '',
       };
    this.handleClick = this.handleClick.bind(this)
    this.handleClickInsta = this.handleClickInsta.bind(this)
    this.handleClickFace = this.handleClickFace.bind(this)

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
  componentWillMount(){
    if(Platform.OS === 'android'){
      this.setState({
        heightSwiper: 300,
        widthSwiper: 370,
      })
    }else{
      this.setState({
        heightSwiper: 200,
        widthSwiper: width,
      })
    }
  }

  handleClick(index){
    Linking.canOpenURL(this.props.listEstablishment[index].web).then(supported => {
      if (supported) {
        Linking.openURL(this.props.listEstablishment[index].web);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  };
  handleClickFace(index){
    Linking.canOpenURL(this.props.listEstablishment[index].web).then(supported => {
      if (supported) {
        Linking.openURL(this.props.listEstablishment[index].facebook);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  };
  handleClickInsta(index){
    Linking.canOpenURL(this.props.listEstablishment[index].web).then(supported => {
      if (supported) {
        Linking.openURL(this.props.listEstablishment[index].instagram);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  };
  render() {
    const activeFab = this.state.active;
    const { props: { name, index, list } } = this;
    // console.log(nativeEvent.layout.height);
    return (
      // <Container scrollEnabled={true}>
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
        <Swiper
          showsButtons
          height={this.state.heightSwiper}
          horizontal={true}
          showsPagination={false}
          scrollEnabled={true}
        >
          {this.props.listEstablishment[this.props.index].image.map((item, i) =>
           <View key={i} style={styles.slide1}>
             <Image
               key={index}
               style={styles.image}
               source={{uri: item.image}}
               resizeMode='stretch'
               >
               </Image>
             </View>
           )}
        </Swiper>
        <Grid  style={styles.gridCircle}>
          <Row>
            <Button style={styles.buttonMaps} transparent onPress={() => this.pushRoute('singlemap', index)}>
              <Thumbnail source={{ uri: 'https://placeholdit.imgix.net/~text?txtsize=14&txt=145%C3%97125&w=145&h='}} style={styles.thumbnailMaps}>
                <Icon style={{ fontSize: 22, color: 'dimgray', bottom: 4}} name="md-pin" />
                <Text style={{ fontSize: 12, color: 'dimgray', bottom: 6 }}>Mapa</Text>
              </Thumbnail>
            </Button>
          </Row>
        </Grid>
        <Content scrollEnabled={true}>

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
          <Row style={styles.rowDescriptionData}>
            <Col style={styles.colDescription}>
              <Icon style={styles.iconGray} name="md-call" />
              <Text style={styles.textRow}>{this.props.listEstablishment[index].phone}</Text>
            </Col>
            <Col style={styles.colDescription}>
              <Icon style={styles.iconGray} name="clock"/>
              <Text style={styles.textRow}>{this.props.listEstablishment[index].horary}</Text>
            </Col>
          </Row>
          <Row style={styles.rowDescriptionSocial}>
            <Button style={styles.buttonSocial} transparent onPress={() => this.handleClickFace(index)}>
              <Icon style={styles.iconFooter} name="logo-facebook"></Icon>
            </Button>
            <Button style={styles.buttonSocial} transparent onPress={() => this.handleClickInsta(index)}>
              <Icon style={styles.iconFooter} name="logo-instagram"></Icon>
            </Button>
            <Button style={styles.buttonSocial} transparent onPress={() => this.handleClick(index)}>
              <Icon style={styles.iconFooter} name="globe"></Icon>
            </Button>
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
              <Button style={styles.buttonF}>
                  <Icon name="logo-facebook" />
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
  index: state.listEstablishment.selectedEstablishment,
  listEstablishment: state.listEstablishment.results,
});


export default connect(mapStateToProps, bindAction)(Single);
