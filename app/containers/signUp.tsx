/**
 * @name SignUp
 * @author Varun
 * @description SignUp container component
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
import { signUpRequest } from '../redux-store/actions'
import Validate from '../utils/validate'

interface State {
  fullName: string
  fullNameError: string | undefined
  email: string
  emailError?: string | undefined
  password: string
  passwordError?: string | undefined
  confirmPassword: string
  confirmPasswordError?: string | undefined
  error?: string
  isLoading: boolean
  users: any[]
}

class SignUp extends Component<any, State> {

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
    }
    return {isLoading: false}
  }

  constructor(props: any) {
    super(props)
    this.state = {
      fullName: '',
      fullNameError: '',
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      confirmPassword: '',
      confirmPasswordError: '',
      error: undefined,
      isLoading: false,
      users: [],
    }
  }

  onError = (error: string) => {
    this.setState({
      error: error,
      isLoading: false,
    })
  }

  onPress = () => {
    const { fullName, email, password, confirmPassword } = this.state
    if (!email || !password || !fullName || !confirmPassword || (password !== confirmPassword)) {
      this.setState({
        fullNameError: Validate('Full Name', fullName),
        emailError: Validate('Email', email, { email: true }),
        passwordError: Validate('Password', password),
        confirmPasswordError: Validate('Confirm Password', confirmPassword, { confirmPassword: password }),
      })
      return
    } else {
      this.setState({
        isLoading: true,
      })
      this.props.signUpRequest({ fullName, email, password }, this.onError)
    }
  }

  render() {
    // tslint:disable-next-line:max-line-length
    const { fullName, fullNameError, email, emailError, password, passwordError, confirmPassword, confirmPasswordError, error, isLoading } = this.state

    return (
      <Container style={{ backgroundColor: '#f1f3f6', padding: '10%' }} loading={isLoading}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <View style={{ backgroundColor: '#FFFFFF', padding: '5%', borderRadius: 4, elevation: 2 }}>
            <View style={{ marginBottom: '5%' }}>
              <Image source={APP_LOGO} style={{ height: 45, width: 280 }} resizeMode='contain' />
            </View>
            <TextField
              label='Full Name'
              value={fullName}
              onChangeText={(val) => this.setState({ fullName: val })}
              error={fullNameError}
              onEndEditing={() => { this.setState({ fullNameError: Validate('fullName', fullName) }) }}
            />
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
            <TextField
              label='Confirm Password'
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={(val) => this.setState({ confirmPassword: val })}
              error={confirmPasswordError}
              onEndEditing={() => {
                this.setState({ confirmPasswordError: Validate('confirmPassword', confirmPassword, { confirmPassword: password }) })
              }}
            />
            {error && <ErrorText style={{ marginTop: '5%' }}>{error}</ErrorText>}
            <View style={{ marginTop: '5%' }}>
              <Button onPress={this.onPress}>SignUp</Button>
            </View>
            <View style={{ marginTop: '5%' }}>
              <Button onPress={() => this.props.navigation.navigate('Login')}>Go to Login</Button>
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

const MapDispatchToProps = (dispatch: any) => bindActionCreators({ signUpRequest }, dispatch)


export default connect(MapStateToProps, MapDispatchToProps)(SignUp)
