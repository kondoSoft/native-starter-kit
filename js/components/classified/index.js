import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Dimensions, BackAndroid } from 'react-native'
import { Container, Header, Title, Thumbnail, Content, Text, Button, Icon, Item, Input, Left, Right, Body, Footer } from 'native-base';
import ListCategory from '../listCategory'
import ListClassified from '../listClassified'
import { openDrawer } from '../../actions/drawer';
import { fetchAdvertising } from '../../actions/list';
import styles from './styles';
import { Grid, Row, Col } from 'react-native-easy-grid';
const {
  reset,
  popRoute,
} = actions;


class Classified extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    advertising: React.PropTypes.arrayOf(React.PropTypes.object),
    listCategory: React.PropTypes.arrayOf(React.PropTypes.object),
    list: React.PropTypes.arrayOf(React.PropTypes.object),
    index: React.PropTypes.number,
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  constructor(props) {
    super(props);

    this.getRandomIndex = this.getRandomIndex.bind(this)

  }
  popRoute() {
    this.props.popRoute(this.props.navigation.key);
    // console.log("Me ejecute en classified");
  }
  getRandomIndex(){
    const advertising = this.props.advertising
    randomIndex = Math.floor(Math.random()*advertising.length)
    return randomIndex
  }
  componentWillMount(){

    this.props.fetchAdvertising()

  }
  // componentDidMount(){
  //   console.log("estoy en classified");
  //   BackAndroid.removeEventListener("backPress", ()=>{
  //     this.props.popRoute(this.props.navigation.key)
  //   })
  // }


  render() {
    // console.log(this.props.listZone[this.props.selectedZone]);
    var randomIndex = this.getRandomIndex()
    const { props: { name, index, listCategory } } = this;
    return (
      <Container style={styles.container}>
        <Header searchBar style={{ backgroundColor: '#ffa726' }}>
          <Left>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon style={{color: 'dimgray'}} name="arrow-round-back" />
            </Button>
          </Left>
          <Body>
            {/* this.props.listZone[this.props.selectedZone] */}
            {(this.props.list[index].category_name) == this.props.list[1].category_name ? <Title>{this.props.list[index].category_name}</Title> : (this.props.listZone[this.props.selectedZone])== undefined ? <Title></Title>:<Title>{this.props.listZone[this.props.selectedZone].name_zone}</Title>}
          </Body>
          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon style={{color: 'dimgray'}} name="md-more" />
            </Button>
          </Right>
        </Header>
        <Grid style={{ maxHeight: 60, flex: 1 }}>
            <Row>
              <Thumbnail style={styles.imagePub} square source={{ uri: this.props.advertising[randomIndex].image}} />
            </Row>
        </Grid>
        <Content scrollEnabled={true} style={styles.content}>
          <ListCategory />
          {/* <ListClassified /> */}

        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    fetchAdvertising: index => dispatch(fetchAdvertising(index)),
    popRoute: key => dispatch(popRoute(key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  advertising: state.list.advertising,
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list,
  listCategory: state.listCategory.results,
  listZone: state.listZone.results,
  selectedZone: state.listZone.selectedZone
});


export default connect(mapStateToProps, bindAction)(Classified);
