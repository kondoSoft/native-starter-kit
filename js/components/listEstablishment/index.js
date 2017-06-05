import React, { Component } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Button, Container, Content, Card, CardItem, Text, Icon, Right, Left, Body, Thumbnail  } from 'native-base';
import { setEstablishment } from '../../actions/listEstablishment';
import {add_bookmark, remove_bookmark} from '../../actions/bookmarks'

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
    this.props.pushRoute({ key: route, index: 1}, this.props.navigation.key)
  }
  isBookmark(establismentItem, bookmarks){
    var res = bookmarks.filter((val)=>  val.id == establismentItem.id)

    if (res.length > 0){
      return <Icon style={styles.fontIcon} onPress={() => this.props.remove_bookmark(establismentItem.id)} name="md-heart" />
    }
    return <Icon style={styles.fontIcon} onPress={() => this.props.add_bookmark(establismentItem)} name="md-heart-outline" />
  }

  render() {
    bookmarks = this.props.bookmarks
    return (
        <Content style= {styles.content}>
          {this.props.listEstablishment.map((item, i) =>
          <Card  key={i} style={styles.card}>
            <CardItem header  style={styles.header}>
              <TouchableOpacity
                onPress={() => this.pushRoute('single', i)}
                >
                <Text style={styles.textHeader}>{this.props.listEstablishment[i].name}</Text>
              </TouchableOpacity>
            </CardItem>
            <CardItem style={styles.bodyText}>
              <TouchableOpacity
                onPress={() => this.pushRoute('single', i)}
                >
                <Thumbnail style={styles.thumbnail} square source={{uri: this.props.listEstablishment[i].logo}}></Thumbnail>
              </TouchableOpacity>
              <Body>
                <CardItem style={styles.cardText}>
                  <Body style={{ flex: 1, flexDirection: 'row'}}>
                    <TouchableOpacity
                      // style={{ flex: 1 }}
                      onPress={() => this.pushRoute('single', i)}
                      >
                      <Text style={styles.textDescription}>{this.props.listEstablishment[i].description.substring(0,120)+ "..."}</Text>
                    </TouchableOpacity>
                  </Body>

                    <Button transparent textStyle={{color: '#87838B'}}>

                      {
                        this.isBookmark(this.props.listEstablishment[i], this.props.bookmarks)

                      }

                      {/* <Text style={styles.textIconFav} >{this.props.listEstablishment[i].favorites}</Text> */}
                    </Button>

                </CardItem>
              </Body>
            </CardItem>
          </Card>
        )}
        </Content>
    );
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
  };
}
const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  listEstablishment: state.listEstablishment.results,
  bookmarks:state.bookmarks.space
});

export default connect(mapStateToProps, bindAction)(ListEstablishment);
