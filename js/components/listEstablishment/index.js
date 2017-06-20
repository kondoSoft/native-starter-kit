import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Button, Container, Content, Card, CardItem, Text, Icon, Right, Left, Body, Thumbnail  } from 'native-base';
import { setEstablishment } from '../../actions/listEstablishment';
import {add_bookmark, remove_bookmark} from '../../actions/bookmarks'
import { setLoading } from '../../actions/listZone';
import { openDrawer } from '../../actions/drawer';
import styles from './styles'


const {
  reset,
  pushRoute,

} = actions;


class ListEstablishment extends Component {

  static propTypes = {

    setEstablishment: React.PropTypes.func,
    listEstablishment: React.PropTypes.arrayOf(React.PropTypes.object),
    // bookmarks:React.PropTypes.arrayOf(React.PropTypes.object),
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  pushRoute(route, index) {
    this.props.setEstablishment(index)
    this.props.setLoading()
    this.props.pushRoute({ key: route, index: 1}, this.props.navigation.key)
  }
  componentDidMount(){
    setTimeout(()=>{
      this.props.setLoading()
    }, 2000)
  }
  isBookmark(establismentItem, bookmarks){
    var res = bookmarks.filter((val)=>  val.id == establismentItem.id)

    if (res.length > 0){
      return <Icon style={styles.fontIcon} onPress={() => this.props.remove_bookmark(establismentItem.id)} name="md-heart" />
    }
    return <Icon style={styles.fontIcon} onPress={() => this.props.add_bookmark(establismentItem)} name="md-heart-outline" />
  }
  listEstablishment(){
    var establishment = []
    var items
    this.props.listEstablishment.map((obj, i) =>{
      if(obj.type_classifieds == this.props.indexType){
        establishment.push(obj)
        // console.log(establishment);
      }
    })

    return (
      establishment.map((item, i)=>{
        return (<Card  key={i} style={styles.card}>
          <CardItem header  style={styles.header}>
            <TouchableOpacity
              onPress={() => this.pushRoute('single', item.id)}
              >
              <Text style={styles.textHeader}>{item.name}</Text>
            </TouchableOpacity>
          </CardItem>
          <CardItem style={styles.bodyText}>
            <TouchableOpacity
                onPress={() => this.pushRoute('single', item.id)}
                >
            <Thumbnail style={styles.thumbnail} square source={{uri: item.logo}}/>
            </TouchableOpacity>
            <Body>
              <CardItem style={styles.cardText}>
                <Body style={{ flex: 1, flexDirection: 'row'}}>
                  <TouchableOpacity
                    // style={{ flex: 1 }}
                    onPress={() => this.pushRoute('single', item.id)}
                    >
                      <Text style={styles.textDescription}>
                        {(Platform.OS === 'android') ? item.description.substring(0,103)+ "..." : item.description.substring(0,120)+ "..."}
                      </Text>
                  </TouchableOpacity>
                </Body>
                <Button transparent textStyle={{color: '#87838B'}}>
                  {
                    this.isBookmark(item, this.props.bookmarks)
                  }
                </Button>
              </CardItem>
            </Body>
          </CardItem>
        </Card>)
      })
    )
  }

  render() {

    bookmarks = this.props.bookmarks
    return (
      <Content style= {styles.content}>
        {this.listEstablishment()}
      </Content>

    )
  }
}

function bindAction(dispatch) {
  return {
    setEstablishment: index => dispatch(setEstablishment(index)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
    add_bookmark: id => dispatch(add_bookmark(id)),
    remove_bookmark: id => dispatch(remove_bookmark(id)),
    setLoading: () => dispatch(setLoading()),
  };
}
const mapStateToProps = state => ({
  indexType: state.listTypeClassifieds.selectedType,
  navigation: state.cardNavigation,
  listEstablishment: state.listEstablishment.results,
  bookmarks:state.bookmarks.space
});

export default connect(mapStateToProps, bindAction)(ListEstablishment);
