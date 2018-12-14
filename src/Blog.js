import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

const POSTS_URL = "https://ethanwang-backend.herokuapp.com/posts";

class PostOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.value._id,
            title: props.value.title,
            body: props.value.body,
            date: props.value.date,
            lastUpdate: props.value.lastUpdate,
            numComments: props.value.numComments
        };
    }

    render() {
        return (
            <div>
                <Link to={"/blog/posts/"+this.state.id}><h1>{this.state.title}</h1></Link>
                <p>{this.state.body}</p>
                <p>Posted on: {this.state.date}</p>
                <p>Comments: {this.state.numComments}</p>
            </div>
        );
    }
}

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            error: null,
            isLoaded: false,
            data: null
        };
    }

    componentDidMount() {
        fetch(POSTS_URL + "/" + this.state.id).then(
            res => res.json()
        ).then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    data: result
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
        const { id, error, isLoaded, data } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        }
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
            
        return (
            <div>
                <h1>{data.title}</h1>
                <p>{data.body}</p>
                <p>Posted on: {data.date}</p>
                <hr />
                <Comments value={id} />
            </div>
        );
    }
}

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: props.value,
            error: null,
            isLoaded: false,
            comments: []
        };
    }

    componentDidMount() {
        fetch(POSTS_URL + "/" + this.state.postId + "/comments").then(
            res => res.json()
        ).then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    comments: result.comments
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
        const { error, isLoaded, comments } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        }
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
            
        return (
            comments.map(comment =>
                <div key={comment._id}>
                    <p>{comment.body}</p>
                    <p>Posted on: {comment.date}</p>
                </div>
            )
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
        fetch(POSTS_URL).then(
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
export const BlogPost = withRouter(Post);
