
import createDataContext from './createDataContext'
 import jsonServer from '../API/Jsonserver'
    
  // reducer fucntion
   const blogReducer=(state,action)=>{
       switch(action.type){


        case 'get_blogposts' :
            return action.payload

         case 'delete_blogpost':
             return state.filter(blogPost=> blogPost.id !== action.payload )

        //case'add_blogpost':
        //return [...state, {id: Math.floor(Math.random()* 99999 ),title: action.payload.title, content: action.payload.content}]

        case 'edit_blogpost' :
            return state.map((blogPost)=>{
         return  blogPost.id=== action.payload.id ? action.payload : blogPost
                
            })
         
        default:
            return state

       }
   }

// api call to get blogposts
 function getBlogPosts(dispatch) {
    return async () => {
        const response = await jsonServer.get('/blogposts')
       
        //call dispatch

dispatch({type:'get_blogposts', payload:response.data})
    }

}

    const addBlogPost =(dispatch)=>{
       
        return async(title,content, callback) => {
        await jsonServer.post('/blogposts', {title,content}) ;
        // argument comming from create screen
        //{dispatch({type: 'add_blogpost',payload:  {title,content}});
        
        if (callback){
            callback();
        }
        };
        

    }
    
    const deleteBlogPost =(dispatch)=>{

        return async(id) =>{
            await jsonServer.delete(`/blogposts/${id}`)
            // to update the list after deleting
            {dispatch({type: 'delete_blogpost', payload:id})}
        }
        
   
    }

    const editBlogPost= (dispatch)=>{

        return async (id, title,content, callback) =>{
            await jsonServer.put(`/blogposts/${id}`, {title,content})
            
            
            dispatch({type: 'edit_blogpost', payload:{id,title,content}});
        if (callback){
            callback()
        }
    }
   
    }

     

  
 
export const {Context, Provider} = createDataContext(
    blogReducer,
     {addBlogPost,deleteBlogPost, editBlogPost,getBlogPosts},
     //mock content fthat will show when the app loads
    []
    
    )







