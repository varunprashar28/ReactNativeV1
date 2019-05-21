import React from 'react'
import { Image, StyleSheet, Text , View } from 'react-native'
import Config from 'react-native-config'
import { User } from '../../types/user'
import { PROFILE_IMAGE } from '../../assets/images'
export const Header = ({user}: {user: User}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Image source={PROFILE_IMAGE} style={{ width: 100, height: 100, borderRadius: 50 }} />
      </View>
      <View style={{ paddingBottom: '5%', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.headingText}> {user.fullName} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
  },
  headerContainer: {
    // flex: 1,
    // flexDirection: 'row',
    // height: 120,
  },
  headerLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
  },
  headerRight: { flex: 5 },
})
