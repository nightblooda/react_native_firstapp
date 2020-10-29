import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome' 

const AddItem = () => {
  return (
    <View>
      <TextInput placeholder='Add text...' style={styles.input} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>
          <Icon name='plus' size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  }
});

export default AddItem
