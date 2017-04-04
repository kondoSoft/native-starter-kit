
import React, { Component } from 'react';
import { TouchableOpacity, Image, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Content, Thumbnail, Button, Text  } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';

import styles from './styles'
import Swiper from 'react-native-swiper';



const {
  reset,
  pushRoute,

} = actions;

class ListCategory extends Component {

  pushRoute(route, index) {
    this.props.setZone(index);
    this.props.pushRoute({ key: route, index: 1}, this.props.navigation.key);
  }

  render() {
    return (
        <View style={styles.view} showsVerticalScrollIndicator={false}>
          <StatusBar barStyle='light-content'/>
            <Swiper style={styles.wrapper}
              showsPagination={true}
              horizontal={true}
              dot={<View style={{backgroundColor: 'dodgerblue', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
              activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
              paginationStyle={styles.paginationStyle}
              loop={false}>
              <View style={styles.slide} showsVerticalScrollIndicator={false}>
                <Row style={styles.row}>
                  <Col style={{ width: 115 }}>
                    <TouchableOpacity>
                      <Thumbnail style={styles.thumbnail} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                      <Text style={styles.text}>Hoteles</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={{ width: 115 }}>
                    <TouchableOpacity>
                      <Thumbnail style={styles.thumbnail} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                      <Text style={styles.text}>Antros y Bares</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={{ width: 115 }}>
                    <TouchableOpacity>
                      <Thumbnail style={styles.thumbnail} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                      <Text style={styles.text}>Restaurantes</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={{ width: 115 }}>
                    <TouchableOpacity>
                      <Thumbnail style={styles.thumbnail} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                      <Text style={styles.text}>Fiestas</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={{ width: 115 }}>
                    <TouchableOpacity>
                      <Thumbnail style={styles.thumbnail} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                      <Text style={styles.text}>Comida Rapida</Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
              </View>
              <View style={styles.slide} showsVerticalScrollIndicator={false}>
                <Row style={styles.row}>
                  <Col style={{ width: 115 }}>
                    <TouchableOpacity>
                      <Thumbnail style={styles.thumbnail} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                      <Text style={styles.text}>Salones de Evento</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={{ width: 115 }}>
                    <TouchableOpacity>
                      <Thumbnail style={styles.thumbnail} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                      <Text style={styles.text}>Cafeterias</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={{ width: 115 }}>
                    <TouchableOpacity>
                      <Thumbnail style={styles.thumbnail} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                      <Text style={styles.text}>Mascotas</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={{ width: 115 }}>
                    <TouchableOpacity>
                      <Thumbnail style={styles.thumbnail} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                      <Text style={styles.text}>Belleza y Spa</Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
              </View>
              <View style={styles.slide} showsVerticalScrollIndicator={false}>
                <Row style={styles.row}>
                  <Col style={{ width: 115 }}>
                    <TouchableOpacity>
                      <Thumbnail style={styles.thumbnail} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                      <Text style={styles.text}>Hoteles</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={{ width: 115 }}>
                    <TouchableOpacity>
                      <Thumbnail style={styles.thumbnail} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                      <Text style={styles.text}>Antros y Bares</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={{ width: 115 }}>
                    <TouchableOpacity>
                      <Thumbnail style={styles.thumbnail} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                      <Text style={styles.text}>Restaurantes</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={{ width: 115 }}>
                    <TouchableOpacity>
                      <Thumbnail style={styles.thumbnail} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                      <Text style={styles.text}>Fiestas</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={{ width: 115 }}>
                    <TouchableOpacity>
                      <Thumbnail style={styles.thumbnail} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                      <Text style={styles.text}>Comida Rapida</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={{ width: 115 }}>
                    <TouchableOpacity>
                      <Thumbnail style={styles.thumbnail} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                      <Text style={styles.text}>Comida Rapida</Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
              </View>
            </Swiper>
        </View>
    );
  }
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
  navigation: state.cardNavigation,
  listZone: state.listZone.results,
});

export default connect(mapStateToProps)(ListCategory);
