import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        const posts = this.props.posts;
        return Object.keys(posts).map(id => {
            return (
                <li className="list-group-item" key={id}>
                    {posts[id].title}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="text-right">
                    <Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);