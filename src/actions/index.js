import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=kanmir68';

export function fetchPosts(callback, error) {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
        .catch(e => error());
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values, callback, error) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback()).catch(e => error());
    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id, callback, error) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .catch(e => error());
    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id, callback, error) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(() => callback())
        .catch(e => error());
    return {
        type: DELETE_POST,
        payload: id
    }
}