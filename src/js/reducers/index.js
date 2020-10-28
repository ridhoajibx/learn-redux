import { ADD_ARTICLE } from "../constant/action-type";

const initialState = {
    articles: []
};

function rootReducer ( state = initialState, action ) {
    if (actiom.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        })
    }
    return state;
}

export default rootReducer;