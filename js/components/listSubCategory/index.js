import React, { Component } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Button, Container, Content, Card, CardItem, Text, Icon, Right, Left, Body, Thumbnail, ListItem  } from 'native-base';
import { setType } from '../../actions/listType';
import { fetchEstablishmentType } from '../../actions/listEstablishment';
import { openDrawer } from '../../actions/drawer';

import styles from './styles'


const {
  reset,
  pushRoute,
  replaceAtIndex,

} = actions;


class ListSubCategory extends Component {

  static propTypes = {

    setType: React.PropTypes.func,
    listTypeClassifieds: React.PropTypes.arrayOf(React.PropTypes.object),
    listEstablishment: React.PropTypes.arrayOf(React.PropTypes.object),
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    replaceAtIndex: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  componentWillMount(){
    // this.props.fetchPKClassifieds()
    // console.log(this.props.listTypeClassifieds);

  }
  componentDidMount(){


  }
  pushRoute(route, index) {
    this.props.setType(index);
    // console.log(index);
    console.log(this.props.listTypeClassifieds[index].id, this.props.listZone[this.props.setZone].id);
    this.props.fetchEstablishmentType(this.props.listTypeClassifieds[index].id, this.props.listZone[this.props.setZone].id)
    this.props.pushRoute({ key: route, index: 1}, this.props.navigation.key);

  }

  render() {
    return (
      <Container>
        <Content style= {styles.content}>

            {this.props.listTypeClassifieds.map((item, i) =>
            <ListItem  key={i} style={styles.card} onPress={() => this.pushRoute('establishments', i)}>
              <Text>{this.props.listTypeClassifieds[i].type_classifieds}</Text>
              <Right>
                 <Icon name="arrow-forward" />
               </Right>
            </ListItem>
          )}

        </Content>
      </Container>

    );
  }
}
function bindAction(dispatch) {
  return {
    setType: index => dispatch(setType(index)),
    fetchEstablishmentType: (type_id, zone_id) => dispatch(fetchEstablishmentType(type_id, zone_id)),
    openDrawer: () => dispatch(openDrawer()),
    replaceAtIndex: (index, route, key) => dispatch(replaceAtIndex(index, route, key)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}
const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  // listEstablishment: state.listEstablishment.results,
  listCategory: state.listZone.selectedPKCategory,
  list: state.listZone.results,
  listTypeClassifieds: state.listTypeClassifieds.results,
  setZone: state.listZone.selectedZone,
  listZone: state.listZone.results,

});

export default connect(mapStateToProps, bindAction)(ListSubCategory);
