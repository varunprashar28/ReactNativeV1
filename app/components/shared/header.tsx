import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base'
import React from 'react'
import { PrimaryColor } from '../../constants'

const AppHeader = ({ title, props }: { title: string, props: any }) => (
  <Header style={{ backgroundColor: PrimaryColor }}>
    <Left>
      <Button
        transparent={true}
        onPress={() => props.navigation.openDrawer()}
      >
        <Icon name='menu' />
      </Button>
    </Left>
    <Body>
      <Title>{title}</Title>
    </Body>
    <Right>
      {/* <Button transparent={true}>
        <Icon name='notifications' />
      </Button> */}
    </Right>
  </Header>
)

export default AppHeader
