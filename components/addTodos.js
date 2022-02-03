import React, { useState} from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';


export default function AddTodos({submitHandler}) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val)
  }
  return (
    <View>
      <TextInput
       style={styles.input} 
       placeholder='new todo...'
       onChangeText={changeHandler} 
      />
      <View style={styles.button}>
        <Button 
          onPress={() => submitHandler(text)} 
          title='Add Todo' 
          color='#fff' />
      </View>
      
    </View>
  )
} 
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  button: {
    backgroundColor: 'teal',
    fontWeight: 'bold'
  }
})