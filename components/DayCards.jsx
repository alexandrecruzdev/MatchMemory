import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const DayCards = (props) => {

    const [isSelected,setIsSelected] = useState(false)
    
    const handlerOnPress =  () => {
        setIsSelected(!isSelected)
    }
    
    return (
        <TouchableOpacity onPress={handlerOnPress}>
            <View style={isSelected ? styles.cardSelected : styles.card}>
                <Text style={isSelected ? styles.dayWeekSelected : styles.dayWeek}>
                    {props.dayWeek}
                </Text>
                <Text  style={isSelected ? styles.dayMonthSelected : styles.dayMonth}>
                    {props.dayMonth}
                </Text>
            </View>
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    cardSelected: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgb(59,66,196)',
        width: 80,
        height: 80,
        borderRadius: 26,
        marginRight:8
    },
    dayWeekSelected: {
        color: 'white',
        marginBottom: 8
    },
    dayMonthSelected: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 26

    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgb(242,242,242)',
        width: 80,
        height: 80,
        borderRadius: 26,
        marginRight:8
    },
    dayWeek: {
        color: 'black',
        marginBottom: 8
    },
    dayMonth: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 26

    },

});

export default DayCards;
