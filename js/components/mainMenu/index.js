import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';


// import styles from './style';

export default class MainMenu extends Component{
  render(){
    return(
      <Container>
        <Header>

          <Body>
            <Title>Publicidad</Title>
          </Body>

        </Header>
        <Content>
          <Text>
            "Hola Mundo"
          </Text>
        </Content>
        {/* <Footer>
          <FooterTab>
            <Text>Footer</Text>
          </FooterTab>
        </Footer> */}
      </Container>
    )
  }
}
