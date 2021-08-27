import axios from 'axios';

export const getAuthors = (author) => async (dispatch) => {

try {

    const {data} = await axios.get(`http://openlibrary.org/search/authors.json?q=${author}`);

    dispatch({type:'AUTHOR_LIST_SUCCESS', payload: data});
    
} catch (error) {

    console.log(error);
    
}

}