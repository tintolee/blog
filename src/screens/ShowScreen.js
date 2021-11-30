import React , {useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/blogContext'
import { EvilIcons } from '@expo/vector-icons';


export default function ShowScreen({navigation}) {
  const {state} = useContext(Context)
 const blogPosts= state.find((blogPosts)=> blogPosts.id=== navigation.getParam('id'))

  
   
    return (
        <View>
            <Text> {blogPosts.title} </Text>
            <Text> {blogPosts.content} </Text>
        </View>
    )
}




ShowScreen.navigationOptions=({navigation})=>{

    return{
  
      headerRight: () => (
        <TouchableOpacity onPress={() => 
        navigation.navigate('Edit', {id: navigation.getParam('id')})}>
          <EvilIcons name="pencil" size={30} />
        </TouchableOpacity> 
      )
    }
  }


const styles= StyleSheet.create({



})