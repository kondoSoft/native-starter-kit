
import React, { Component } from 'react';
import { TouchableOpacity, Image, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Content, Thumbnail, Button, Text  } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { openDrawer } from '../../actions/drawer';
import { setZone, fetchZone, fetchPkZone } from '../../actions/listZone';
import styles from './styles';
import Swiper from 'react-native-swiper'

const {
  reset,
  pushRoute,

} = actions;

class ListZone extends Component {

  static propTypes = {
    listZone: React.PropTypes.arrayOf(React.PropTypes.object),
    pk_zone: React.PropTypes.func,
    setZone: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  componentWillMount(){
    this.props.fetchZone()

  }

  pushRoute(route, index) {
    this.props.setZone(index);
    // this.props.fetchPkZone(index);
    this.props.pushRoute({ key: route, index: 1}, this.props.navigation.key);
  }

  render() {

    return (
        <View style={styles.view} showsVerticalScrollIndicator={false}>
          <StatusBar barStyle='light-content'/>
            <Swiper style={styles.wrapper}
              showsPagination={false}
              horizontal={true}
              loop={false}>
              <View style={styles.slide} showsVerticalScrollIndicator={false}>
                <Row style={styles.row}>
                  {this.props.listZone.map((item, i) =>

                    <Col key= {i} style={styles.colImage}>
                      <TouchableOpacity
                        onPress={() => this.pushRoute('classified', i)}
                      >
                        <Image style={styles.imageZone} square source={{uri: this.props.listZone[i].image }}>
                          <Text style={styles.textName}>{this.props.listZone[i].name_zone}</Text>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                  )}
                </Row>
              </View>
            </Swiper>
        </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    setZone: index => dispatch(setZone(index)),
    fetchPkZone: index => dispatch(fetchPkZone(index)),
    fetchZone: index => dispatch(fetchZone(index)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  listZone: state.listZone.results,
});

export default connect(mapStateToProps, bindAction)(ListZone);
