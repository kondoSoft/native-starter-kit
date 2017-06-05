
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


function ColItem(data){
  <Thumbnail style={styles.thumbnail} square source={{uri: data.listCategory.logo }}>
    <Text style={styles.text}>{data.listCategory.name}</Text>
  </Thumbnail>
}



class ListClassified extends Component {

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

    // this.listRow = this.listRow.bind(this)

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
  // listRow(column){
  //   var list = this.props.listCategory
  //   console.log(list);
  //   list.map((item, i) => {
  //     i++
  //
  //     console.log('>, ', item);
  //     if (i%3 == 0){
  //       console.log('division');
  //     }
  //   })
  // }

  generateFor(first, last){

    console.log(first);
    console.log(last);
    for (var i = first; i < last; i++) {
      var listCategory =  this.props.listCategory.slice(first,last)
      console.log(i);
      // console.log(first);
      // console.log(last);
    }

    return (
      <Row style={{ backgroundColor: 'blue', height: 100}}>
        {listCategory.map((item, i)=><Text key={i}>{item.name}</Text>)}
      </Row>
    )
  }
  render() {
    var initial_index = 0
    var listCategory =  this.props.listCategory
    var final_index = 3

    return (
      <Swiper
        showsButtons
        horizontal={true}
        showsPagination={false}
        scrollEnabled={true}
      >
        <View style={styles.slide1}>
          <Grid style={styles.slide}>
            {this.generateFor(initial_index, final_index)}

          </Grid>
        </View>
        <View>

        </View>
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
  listCategory: state.listZone.selectedPKCategory,
  selectZone: state.listZone.selectedZone,
  listTypeClassifieds: state.listTypeClassifieds.results,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(ListClassified);
