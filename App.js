import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, ToastAndroid }  from 'react-native'
import AddItem from './components/AddItem';
// import { uuid } from 'uuidv4';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Egg'},
    {id: 3, text: 'Bread'},
  ])

  
  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }
  // const showMessage = (id) => {
  //   ToastAndroid.show("HEllo"+id, ToastAndroid.SHORT);
  // }

  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <AddItem />
      <FlatList 
      data={items}
      renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} /> } />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App
