import React from 'react'
import { Dimensions, View, ViewStyle } from 'react-native'
import NativeModal from 'react-native-modal'

const { width, height } = Dimensions.get('screen')
// import { PrimaryColor } from '../../constants'

interface ModalType {
  visible: boolean
  children: string | Element
  style?: ViewStyle
  onModalHide?: () => void
}

export const Modal = ({ visible, children, style, onModalHide }: ModalType) => {
  return (
    <NativeModal
      isVisible={visible}
      avoidKeyboard={true}
      style={{ justifyContent: 'center', alignSelf: 'center' }}
      onBackButtonPress={onModalHide}
      onBackdropPress={onModalHide}
      // onRequestClose={() => { alert("Modal has been closed.") }}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
    >
      <View style={[{ flexDirection: 'row', backgroundColor: '#f1f3f6', padding: 10, borderRadius: 2 }, style]}>
        {children}
      </View>
    </NativeModal>
  )
}

