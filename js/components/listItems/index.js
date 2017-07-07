import React, { Component } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Button, Container, Content, Card, CardItem, Text, Icon, Right, Left, Body, Thumbnail  } from 'native-base';
import { set_item } from '../../actions/bookmarks';
import { setLoading } from '../../actions/listZone'
import { openDrawer } from '../../actions/drawer';
import styles from './styles'


const {
  reset,
  replaceAt,

} = actions;


class ListItems extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route, index){
    const currentRouteKey = this.props.navigation.routes[this.props.navigation.routes.length-1].key
    this.props.set_item(index);
    this.props.replaceAt(currentRouteKey,{ key: route, index: 1}, this.props.navigation.key)
  }


  render() {
    return (

      <Content style= {styles.content}>
        {this.props.source.map((item, i) =>
        <Card  key={i} style={styles.card}>

          <CardItem header  style={styles.header}>

            <TouchableOpacity
              onPress={() => {

                this.replaceAt('singleBookmark', i)
              }}
              >
              <Text style={styles.textHeader}>{this.props.source[i].name}</Text>
            </TouchableOpacity>
          </CardItem>
          <CardItem style={styles.bodyText}>
            <TouchableOpacity
              onPress={() => this.replaceAt('singleBookmark', i)}
              >
              <Thumbnail style={styles.thumbnail} square source={{uri: this.props.source[i].logo}}></Thumbnail>
            </TouchableOpacity>
            <Body>
              <CardItem style={styles.cardText}>
                <Body style={{ flex: 1, flexDirection: 'row'}}>
                  <TouchableOpacity
                    // style={{ flex: 1 }}
                    onPress={() => this.replaceAt('singleBookmark', i)}
                    >
                    <Text style={styles.textDescription}>{this.props.source[i].description.substring(0,120)+ "..."}</Text>
                  </TouchableOpacity>
                </Body>

                  <Button onPress={() => this.props.remove_bookmark(this.props.source[i].id)} transparent textStyle={{color: '#87838B'}}>
                    <Icon style={styles.fontIcon} name="ios-heart" />

                    {/* <Text style={styles.textIconFav} >{this.props.source[i].favorites}</Text> */}
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
    set_item: index => dispatch(set_item(index)),
    openDrawer: () => dispatch(openDrawer()),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
    setLoading: () => dispatch(setLoading())

  };
}
const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(ListItems);
