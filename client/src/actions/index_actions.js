import * as api from '../api/index_api.js';


export const getReviews = () => async (dispatch) => {
    try {
        
        const jsonresponse= await api.fetchPosts()
        const data = jsonresponse.data
        
        dispatch({ type: "FETCH_ALL", payload:  {"data":data}  });// for using payload.data
    
    } catch (error) {
      console.log(error);
    }
  };

  export const createReview = (post) => async (dispatch) => {
    try {

      const  jsonresponse  = await api.createPost(post);
      const data = jsonresponse.data
  
      dispatch({ type: "CREATE", payload: {"data":data} });
  

    } catch (error) {
      console.log(error);
    }
  };