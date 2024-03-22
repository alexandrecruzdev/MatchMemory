import React from 'react'
import { View, SafeAreaView, Text, ScrollView, StyleSheet, Image, Button, TouchableOpacity,TextInput } from 'react-native';

const EntryText = (props) => {
    return (
        <View>
             <Text style={styles.textHeadingDark}>
                       {props.label}
                    </Text>
                    <TextInput placeholderTextColor='black' style={styles.textInputStyle} placeholder={props.placeholder}/>
        </View>
    )
}

const styles = StyleSheet.create({
        textInputStyle:{
        height:40,
        backgroundColor:'rgb(242,242,242)',
        borderRadius:10,
        margin:8,
        padding:8
    },
    textHeadingDark: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        margin:8
    },
})
export default EntryText