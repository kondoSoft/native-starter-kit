
import React, { Component } from 'react';
import { TouchableOpacity, Image, View, StatusBar, Dimensions } from 'react-native';
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
const { height, width } = Dimensions.get('window')

const {
  reset,
  pushRoute,

} = actions;



class ListCategory extends Component {

  static propTypes = {
    // listCategory: React.PropTypes.arrayOf(React.PropTypes.object),
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

  pushRoute(route, index, indexGrid) {
    // console.log("indexGrid", this.props);
    this.props.setIndex(index)
    this.props.fetchPKClassifieds(this.props.listCategory[indexGrid][index].id)
    this.props.pushRoute({ key: route, index: 1}, this.props.navigation.key)
  }

  render() {

    return (
      <Swiper
        dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, bottom: 100, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
        activeDot={<View style={{bottom:100,backgroundColor: 'white', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}}/>}
        // activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
        // paginationStyle={{
        //   bottom: -23, left: null, right: 10
        // }}

        height={height}
        showsPagination={true}
        scrollEnabled={true}
        showsButtons={false}
      >
          {this.props.listCategory.map((item, indexGrid)=>
            <Grid key={indexGrid} style={styles.slide} >
              {/* {item.map((obj, i)=>{console.log(obj, indexGrid)})} */}
              {item.map((establishment, i)=>
                <Col key={i} style={styles.col}>
                  <TouchableOpacity style={styles.touchableOpacity}
                    onPress={() => this.pushRoute('subCategory', i, indexGrid)}
                    >
                    <Thumbnail style={styles.thumbnail} square source={{uri: establishment.logo }}>
                      <Text style={styles.text}>{establishment.name}</Text>
                    </Thumbnail>
                  </TouchableOpacity>
                </Col>
              )}

            </Grid>
          )}
      </Swiper>
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
  index: state.list.selectedIndex,
  listCategory: state.listZone.selectedPKCategory,
  selectZone: state.listZone.selectedZone,
  listTypeClassifieds: state.listTypeClassifieds.results,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(ListCategory);
