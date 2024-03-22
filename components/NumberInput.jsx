import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const NumberInput = () => {
  const [number, setNumber] = useState('');

  const handleNumberChange = (text) => {
    // Validar a entrada para permitir apenas números
    const regex = /^[0-9]*$/;
    if (regex.test(text) || text === '') {
      setNumber(text);
    }
  };

  return (
    <View >
      <TextInput
        style={styles.textHeadingDark}
        placeholder="00"
        onChangeText={handleNumberChange}
        value={number}
        keyboardType="numeric"
        placeholderTextColor='black'
      />
    </View>
  );
};

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
   
},
});

export default NumberInput;
