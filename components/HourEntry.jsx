import React from 'react'
import { View, SafeAreaView, Text, ScrollView, StyleSheet, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import NumberInput from './NumberInput';
const HourEntry = (props) => {
    return (
        <View>
            <Text style={styles.textHeadingDark}>
                Start time
            </Text>
            <View style={styles.HourEntryContainer}>
                <NumberInput />
                <Text style={styles.textHeadingDark}>:</Text>
                <NumberInput />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    HourEntryContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        margin: 8,
        backgroundColor: 'rgb(242,242,242)',
        borderRadius: 18,
        width: 110
    },

    textInputStyle: {
        height: 40,
        backgroundColor: 'rgb(242,242,242)',
        borderRadius: 10,
        margin: 8,

    },
    textHeadingDark: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        paddingHorizontal:8

    },
})
export default HourEntry