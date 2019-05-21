/**
 * @name Login
 * @author Varun
 * @description Login container component
 */

import { get } from 'lodash'
import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { NavigationActions, StackActions } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container } from './shared'



class SplashScreen extends Component<any, any> {

  static navigationOptions = {
    header: null,
  }

  static getDerivedStateFromProps(props: any, state: any) {
    if (get(props, 'auth.token')) {
      props.navigation.dispatch(
        StackActions.reset({
         index: 0,
         actions: [NavigationActions.navigate({ routeName: 'Main' })],
        }))
        // props.navigation.navigate('Dashboard')
    } else {
      props.navigation.navigate('Login')
    }
    return {isLoading: false}
  }

  constructor(props: any) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }
  render() {
    const { isLoading } = this.state

    return (
      <Container style={{ backgroundColor: '#f1f3f6', padding: '10%' }} loading={isLoading}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <Text>Loading...</Text>
        </View>
      </Container>
    )
  }
}

const MapStateToProps = (state: any) => ({
  auth: state.auth,
})


export default connect(MapStateToProps)(SplashScreen)
