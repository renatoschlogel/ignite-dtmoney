import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './header.styles';


export function Header () {
  return (
    <Container>
      <Content>

   
        <img src={logoImg} alt="dt money"/>
        <button type="button">
          Nova Transação
        </button>
       </Content>
    </Container>
  )
}