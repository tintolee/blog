import React , {useContext} from 'react'
import {  StyleSheet , } from 'react-native'
import { Context } from '../context/blogContext'
import BlogPostForm from '../Components/BlogPostForm'


export default function EditScreen({navigation}) {
    const id =navigation.getParam('id')
    const {state,editBlogPost} = useContext(Context)
    const blogPosts= state.find((blogPosts)=> blogPosts.id=== id)
      
   
    return <BlogPostForm 
      initialValues={{title:blogPosts.title, content: blogPosts.content}}
    
    onSubmit={(title,content)=>{
        editBlogPost(id,title,content, ()=> navigation.pop());
    }}/>

   
      
    
    
}




const styles= StyleSheet.create({
 input:{
     fontSize:18,
     borderColor:'black',
     borderWidth:1,
     marginBottom:15,
     padding:5,
     margin: 5
 },

 label:{
  fontSize:20,
  marginBottom:5,
  marginLeft: 5

 }


})