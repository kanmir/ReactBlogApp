import React, { Component } from 'react';
import  { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-control ${touched && error ? 'is-invalid': ''}`;
        return (
            <div className="form-group">
                <label htmlFor={field.id}>{field.label}</label>
                <input
                    id={field.id}
                    className={className}
                    type="text"
                    {...field.input}    
                />
                <div className="invalid-feedback">{ touched ? error: ''}</div>
            </div>
        );
    }

    onSubmit(values) {   
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
           <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
               <Field
                    id="title"
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    id="categories"
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    id="content"
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
           </form>
        );
    }
}

function validate(values) {
    const errors = {};
    
    if (!values.title) {
        errors.title = 'Enter a title!';
    }
    if (!values.categories) {
        errors.categories = 'Enter a categories!';
    }
    if (!values.content) {
        errors.content = 'Enter a content!';
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostNewForm',
})(connect(null, { createPost })(PostsNew));