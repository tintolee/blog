import React , {useContext} from 'react'
import { StyleSheet ,} from 'react-native'
import { Context } from '../context/blogContext'
import BlogPostForm from '../Components/BlogPostForm'
import { NavigationActions } from 'react-navigation'


export default function CreateScreen({navigation}) {
  
       const {addBlogPost} = useContext(Context)
  
       return <BlogPostForm  onSubmit={(title,content)=> {
           addBlogPost(title,content, ()=> navigation.navigate('Index'))
       }}/>
    
}




const styles= StyleSheet.create({
 


})