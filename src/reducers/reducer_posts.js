import { FETCH_POSTS, CREATE_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS: 
            const posts = {};
            action.payload.data.forEach(post => posts[post.id] = post);
            return posts;
        default:
            return state;
    }
}