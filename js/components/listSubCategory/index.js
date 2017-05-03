import React, { Component } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Button, Container, Content, Card, CardItem, Text, Icon, Right, Left, Body, Thumbnail, ListItem  } from 'native-base';
import { setEstablishment } from '../../actions/listEstablishment';
import { fetchTypeClassifieds } from '../../actions/listType';
import { openDrawer } from '../../actions/drawer';

import styles from './styles'


const {
  reset,
  pushRoute,

} = actions;


class ListSubCategory extends Component {

  static propTypes = {

    setEstablishment: React.PropTypes.func,
    listTypeClassifieds: React.PropTypes.arrayOf(React.PropTypes.object),
    listEstablishment: React.PropTypes.arrayOf(React.PropTypes.object),
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  componentWillMount(){
    this.props.fetchTypeClassifieds()
  }
  pushRoute(route, index) {
    this.props.setEstablishment(index);
    this.props.pushRoute({ key: route, index: 1}, this.props.navigation.key);
  }

  render() {
    const listTypeClassifieds = Object.keys(this.props.listEstablishment)

    return (
      <Container>
        <Content style= {styles.content}>
          {/* { this.props.list[i] == this.props.list[0] ?  ( */}
            {this.props.listTypeClassifieds.map((item, i) =>
            <ListItem  key={i} style={styles.card} onPress={() => this.pushRoute('establishments', i)}>
              <Text>{this.props.listTypeClassifieds[i].type_classifieds}</Text>
              <Right>
                 <Icon name="arrow-forward" />
               </Right>
            </ListItem>
          )}

        {/* }) */}
        </Content>
      </Container>

    );
  }
}
function bindAction(dispatch) {
  return {
    setEstablishment: index => dispatch(setEstablishment(index)),
    fetchTypeClassifieds: index => dispatch(fetchTypeClassifieds(index)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}
const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  listEstablishment: state.listEstablishment.results,
  list: state.listZone.results,
  listTypeClassifieds: state.listTypeClassifieds.results,

});

export default connect(mapStateToProps, bindAction)(ListSubCategory);
