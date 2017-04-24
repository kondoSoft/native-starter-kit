
import React, { Component } from 'react';
import { TouchableOpacity, Image, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Content, Thumbnail, Button, Text  } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';


import styles from './styles'
import { openDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/listCategory';
import Swiper from 'react-native-swiper';


const {
  reset,
  pushRoute,

} = actions;

class ListCategory extends Component {

  static propTypes = {
    listCategory: React.PropTypes.arrayOf(React.PropTypes.object),
    setIndex: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  pushRoute(route, index) {
    this.props.setIndex(index);
    this.props.pushRoute({ key: route, index: 1}, this.props.navigation.key);
  }

  render() {
    return (
        <View style={styles.view} showsVerticalScrollIndicator={false}>
            <Swiper style={styles.wrapper}
              showsPagination={true}
              horizontal={true}
              dot={<View style={{backgroundColor: 'dodgerblue', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
              activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
              paginationStyle={styles.paginationStyle}
              loop={false}>
              <View style={styles.slide} showsVerticalScrollIndicator={false}>
                <Row style={styles.row}>
                  {this.props.listCategory.map((item, i) =>
                  <Col key={i} style={{
                    width: 115 }}
                    >
                    <TouchableOpacity
                        onPress={() => this.pushRoute('subCategory', i)}
                      >
                      <Thumbnail style={styles.thumbnail} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}>
                        <Text style={styles.text}>{this.props.listCategory[i].name_category}</Text>
                      </Thumbnail>
                    </TouchableOpacity>
                  </Col>
                  )}
                </Row>
              </View>
              <View style={styles.slide} showsVerticalScrollIndicator={false}>
                <Row style={styles.row}>

                </Row>
              </View>
            </Swiper>
        </View>
    );
  }
}
function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}
const mapStateToProps = state => ({
  name: state.user.name,
  navigation: state.cardNavigation,
  listCategory: state.listCategory.results,

});

export default connect(mapStateToProps, bindAction)(ListCategory);
