import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from '../components/shared'
import { Layout } from '../components/shared'
import ToastExample from '../ToastExample';

interface State {
  selectedDay?: { [key: string]: any }
  markedDates?: { [key: string]: any }
}

class Dashboard extends Component<any, State> {

  constructor(props: any) {
    super(props)
  }

  onPress = () => {
    ToastExample.show('Test Toast Example', ToastExample.SHORT);
  }

  render() {
    return (
      <Layout title='Dashboard' props={this.props}>
         <View style={{ marginTop: '5%' }}>
          <Button onPress={this.onPress}>Test Toast</Button>
        </View>
      </Layout >
    )
  }
}

const MapStateToProps = (state: any) => ({
})

const MapDispatchToProps = (dispatch: any) => bindActionCreators({ }, dispatch)

export default connect(MapStateToProps, MapDispatchToProps)(Dashboard)

