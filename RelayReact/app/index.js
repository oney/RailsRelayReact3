import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Navigator,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import WelcomePage from './WelcomePage';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#262D36"
          barStyle="light-content"
        />
        <Navigator
          initialRoute={{ name: 'welcome' }}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={{
                LeftButton: (route, navigator, index, navState) => {
                  if (index > 0) return (
                    <TouchableOpacity style={styles.navigationLeftButton} onPress={navigator.pop}>
                      <Text style={styles.navigationLeftButtonText}> ‹ </Text>
                    </TouchableOpacity>
                  );
                },
                RightButton: (route, navigator, index, navState) => {},
                Title: (route, navigator, index, navState) => {
                  let title;

                  switch (route.name) {
                  default:
                    title = 'Welcome';
                    break;
                  }

                  return (
                    <View style={styles.navigationBarTitle}>
                      <Text style={styles.navigationBarTitleText}>{title}</Text>
                    </View>
                  );
                }
              }}
              style={styles.navigationBar}
            />
          }
          renderScene={(route, navigator) => {
            switch (route.name) {
            default:
              return (
                <View style={styles.content}>
                  <WelcomePage navigator={navigator} />
                </View>
              );
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigationBar: {
    backgroundColor: '#313B47'
  },
  navigationLeftButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4
  },
  navigationLeftButtonText: {
    color: '#FFF',
    fontSize: 32,
    lineHeight: 32,
    fontWeight: '200'
  },
  navigationBarTitle: {
    flex: 1,
    justifyContent: 'center'
  },
  navigationBarTitleText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500'
  },
  content: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 64
      },
      android: {
        paddingTop: 56
      }
    }),
    backgroundColor: '#F0F4F7'
  }
});