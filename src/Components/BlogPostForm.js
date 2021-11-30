import React , {useState}from 'react'
import { View, Text , StyleSheet,TextInput,Button} from 'react-native'

export default function BlogPostForm({onSubmit, initialValues}) {
      
    const [title, settitle] = useState( initialValues.title)
    const [content, setcontent] = useState( initialValues.content)
  
     
    return (
        <View>
            <Text style={styles.label}> Enter Title: </Text>
            <TextInput style={styles.input} value={title}    onChangeText={(e)=> settitle(e)}/>
            <Text style={styles.label}>  Enter Content: </Text>
            <TextInput style={styles.input} value={content}   onChangeText={(e)=> setcontent(e)}/>
              <Button title='Save blog post' onPress={()=> onSubmit(title,content)} />
        </View>
    )
}


BlogPostForm.defaultProps={

    initialValues:{
        title:'',
        content:''
    }
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