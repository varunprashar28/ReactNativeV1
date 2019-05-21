import React from 'react'
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native'
import { PrimaryColor } from '../../constants'

export const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <Modal
      transparent={true}
      visible={loading}
    >
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {loading &&
          <View style={styles.loading}>
            <ActivityIndicator size='large' color={PrimaryColor} />
          </View>
        }
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: '#edeff2',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
