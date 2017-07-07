import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Button, Container, Content, Card, CardItem, Text, Icon, Right, Left, Body, Thumbnail, ListItem  } from 'native-base';
import { setType } from '../../actions/listType';

import { fetchEstablishmentType, fetchEstablishmentTypeG, fetchEstablishment} from '../../actions/listEstablishment';
import { openDrawer } from '../../actions/drawer';
import { setLoading } from '../../actions/listZone';
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
  componentDidMount(){
    setTimeout(()=>{
      this.props.setLoading()
    }, 1000)
  }
  pushRoute(route, index, idEst) {
    this.props.setType(index);
    if(index != undefined){
      this.props.setLoading()
    }
    console.log(index);
    this.props.pushRoute({ key: route, index: 1}, this.props.navigation.key);
  }
  listSubcategory(){
    // array con datos de los id de type por cada establishment
    var establishment = []
    var filteredArray
    var items = []

    this.props.listEstablishment.map((item, i)=>{
      establishment.push(item.type_classifieds)
    })
    filteredArray = establishment.filter(function(item, pos){
      return establishment.indexOf(item) == pos;
    })

    if(this.props.listEstablishment != ""){
      this.props.listTypeClassifieds.map((item, i) =>{
        filteredArray.map((filter, y)=>{
          if(item.id == filter) {
            items.push({item: item, index: i})
            }
          })
        })
      return(
        items.map((obj, i)=>{
        return (
          <ListItem  key={i} style={styles.card} onPress={() => this.pushRoute('establishments', obj.item.id, i)}>
            <Text>{obj.item.type_classifieds}</Text>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
            )
          })
        )
    }else{
      return (
        <Card style={{
          flex: 1,
          borderWidth: 0,
          shadowColor: 'transparent',
          paddingBottom: 0,
          height: 85,
          flexDirection: 'column',
        }}>
          <CardItem header  style={{
            flex: 1,
            paddingLeft: 75,
            paddingBottom: 0,
            paddingTop: 0,
            backgroundColor: 'transparent',
            maxHeight:30,
          }}>
            <TouchableOpacity
              onPress={() => this.pushRoute('contactus')}
              >
              <Text style={styles.textHeader}>Aquí puede estar tu establecimiento</Text>
            </TouchableOpacity>
          </CardItem>
          <CardItem style={{
            flex: (Platform.OS === 'ios') ? 1 : 3,
            paddingTop: 0,
            backgroundColor: 'transparent',
            paddingBottom: 0,
            ...Platform.select({
              android: {
                paddingLeft: 12,
              },
            }),
          }}>
            <TouchableOpacity
                onPress={() => this.pushRoute('contactus')}
                >
              <Thumbnail style={{
                flex: 1,
                bottom:(Platform.OS === 'ios') ? 14 : 9,
                width: (Platform.OS === 'ios') ? 55 : 60,
                height: 55,
                // bottom: 14,
                right: 3,
                ...Platform.select({
                  android: {
                    maxHeight: 65,
                  },
                }),
              }} square source={require('../../../assets/img/Negocios/p_anunciate.png')}/>
            </TouchableOpacity>
            <Body>
              <CardItem style={{
                flex: 1,
                flexDirection: 'row',
                padding: 0,
                borderBottomWidth: 2,
                borderColor: 'lightgray',
                bottom: (Platform.OS === 'ios') ? 3 : 5,
                paddingRight: 0,
              }}>
                <Body style={{ flex: 1, flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this.pushRoute('contactus')}
                    >
                      <Text style={{
                        flex: 1,
                        fontSize: (Platform.OS === 'ios') ? 10 : 14,
                        lineHeight:(Platform.OS === 'ios') ? 10 : 11,
                        top: (Platform.OS === 'ios') ? 0 : 4,
                        color: 'gray',
                      }}>
                        Toca aquí y contáctanos, para que tu empresa esté en este espacio.
                      </Text>
                  </TouchableOpacity>
                </Body>
              </CardItem>
            </Body>
          </CardItem>
        </Card>
      )
    }
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
    fetchEstablishmentType: type_id => dispatch(fetchEstablishmentType(type_id)),
    fetchEstablishmentTypeG: (type_id, zone_id) => dispatch(fetchEstablishmentTypeG(type_id, zone_id)),
    openDrawer: () => dispatch(openDrawer()),
    replaceAtIndex: (index, route, key) => dispatch(replaceAtIndex(index, route, key)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
    setLoading: () => dispatch(setLoading()),
  };
}
const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  listEstablishment: state.listEstablishment.results,
  listTypeClassifieds: state.listTypeClassifieds.results,
  listZone: state.listZone.results,
  selectZone: state.listZone.selectedZone,

});

export default connect(mapStateToProps, bindAction)(ListSubCategory);
