import { ADD_ARTICLE } from "../constant/action-type";

const initialState = {
    articles: []
};

function rootReducer ( state = initialState, action ) {
    if (actiom.type === ADD_ARTICLE) {
        state.articles.push(action.payload)
    }
    return state;
}

export default rootReducer;