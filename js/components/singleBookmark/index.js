import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Image, Linking, Dimensions } from 'react-native'
import { Container, Header, Content, Fab, Text,Thumbnail, Button, Icon, Item, Input, Left, Right, Body, H3, View } from 'native-base';
import { set_item } from '../../actions/bookmarks';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import { Grid, Row, Col } from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
import { Platform } from 'react-native';
import ActionButton from 'react-native-action-button';
const { width, height } = Dimensions.get('window');
import {add_bookmark, remove_bookmark} from '../../actions/bookmarks'
import { setLoading } from '../../actions/listZone'
import Spinner from 'react-native-loading-spinner-overlay';
const {
  reset,
  popRoute,
  pushRoute,
} = actions;


class SingleBookmark extends Component {

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
    // setEstablishment: React.PropTypes.func,
    // listEstablishment: React.PropTypes.arrayOf(React.PropTypes.object),
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  pushRoute(route, index) {
    this.props.set_item(index)
    this.props.setLoading()
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
  componentDidMount(){
    setTimeout(()=>{
      this.props.setLoading()
    }, 1000)
  }

  handleClick(index){
    Linking.canOpenURL(this.props.bookmarks[index].web).then(supported => {
      if (supported) {
        Linking.openURL(this.props.bookmarks[index].web);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  };
  handleClickFace(index){
    Linking.canOpenURL(this.props.bookmarks[index].facebook).then(supported => {
      if (supported) {
        Linking.openURL(this.props.bookmarks[index].facebook);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  };
  handleClickInsta(index){
    Linking.canOpenURL(this.props.bookmarks[index].instagram).then(supported => {
      if (supported) {
        Linking.openURL(this.props.bookmarks[index].instagram);
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

  render() {
    const activeFab = this.state.active;
    const { props: { name, index, list } } = this;

    let iconFace = null;
    if(this.props.bookmarks[index].facebook) {
      iconFace = <Button style={styles.buttonSocial} transparent onPress={() => this.handleClickFace(index)}>
        <Icon style={styles.iconFooter} name="logo-facebook"></Icon>
      </Button>
    }

    let iconInsta = null
    if(this.props.bookmarks[index].instagram){
      iconInsta = <Button style={styles.buttonSocial} transparent onPress={() => this.handleClickInsta(index)}>
        <Icon style={styles.iconFooter} name="logo-instagram"></Icon>
      </Button>
    }
    let iconWeb = null
    if(this.props.bookmarks[index].web){
      iconWeb = <Button style={styles.buttonSocial} transparent onPress={() => this.handleClick(index)}>
        <Icon style={styles.iconFooter} name="globe"></Icon>
      </Button>
    }
    return (
        <Container>
        <Header searchBar style={{ backgroundColor: '#ffa726' }}>
            <Left>
              <Button transparent onPress={() => this.props.reset(this.props.navigation.key)}>
                <Icon style={{ color: 'dimgray' }} name="md-close" />
              </Button>
            </Left>
            <Right style={styles.headerRight}>
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
          {this.props.bookmarks[index].image.map((item, i) =>
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
            <Button style={styles.buttonMaps} transparent onPress={() => this.pushRoute('singlemapbookmark', index)}>
              <Thumbnail source={{ uri: 'https://placeholdit.imgix.net/~text?txtsize=14&txt=145%C3%97125&w=145&h='}} style={styles.thumbnailMaps}>
                <Icon style={{ fontSize: 22, color: 'dimgray', bottom: 4}} name="md-pin" />
                <Text style={{ fontSize: 12, color: 'dimgray', bottom: 6 }}>Mapa</Text>
              </Thumbnail>
            </Button>
          </Row>
        </Grid>
        <Content scrollEnabled={true}>

        <Grid style={styles.gridDescription}>
          <View style={{ flex: 1}}>
            <Spinner visible={this.props.loading} textStyle={{color: '#FFF'}} />
          </View>
          <Row>
            <H3>{this.props.bookmarks[index].name}</H3>
          </Row>
          <Row style={styles.rowDescription}>
            <Text style={styles.fontText}>{this.props.bookmarks[index].description}</Text>
          </Row>
          <Row style={styles.rowMain}>
            <Icon style={styles.iconGray} name="md-pin" />
            <Text style={styles.textRow}>{this.props.bookmarks[index].address}</Text>
          </Row>
          <Row style={styles.rowDescriptionData}>
            <Col style={styles.colDescription}>
              <Icon style={styles.iconGray} name="md-call" />
              <Text style={styles.textRow}>{this.props.bookmarks[index].phone}</Text>
            </Col>
            <Col style={styles.colDescription}>
              <Icon style={styles.iconGray} name="clock"/>
              <Text style={styles.textRow}>{this.props.bookmarks[index].horary}</Text>
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
                <Text style={styles.fontFooter}>Te encuentras en "{this.props.bookmarks[index].name}" a traves de Que Hacer? Merida</Text>
              ):(
                <Text></Text>
              )}
            </Right>
          </Row>
        </Grid>
      </Content>
      {this.props.bookmarks[index].web ? (

        <ActionButton
          active={this.state.active}
          onPress={() => this.setState({ active: !this.state.active })}
          buttonColor='#5067FF'
          icon={<Icon name="md-share"
          style={{ color: 'white'}}/>} >
          <ActionButton.Item
            buttonColor='#3B5998'
            // title='facebook'
            onPress={()=> this.goToURL(`https://www.facebook.com/sharer/sharer.php?u=${this.props.bookmarks[index].web}`)} >
            <Icon name="logo-facebook" style={styles.buttonF}/>
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor='#3B5998'
            // title='facebook'
            onPress={()=> this.goToURL(`https://twitter.com/intent/tweet?text=Estoy en ${this.props.bookmarks[index].name} ${this.props.bookmarks[index].web} a traves de QueHacerMerida`)} >
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

function bindAction(dispatch) {
  return {
    set_item: index => dispatch(set_item(index)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    popRoute: key => dispatch(popRoute(key)),
    reset: key => dispatch(reset([{ key: 'bookmarks' }], key, 0)),
    add_bookmark: id => dispatch(add_bookmark(id)),
    remove_bookmark: id => dispatch(remove_bookmark(id)),
    setLoading: () => dispatch(setLoading())

  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  index: state.bookmarks.selectedItem,
  listEstablishment: state.listEstablishment.results,
  bookmarks: state.bookmarks.space,
  loading: state.listZone.loading,
});


export default connect(mapStateToProps, bindAction)(SingleBookmark);
