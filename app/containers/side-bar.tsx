import { get, has } from 'lodash'
import React from 'react'
import { NavigationActions, StackActions } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container } from '../components/shared'
import { Header } from '../components/side-bar/header'
import { Menu } from '../components/side-bar/menu'
import { logoutRequest } from '../redux-store/actions'
import { MenuItem } from '../types/menu'
import { User } from '../types/user'

const Routes: MenuItem[] = [
  { key: 'Home', title: 'Dashboard' },
  { key: 'Logout', title: 'Logout' },
]

interface State {
  user: User
}

class SideBar extends React.Component<any, State> {
  static getDerivedStateFromProps(props: any, state: State) {
    if (has(props, 'auth.user')) {
      return {
        user: get(props, 'auth.user'),
      }
    } else {
      props.navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Auth' })],
        }))
    }
    // Return null to indicate no change to state.
    return null
  }
  constructor(props: any) {
    super(props)
    this.state = {
      user: {},
    }
  }
  render() {
    const { navigation } = this.props
    const navigate = (key: string) => {
      if (key === 'Logout') {
        this.props.logoutRequest()
      } else {
        // navigation.navigate(key)
        navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({
              routeName: 'Main',
              action: NavigationActions.navigate({
                routeName: key,
              }),
            })],
          }))
      }
      navigation.closeDrawer()
    }
    const { user } = this.state
    return (
      <Container>
        <Header user={user} />
        <Menu routes={Routes} navigate={navigate} />
      </Container>
    )
  }
}

const MapStateToProps = (state: any) => ({
  auth: state.auth,
})

const MapDispatchToProps = (dispatch: any) => bindActionCreators({ logoutRequest }, dispatch)


export default connect(MapStateToProps, MapDispatchToProps)(SideBar)
