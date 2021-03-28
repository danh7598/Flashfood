import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
//import Login from './Login'
import Login from './screens/Login'
import Register from './screens/Register'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style={'dark'}/> */}
      <Login/>
      {/* <Register/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
