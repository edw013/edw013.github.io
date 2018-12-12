import React, { Component } from "react";

class Post extends Component {
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
        fetch("http://localhost:5000/posts").then(
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
        const { error, isLoaded } = this.state;

        console.log(this.state.posts);
        let postHTML = this.state.posts.map(post =>
            <Post key={post._id} value={post} />
        );

        if (error) {
            return <div>Error: {error.message}</div>;
        }
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
            
        return postHTML;
    }
}

export default Blog;