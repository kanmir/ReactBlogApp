import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            delete state[action.payload];
            return state;
        case FETCH_POST:
            if (!(action && action.payload && action.payload.data)) return state;
            const post = action.payload.data;
            return { ...state, [post.id]: post};
        case FETCH_POSTS: 
            const posts = {};
            action.payload.data.forEach(post => posts[post.id] = post);
            return posts;
        default:
            return state;
    }
}