import React, { Component } from "react";

class PostOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.value._id,
            title: props.value.title,
            body: props.value.body,
            date: props.value.date,
            numComments: props.value.numComments
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.body}</p>
                <p>Posted on: {this.state.date}</p>
                <p>Comments: {this.state.numComments}</p>
            </div>
        );
    }
}

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: props.value._id,
            user: props.value.user,
            body: props.value.body
        };
    }
}

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        };
    }

    componentDidMount() {
        fetch("https://ethanwang-backend.herokuapp.com/posts").then(
            res => res.json()
        ).then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    posts: result.posts
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }

    render() {
        const { error, isLoaded, posts } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        }
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
            
        return (
            posts.map(post =>
                <PostOverview key={post._id} value={post} />
            )
        );
    }
}

export default Blog;