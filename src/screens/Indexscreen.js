import React , {useContext, useEffect}from 'react'
import { View, Text, FlatList , StyleSheet,TouchableOpacity} from 'react-native'
import {Context}from '../context/blogContext'
import { Feather } from '@expo/vector-icons';



export default function  IndexScreen ({navigation}) {


  const {state,deleteBlogPost,getBlogPosts}=useContext(Context)

useEffect(() => {
  getBlogPosts()

  // to make the index page reload each time its the focus on the screen
  navigation.addListener('didFocus', ()=>{getBlogPosts()})


  return () => {
    //cleanup
    listener.remove()
  }
}, [])
  return (
    <View>
      
      <FlatList
        data={state}
         keyExtractor={(blogPosts)=>blogPosts.id}
         renderItem={({item})=> {

          return (
            <TouchableOpacity onPress ={()=> navigation.navigate('Show', {id:item.id})}>
            <View style={styles.row}>
            <Text  style={styles.title}> {item.title} - {item.id}</Text>
            <TouchableOpacity  onPress={()=>deleteBlogPost(item.id)}> 
            <Feather name="trash" size={24} color="black" />
            </TouchableOpacity>
          </View>
          </TouchableOpacity>
          )}
          
        
        }
      />
    </View>
  )
}

IndexScreen.navigationOptions=({navigation})=>{

  return{

    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity> 
    )
  }
}


const styles= StyleSheet.create({

  row:{
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingVertical:20,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'gray',
    paddingHorizontal:10
  },
  title:{
    fontSize:18
  }
})