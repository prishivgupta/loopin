export const authorListReducer = (state=[],action) => {

    switch (action.type) {

        case 'AUTHOR_LIST_SUCCESS':
            
            return action.payload;
    
        default:
            return state;

    }

}