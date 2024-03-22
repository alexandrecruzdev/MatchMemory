import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonNav = (props) => {

    const [isPressed,setIsPressed] = useState(false)
    
    const handlerOnPress =  () => {
        setIsPressed(!isPressed)
    }
    
    return (
       
                <TouchableOpacity onPress={handlerOnPress} style={styles.button}>
                <Text style={styles.text}>
                    {'<'}
                </Text>
                </TouchableOpacity>
             
            
        
        
    );
};

const styles = StyleSheet.create({

    button: {
        alignItems:'center',
        justifyContent:'center',
        width:40,
        height:40,
        borderRadius:4,
        padding:8,
        backgroundColor: 'rgb(242,242,242)',
    },

    text: {
        color:'rgb(59,66,196)',
        fontWeight:'bold'
    },

   

});

export default ButtonNav;
