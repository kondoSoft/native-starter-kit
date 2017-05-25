import React, { Component } from 'react';
import { connect, ActivityIndicator} from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Image } from 'react-native'
import { Container, Header, Content, Text, Button, Icon, Item, Input, Form, Left, Right, H3, View } from 'native-base';
import { openDrawer } from '../../actions/drawer';
import styles from './style';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { sendMail, setLoadingTrue, resetState } from '../../actions/list';
import Spinner from 'react-native-loading-spinner-overlay';

const {
  reset,
  popRoute,
} = actions;

class ContactUs extends Component {

  constructor() {
    super();
       this.state = {
           active: false,
           nameC: '',
           phoneC: '',
           mailC: '',
           styleMail: {},

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
    this.props.resetState();
  }

  handleName(event) {
    this.setState({nameC: event.nativeEvent.text});
   }
  handlePhone(event) {
    const expreg = /\d/
    this.setState({phoneC: event.nativeEvent.text});
    if(expreg.test(this.state.phoneC)){
      console.log('es valido');
    }
    else{
      console.log('no es valido aun');
    }
  }
  handleEmail(event) {
    const expreg = /(\w+)@(\w+)\.([A-Za-z]+)/;

    this.setState({mailC: event.nativeEvent.text});
    if(expreg.test(this.state.mailC)){

      console.log('es valido');
    }else{
      console.log('no es valido aun');
    }
   }
   sendMail(){
     this.props.setLoadingTrue()
     this.props.sendMail(this.state.nameC, this.state.phoneC, this.state.mailC)
   }

   componentWillReceiveProps(nextProps){

     if (nextProps.messageSuccess.ok == true){
        this.setState({styleMail: styles.textSuccess})
     }else{
        this.setState({styleMail: styles.textFailure})
     }
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
            <Row>
              <Text style={this.state.styleMail} >{this.props.messageSuccess.statusText}</Text>
            </Row>
          </Grid>
          <View style={{ flex: 1 }}>
            <Spinner visible={this.props.loading} textStyle={{color: '#FFF'}} />
          </View>
          <Form style={styles.form}>
            <Item style={styles.item}>
              <Icon style={styles.icon} active name="md-contact"/>
              <Input style={styles.input} onChange={event => this.handleName(event)} placeholder="Nombre" />
            </Item>
            <Item style={styles.item}>
              <Icon style={styles.icon} active name="logo-whatsapp"/>
              <Input style={styles.input}
                  maxLength={10}
                  onChange={event => this.handlePhone(event)}
                  placeholder="Telefono(Whatsapp)"
                  keyboardType={'phone-pad'}
                />
            </Item>
            <Item style={styles.item}>
              <Icon style={styles.icon} active name="ios-mail"/>
              <Input style={styles.input}  keyboardType={'email-address'} onChange={event => this.handleEmail(event)} placeholder="Correo electronico" />
            </Item>
            <Button style={styles.button} block info onPress={() => this.sendMail()}>
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
    resetState: () => dispatch(resetState()),
    setLoadingTrue: () => dispatch(setLoadingTrue()),
    popRoute: key => dispatch(popRoute(key)),
    sendMail: (name, phone, email) => dispatch(sendMail(name, phone, email)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  messageSuccess: state.list.messageSuccess,
  loading: state.list.loading,
});


export default connect(mapStateToProps, bindAction)(ContactUs);
