
import React, { Component } from 'react';
import { TouchableOpacity, Image, WebView } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, Card, CardItem, Thumbnail, Header, Title, Text, Button, Item, Icon, Input, Left, Body, Right } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import { setIndex, fetchCategory } from '../../actions/list';
import styles from './styles';

const {
  reset,
  pushRoute,

} = actions;

class Home extends Component {

  static propTypes = {

    list: React.PropTypes.arrayOf(React.PropTypes.object),
    setIndex: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  componentWillMount(){
    this.props.fetchCategory()
  }

  pushRoute(route, index) {
    this.props.setIndex(index);
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  render() {

    const list = Object.keys(this.props.list)
    return (
      <Container style={styles.container}>
        <Image source={require('../../../assets/img/mapsMerida.png')} style={styles.backgroundImage} >
          <Header searchBar style={styles.header}>
            <Item style={styles.item}>
              <Icon name="search" />
              <Input placeholder="A dónde quieres ir?" style={styles.itemInput}/>
            </Item>
            <Right style={{ flex: 1 }}>
              <Button transparent onPress={this.props.openDrawer}>
                <Icon style={{color: 'dimgray'}} name="md-more" />
              </Button>
            </Right>
          </Header>
          <Grid style={{ maxHeight: 60 }}>
            <Row style={{height: 60}}>
              <Thumbnail style={styles.imagePub} square source={require('../../../assets/img/Publicidad/publicidad1.png')} />
            </Row>
          </Grid>
          <Content padder scrollEnabled={false}>
            <Grid style={styles.videoGrid}>
              <Row style={styles.videoRow}>
                <Text style={{ flex: 1, textAlign: 'center', maxHeight: 20, fontSize:11, top: 5, width: 239 }}>VIDEO VIRAL DE LA SEMANA</Text>
                <WebView
                  source={{ uri: 'https://www.youtube.com/embed/v7MGUNV8MxU' }}
                  style={{ margin: 7, flex: 1 }}
                  javaScriptEnabled={true}
                />
              </Row>
            </Grid>
            <Grid style={styles.mt}>
              {this.props.list.map((item, i) =>
              <Card key={i}>
                <CardItem style={styles.cardItem}>
                  { this.props.list[i] == this.props.list[0] ?  (
                    // <TouchableOpacity onPress={() => this.pushRoute('blankPage', i)} >
                    <TouchableOpacity onPress={() => this.pushRoute('blankPage', i)} >

                      <Body style={{ alignItems: 'center' }}>
                        <Thumbnail square source={{ uri: this.props.list[i].image }} style={{width: 145, height: 125, marginTop: 5}} />
                        {/* <Thumbnail square source={require('../../../assets/img/catzone.png')} style={{width: 145, height: 125}} /> */}
                        <Text style={styles.text}>CATEGORÍAS {this.props.list[i].category_name}</Text>

                      </Body>
                      </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => this.pushRoute('classified', i)} >
                      <Body style={{ alignItems: 'center' }}>

                        <Thumbnail square source={{ uri: this.props.list[i].image }} style={{width: 145, height: 125, marginTop: 5}} />
                        {/* <Thumbnail square source={require('../../../assets/img/catzone.png')} style={{width: 145, height: 125}} /> */}
                        <Text style={styles.text}>CATEGORÍAS {this.props.list[i].category_name}</Text>
                      </Body>
                    </TouchableOpacity>
                  )}

                </CardItem>
              </Card>
              )}
            </Grid>
            <Grid>
              <Row style={{ justifyContent: 'center', top: 30 }}>
                <Button style={{ width: 300, justifyContent: 'center' , backgroundColor: 'orange' }}
                  onPress={() => this.pushRoute('contactus')}>
                  <Text style={{ textAlign: 'center', color: 'black' }} >ANUNCIATE AQUI</Text>
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
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  list: state.list.list,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Home);
