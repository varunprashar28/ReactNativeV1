import React from 'react'
import { Text, View } from 'react-native'
import { createAppContainer, createBottomTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation'
import SplashScreen from './components/SplashScreen'
import Dashboard from './containers/dashboard'
import Login from './containers/login'
import SideBar from './containers/side-bar'
import signUp from './containers/signUp'

const MainNavigator = createDrawerNavigator({
  Dashboard: { screen: Dashboard },
}, {
    contentComponent: (props: any) => <SideBar {...props} />,
    initialRouteName: 'Dashboard',
})

const AuthNavigator = createStackNavigator({
  SplashScreen: {screen: SplashScreen},
  Login: { screen: Login },
  SignUp: { screen: signUp},
})

class Tab2Screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tab2!</Text>
      </View>
    )
  }
}

class Tab3Screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tab3!</Text>
      </View>
    )
  }
}

class Tab4Screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tab4!</Text>
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: MainNavigator,
  Tab2: Tab2Screen,
  Tab3: Tab3Screen,
  Tab4: Tab4Screen,
})

const AppNavigator = createStackNavigator({
  Auth: { screen: AuthNavigator },
  Main: { screen: TabNavigator },
},
{
  initialRouteName: 'Auth',
  headerMode: 'none',
})

const App = createAppContainer(AppNavigator)

export default App
