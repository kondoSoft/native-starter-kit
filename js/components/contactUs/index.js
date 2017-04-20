import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Image } from 'react-native'
import { Container, Header, Content, Text, Button, Icon, Item, Input, Form, Left, Right, H3 } from 'native-base';
import ListEstablishment from '../listEstablishment'
import { openDrawer } from '../../actions/drawer';
import styles from './style';
import { Grid, Row, Col } from 'react-native-easy-grid';
const {
  reset,
  popRoute,
} = actions;

class ContactUs extends Component {

  constructor() {
    super();
       this.state = {
           active: false
       };
   }
  static propTypes = {
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
            <Left>
              <Button transparent onPress={() => this.popRoute()}>
                <Icon style={{color: 'dimgray'}} name="arrow-round-back" />
              </Button>
            </Left>
            <Right>
              <Button transparent onPress={this.props.openDrawer}>
                <Icon style={{color: 'dimgray'}} name="md-more" />
              </Button>
            </Right>
        </Header>
        <Content  style={styles.content} scrollEnabled={false}>
          <Grid style={styles.gridDescription}>
            <Row>
              <H3 style={{ textAlign: 'center' }}>Deseas anunciar tu negocio?</H3>
            </Row>
            <Row>
              <Text style={styles.textDescription}>Enviano tus datos y en breve nos pondremos en contacto</Text>
            </Row>

          </Grid>

            <Form style={styles.form}>
              <Item style={styles.item}>
                <Icon style={styles.icon} active name="md-contact"/>
                <Input style={styles.input} placeholder="Nombre" />
              </Item>
              <Item style={styles.item}>
                <Icon style={styles.icon} active name="logo-whatsapp"/>
                <Input style={styles.input} placeholder="Telefono(Whatsapp)" />
              </Item>
              <Item style={styles.item}>
                <Icon style={styles.icon} active name="ios-mail"/>
                <Input style={styles.input} placeholder="Correo electronico" />
              </Item>
              <Button style={styles.button} block info>
                  <Text style={styles.textButton} >ENVIAR</Text>
              </Button>
            </Form>

        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});


export default connect(mapStateToProps, bindAction)(ContactUs);
