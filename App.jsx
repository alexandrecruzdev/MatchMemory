/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View,Text, SafeAreaView ,ScrollView, StyleSheet, useColorScheme} from 'react-native'

import AddTarefa from './components/AddTarefa';
const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
      <View style={styles.container}> 
        <AddTarefa/>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:'rgb(59,66,196)',
        flex:1
    }
})
export default App;
