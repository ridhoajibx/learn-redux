import { ADD_ARTICLE } from "../constant/action-type";

export function AddArticle(payload) {
    return { type: ADD_ARTICLE, payload }
}