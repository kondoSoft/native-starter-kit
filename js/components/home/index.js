
import React, { Component } from 'react';
import { TouchableOpacity, Image, WebView } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, Card, CardItem, Thumbnail, Header, Title, Text, Button, Item, Icon, Input, Left, Body, Right } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { openDrawer } from '../../actions/drawer';
import { setIndex, fetchCategory, fetchAdvertising, fetchVideo } from '../../actions/list';
import { fetchClassifieds } from '../../actions/listCategory';

import { fetchSearch } from '../../actions/search';

import styles from './styles';

const {
  reset,
  pushRoute,
  pushRouteC,

} = actions;

class Home extends Component {

  static propTypes = {

    list: React.PropTypes.arrayOf(React.PropTypes.object),
    advertising: React.PropTypes.arrayOf(React.PropTypes.object),
    listSearch: React.PropTypes.arrayOf(React.PropTypes.object),
    setIndex: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.getRandomIndex = this.getRandomIndex.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentWillMount(){
    this.props.fetchCategory()
    this.props.fetchAdvertising()
    this.props.fetchVideo()
  }

  pushRoute(route, index, value) {
    this.props.setIndex(index);
    this.props.fetchSearch(value);
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }
  pushRouteC(route, index) {
    this.props.setIndex(index);
    this.props.fetchClassifieds(index)
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  getRandomIndex(){
    const advertising = this.props.advertising
    randomIndex = Math.floor(Math.random()*advertising.length)
    return randomIndex
  }

  handleChange(event) {

    this.setState({value: event.nativeEvent.text});
   }

  render() {
    console.log(this.props);
    var randomIndex = this.getRandomIndex()
    return (
      <Container style={styles.container}>
        <Image source={require('../../../assets/img/mapsMerida.png')} style={styles.backgroundImage} >
          <Header searchBar style={styles.header}>
            <Item style={styles.item}>
              <Icon name="search" onPress={() => this.pushRoute('establishments', this.props.navigation.key, this.state.value)}/>
              <Input placeholder="A dónde quieres ir?" onChange={event => this.handleChange(event)} style={styles.itemInput}/>
            </Item>
            <Right style={{ flex: 1 }}>
              <Button transparent onPress={this.props.openDrawer}>
                <Icon style={{color: 'dimgray'}} name="md-more" />
              </Button>
            </Right>
          </Header>
          <Grid style={{ maxHeight: 62, flex: 1 }}>
              <Row>
                <Thumbnail style={styles.imagePub} square source={{ uri: this.props.advertising[randomIndex].image}} />
              </Row>
          </Grid>
          <Content padder scrollEnabled={true} style={styles.contentHome}>
            <Grid style={styles.videoGrid}>
              <Row style={styles.videoRow}>
                <Text style={{ flex: 1, textAlign: 'center', maxHeight: 20, fontSize:11, top: 5, width: 239 }}>VIDEO VIRAL DE LA SEMANA</Text>
                <WebView
                  source={{ uri: this.props.video[0].url }}
                  style={styles.webView}
                  javaScriptEnabled={true}
                />
              </Row>
            </Grid>
            <Grid style={styles.mt}>
              {this.props.list.map((item, i) =>
              <Card key={i} style={{ flex: 1 }}>
                <CardItem style={styles.cardItem}>
                  { this.props.list[i] == this.props.list[0] ?  (
                    <TouchableOpacity onPress={() => this.pushRoute('blankPage', i)} >

                      <Body style={{ flex: 1, alignItems: 'center'}}>
                        <Thumbnail square source={{ uri: this.props.list[i].image }} style={styles.thumbnailHome} />
                        <Text style={styles.text}>CATEGORÍAS {this.props.list[i].category_name}</Text>

                      </Body>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => this.pushRouteC('classified', i)} >
                      <Body style={{  flex: 1, alignItems: 'center' }}>

                        <Thumbnail square source={{ uri: this.props.list[i].image }} style={styles.thumbnailHome} />
                        <Text style={styles.text}>CATEGORÍAS {this.props.list[i].category_name}</Text>
                      </Body>
                    </TouchableOpacity>
                  )}

                </CardItem>
              </Card>
              )}
            </Grid>
            <Grid>
              <Row style={styles.rowAnun}>
                <Button full warning onPress={() => this.pushRoute('contactus')}>
                  <Text style={styles.textAun}> ANUNCIATE AQUI</Text>
                </Button>
              </Row>
            </Grid>
          </Content>
          </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    fetchCategory: index => dispatch(fetchCategory(index)),
    fetchClassifieds: index => dispatch(fetchClassifieds(index)),
    fetchVideo: index => dispatch(fetchVideo(index)),
    fetchSearch: name => dispatch(fetchSearch(name)),
    fetchAdvertising: index => dispatch(fetchAdvertising(index)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  list: state.list.list,
  advertising: state.list.advertising,
  video: state.list.videoSelected,
  navigation: state.cardNavigation,
  listSearch: state.search.results,
});

export default connect(mapStateToProps, bindAction)(Home);
