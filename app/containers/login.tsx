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
import { APP_LOGO } from '../assets/images'
import { Button, Container, ErrorText } from '../components/shared'
import { loginRequest } from '../redux-store/actions'
import Validate from '../utils/validate'

interface State {
  email: string
  emailError?: string | undefined
  password: string
  passwordError?: string | undefined
  error?: string
  isLoading: boolean
}

class Login extends Component<any, State> {

  static navigationOptions = {
    header: null,
  }

  static getDerivedStateFromProps(props: any, state: State) {
    if (get(props, 'auth.token')) {
      props.navigation.dispatch(
        StackActions.reset({
         index: 0,
         actions: [NavigationActions.navigate({ routeName: 'Main' })],
        }))
        // props.navigation.navigate('Dashboard')
    }
    return null
  }

  constructor(props: any) {
    super(props)
    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      error: undefined,
      isLoading: false,
    }
  }

  onError = (error: string) => {
    this.setState({
      error: error,
      isLoading: false,
    })
  }

  onPress = () => {
    const { email, password } = this.state
    if (!email || !password) {
      this.setState({
        emailError: Validate('Email', email, { email: true }),
        passwordError: Validate('Password', password),
      })
      return
    } else {
      this.setState({
        // isLoading: true,
      })
      this.props.loginRequest({ email, password }, this.onError)
    }
  }

  render() {
    const { email, emailError, password, passwordError, error, isLoading } = this.state

    return (
      <Container style={{ backgroundColor: '#f1f3f6', padding: '10%' }} loading={isLoading}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <View style={{ backgroundColor: '#FFFFFF', padding: '5%', borderRadius: 4, elevation: 2 }}>
            <View style={{ marginBottom: '5%' }}>
              <Image source={APP_LOGO} style={{ height: 45, width: 280 }} resizeMode='contain' />
            </View>
            <TextField
              label='Email'
              value={email}
              onChangeText={(val) => this.setState({ email: val })}
              error={emailError}
              onEndEditing={() => { this.setState({ emailError: Validate('email', email, { email: true }) }) }}
            />
            <TextField
              label='Password'
              secureTextEntry={true}
              value={password}
              onChangeText={(val) => this.setState({ password: val })}
              error={passwordError}
              onEndEditing={() => { this.setState({ passwordError: Validate('password', password) }) }}
            />
            {error && <ErrorText style={{ marginTop: '5%' }}>{error}</ErrorText>}
            <View style={{ marginTop: '5%' }}>
              <Button onPress={this.onPress}>Login</Button>
            </View>
            <View style={{ marginTop: '5%' }}>
            <Button onPress={() => this.props.navigation.navigate('SignUp')}>
          SignUp
          </Button>
        </View>
          </View>
        </View>
      </Container>
    )
  }
}

const MapStateToProps = (state: any) => ({
  auth: state.auth,
})

const MapDispatchToProps = (dispatch: any) => bindActionCreators({ loginRequest }, dispatch)


export default connect(MapStateToProps, MapDispatchToProps)(Login)
