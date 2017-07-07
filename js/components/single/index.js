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
import ActionButton from 'react-native-action-button';
const { width, height } = Dimensions.get('window');
import {add_bookmark, remove_bookmark} from '../../actions/bookmarks'
import { setLoading } from '../../actions/listZone'
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
           establishment: {

           },
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
    this.props.setLoading();
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
    this.getId()
  }
  componentDidMount(){
    setTimeout(()=>{
      this.props.setLoading()
    }, 1000)
  }

  handleClick(index){
    Linking.canOpenURL(this.state.establishment.web).then(supported => {
      if (supported) {
        Linking.openURL(this.state.establishment.web);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  };
  handleClickFace(index){
    Linking.canOpenURL(this.state.establishment.facebook).then(supported => {
      if (supported) {
        Linking.openURL(this.state.establishment.facebook);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  };
  handleClickInsta(index){
    Linking.canOpenURL(this.state.establishment.instagram).then(supported => {
      if (supported) {
        Linking.openURL(this.state.establishment.instagram);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  };
  goToURL(url){
    Linking.canOpenURL(url).then(supported => {
      if(supported){
          Linking.openURL(url)
        }else{
          alert('Hay un error, por favor contactanos...')
        }
      });

  }
  isBookmark(establismentItem, bookmarks){
    var res = bookmarks.filter((val)=>  val.id == establismentItem.id)

    if (res.length > 0){
      return <Icon style={styles.fontIcon} onPress={() => this.props.remove_bookmark(establismentItem.id)} name="md-heart" />
    }
    return <Icon style={styles.fontIcon} onPress={() => this.props.add_bookmark(establismentItem)} name="md-heart-outline" />
  }
  getId(){
    // console.log(this.props.index)
    let arrEstablishment = []
    this.props.listEstablishment.map((item, pos)=>{
      if (item.id == this.props.index) {
        this.setState({
          establishment: item
          })
        }
      })
  }
  render() {
    const activeFab = this.state.active;
    const { props: { name, index, list } } = this;

    let iconFace = null;
    if(this.state.establishment.facebook) {
      iconFace = <Button style={styles.buttonSocial} transparent onPress={() => this.handleClickFace(index)}>
        <Icon style={styles.iconFooter} name="logo-facebook"></Icon>
      </Button>
    }

    let iconInsta = null
    if(this.state.establishment.instagram){
      iconInsta = <Button style={styles.buttonSocial} transparent onPress={() => this.handleClickInsta(index)}>
        <Icon style={styles.iconFooter} name="logo-instagram"></Icon>
      </Button>
    }
    let iconWeb = null
    if(this.state.establishment.web){
      iconWeb = <Button style={styles.buttonSocial} transparent onPress={() => this.handleClick(index)}>
        <Icon style={styles.iconFooter} name="globe"></Icon>
      </Button>
    }

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
                {
                  this.isBookmark(this.state.establishment, this.props.bookmarks)
                }
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
          {this.state.establishment.image.map((item, i) =>
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
            <Button style={styles.buttonMaps} transparent onPress={() => this.pushRoute('singlemap', this.state.establishment.id)}>
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
            <H3>{this.state.establishment.name}</H3>
          </Row>
          <Row style={styles.rowDescription}>
            <Text style={styles.fontText}>{this.state.establishment.description}</Text>
          </Row>
          <Row style={styles.rowMain}>
            <Icon style={styles.iconGray} name="md-pin" />
            <Text style={styles.textRow}>{this.state.establishment.address}</Text>
          </Row>
          <Row style={styles.rowDescriptionData}>
            <Col style={styles.colDescription}>
              <Icon style={styles.iconGray} name="md-call" />
              <Text style={styles.textRow}>{this.state.establishment.phone}</Text>
            </Col>
            <Col style={styles.colDescription}>
              <Icon style={styles.iconGray} name="clock"/>
              <Text style={styles.textRow}>{this.state.establishment.horary}</Text>
            </Col>
          </Row>
          <Row style={styles.rowDescriptionSocial}>
            {iconFace}
            {iconInsta}
            {iconWeb}

          </Row>
          <Row>
            <Right>
              { activeFab ? (
                <Text style={styles.fontFooter}>Te encuentras en "{this.state.establishment.name}" a traves de Que Hacer? Merida</Text>
              ):(
                <Text></Text>
              )}
            </Right>
          </Row>
        </Grid>
      </Content>
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
    )
  }
}

function bindAction(dispatch) {
  return {
    setEstablishment: index => dispatch(setEstablishment(index)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    popRoute: key => dispatch(popRoute(key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
    add_bookmark: id => dispatch(add_bookmark(id)),
    remove_bookmark: id => dispatch(remove_bookmark(id)),
    setLoading: () => dispatch(setLoading())
  };
}

const mapStateToProps = state => ({
  selectedType: state.listTypeClassifieds.selectedType,
  navigation: state.cardNavigation,
  index: state.listEstablishment.selectedEstablishment,
  listEstablishment: state.listEstablishment.results,
  bookmarks:state.bookmarks.space
});


export default connect(mapStateToProps, bindAction)(Single);
