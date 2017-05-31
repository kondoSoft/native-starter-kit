
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Dimensions, BackAndroid } from 'react-native'
import { Container, Header, Title, Content, Text, Button, Icon, Item, Input, Left,Thumbnail, Right, Body, Footer } from 'native-base';
import Classified from '../classified'
import ListZone from '../listZone'
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { fetchAdvertising, resetState, resetStateBack } from '../../actions/list';


const {
  reset,
  popRoute,
} = actions;


class BlankPage extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.object),
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  componentWillMount(){


    this.props.fetchAdvertising()

  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
    this.props.resetState()
    console.log("Me ejecute")
  }
  // componentDidMount(){
  //   BackAndroid.addEventListener("backPress", ()=>{
  //     this.props.resetStateBack()
  //   })
  // }
  componentWillUnmount(){

    this.props.resetStateBack()
    console.log("Me removi");
  }



  render() {

    const { props: { name, index, list } } = this;
    const { width, height } = Dimensions.get('window')
    return (

      <Container style={styles.container}>
        <Header searchBar style={{ backgroundColor: '#ffa726' }}>
          <Left>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon style={{color: 'dimgray'}} name="arrow-round-back" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.list[index].category_name}</Title>
          </Body>

          <Right>

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
        <Content padder scrollEnabled={true} style={{ paddingLeft: 5 }}>
          <ListZone />
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
    fetchAdvertising: index => dispatch(fetchAdvertising(index)),
    resetState: () => dispatch(resetState()),
    resetStateBack: () => dispatch(resetStateBack()),

  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list,
  advertising: state.list.advertising,
});


export default connect(mapStateToProps, bindAction)(BlankPage);
