import React from 'react'
import { FlatList, Text, TouchableHighlight, View } from 'react-native'
import { MenuItem } from '../../types/menu'

export const Menu = ({ routes, navigate }: { routes: MenuItem[], navigate: any }) => {
  return (
    <View style={{ flexGrow: 1, backgroundColor: '#f1f3f6' }}>
      <FlatList
        data={routes}
        contentContainerStyle={{ marginTop: 0 }}
        ItemSeparatorComponent={() => <View style={{ borderColor: '#f1f3f6', borderWidth: 1 }} />}
        renderItem={({ item }: { item: MenuItem }) => (
          <TouchableHighlight onPress={() => navigate(item.key)}>
            <View style={{ height: 50, paddingLeft: 10, backgroundColor: '#e2e0e0', justifyContent: 'center' }}>
              <Text>{item.title}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  )
}
