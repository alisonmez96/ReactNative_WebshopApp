import React from 'react';
import { View, SafeAreaView, StyleSheet, Platform, Button, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';

const ChatScreen = props => {
  return (
    <SafeAreaView style={styles.centered}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>ChatScreen!</Text>
      </View>
  </SafeAreaView>
  )
};

ChatScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Chat',
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Chat"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      )
    };
  };

const styles = StyleSheet.create({
    centered: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      input:{
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '80%',
        borderRadius: 10,
      },
      btnSend:{
          fontSize: 20
      }
});

export default ChatScreen;
