import React, { Component } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Button, Container, Content, Card, CardItem, Text, Icon, Right, Left, Body, Thumbnail, ListItem  } from 'native-base';
import { setType } from '../../actions/listType';
import { fetchEstablishmentType, fetchEstablishmentTypeG, fetchEstablishment } from '../../actions/listEstablishment';
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

  pushRoute(route, index) {
    this.props.setType(index);
    if(this.props.listZone[this.props.setZone] == undefined){
      this.props.fetchEstablishmentType(this.props.listTypeClassifieds[index].id)
    }else{
      this.props.fetchEstablishmentTypeG(this.props.listTypeClassifieds[index].id, this.props.listZone[this.props.setZone].id)
    }
    this.props.pushRoute({ key: route, index: 1}, this.props.navigation.key);
  }
  listSubcategory(){
    // array con datos de los id de type por cada establishment
    var establishment = []
    this.props.listEstablishment.map((est, i)=>{
      establishment.push(est.type_classifieds)
    })

    var item
    if(this.props.listTypeClassifieds != ""){
      item = this.props.listTypeClassifieds.map((item, i) =>
        <ListItem  key={i} style={styles.card} onPress={() => this.pushRoute('establishments', i)}>
          {/* pruebas de la lista para solo pasar el id de type */}
          {console.log(this.props.listTypeClassifieds)}

          <Text>{this.props.listTypeClassifieds[i].type_classifieds}</Text>
          <Right>
             <Icon name="arrow-forward" />
           </Right>
        </ListItem>
      )
    }else{
      item = (<View><Text style={{ textAlign: 'center' }}>No hay datos sobre esta categoria</Text></View>)
    }
  return (
    item
    )
  }


  render() {

    return (
      <Container>
        <Content style= {styles.content}>
          {this.listSubcategory()}
        </Content>
      </Container>

    );
  }
}
function bindAction(dispatch) {
  return {
    setType: index => dispatch(setType(index)),
    // fetchEstablishment: (zone_id, type_c) => dispatch(fetchEstablishment(zone_id, type_c)),
    fetchEstablishmentType: type_id => dispatch(fetchEstablishmentType(type_id)),
    fetchEstablishmentTypeG: (type_id, zone_id) => dispatch(fetchEstablishmentTypeG(type_id, zone_id)),
    openDrawer: () => dispatch(openDrawer()),
    replaceAtIndex: (index, route, key) => dispatch(replaceAtIndex(index, route, key)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}
const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  listEstablishment: state.listEstablishment.results,
  listTypeClassifieds: state.listTypeClassifieds.results,
  setZone: state.listZone.selectedZone,
  listZone: state.listZone.results,
  selectZone: state.listZone.selectedZone,

});

export default connect(mapStateToProps, bindAction)(ListSubCategory);
