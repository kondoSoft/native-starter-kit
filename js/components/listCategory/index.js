
import React, { Component } from 'react';
import { TouchableOpacity, Image, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Content, Thumbnail, Button, Text  } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import styles from './styles'
import { openDrawer } from '../../actions/drawer';
import { setIndex, fetchClassifieds } from '../../actions/listCategory';
import { fetchEstablishmentClassified } from '../../actions/listEstablishment'
import { fetchPKClassifieds } from '../../actions/listType';

import Swiper from 'react-native-swiper';


const {
  reset,
  pushRoute,

} = actions;

class ListCategory extends Component {

  static propTypes = {
    listCategory: React.PropTypes.arrayOf(React.PropTypes.object),
    listZone: React.PropTypes.arrayOf(React.PropTypes.object),
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

  }
  componentWillMount(){
    // this.props.fetchClassifieds()
    // this.props.fetchEstablishmentClassified()
  }

  pushRoute(route, index) {
    this.props.setIndex(index)
    this.props.fetchPKClassifieds(this.props.listCategory[index].id)
    this.props.pushRoute({ key: route, index: 1}, this.props.navigation.key)
  }

  render() {
    return (
      //<Image source={require('../../../assets/img/mapsMerida.png')} style={styles.backgroundImage} >
        <Grid style={styles.slide} >
            {/* <Row style={styles.row}> */}
              {this.props.listCategory.map((item, i) =>
              <Col key={i} style={styles.col}
                >
                  <TouchableOpacity style={styles.touchableOpacity}
                    onPress={() => this.pushRoute('subCategory', i)}
                    >
                      <Thumbnail style={styles.thumbnail} square source={{uri: this.props.listCategory[i].logo }}>
                        <Text style={styles.text}>{this.props.listCategory[i].name}</Text>
                      </Thumbnail>
                  </TouchableOpacity>
              </Col>
              )}
            {/* </Row> */}
        </Grid>
      //</Image>
    );
  }
}
function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    fetchClassifieds: index => dispatch(fetchClassifieds(index)),
    fetchEstablishmentClassified: index => dispatch(fetchEstablishmentClassified(index)),
    fetchPKClassifieds: index => dispatch(fetchPKClassifieds(index)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}
const mapStateToProps = state => ({
  name: state.user.name,
  navigation: state.cardNavigation,
  listCategory: state.listZone.selectedPKCategory,
  selectZone: state.listZone.selectedZone,
  listTypeClassifieds: state.listTypeClassifieds.results,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(ListCategory);
