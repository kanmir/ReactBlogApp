import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {

    componentDidMount() {
        if (!this.props.post) {
            const { id } = this.props.match.params;
            this.props.fetchPost(id, null, () => {this.props.history.push('/404')});
        }
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(
            id,
            () => {this.props.history.push('/')},
            () => {this.props.history.push('/404')}
        );
    }

    render() {
        const { post } = this.props;
        if (!post) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <div className="control-btn clearfix">
                    <Link className="btn btn-light float-left" to="/">Back To Home</Link>
                    <button className="btn btn-danger float-right" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
                </div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);