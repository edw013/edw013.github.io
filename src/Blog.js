import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

const POSTS_URL = "https://ethanwang-backend.herokuapp.com/posts";

const LOADING = "loading... shoutout heroku free tier!!"

class PostOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.value._id,
            title: props.value.title,
            preview: props.value.preview,
            date: props.value.date,
            lastUpdate: props.value.lastUpdate
        };
    }

    render() {
        const cardStyle = {
            "marginBottom": "10px"
        }

        const date = new Date(this.state.date);

        return (
            <Card style={cardStyle}>
                <Card.Body>
                    <Link to={"/blog/"+this.state.id}>
                        <Card.Title>{this.state.title}</Card.Title>
                    </Link>
                    <Card.Text>{this.state.preview}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{date.toString()}</Card.Footer>
            </Card>
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
        axios.get(POSTS_URL + "/" + this.state.id)
        .then(res => {
                this.setState({
                    isLoaded: true,
                    data: res.data
                });
            },
        )
        .catch(err => {
            this.setState({
                isLoaded: true,
                error: err.response.data
            })
        });
    }

    render() {
        const { error, isLoaded, data } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        }
        if (!isLoaded) {
            return <div>{LOADING}</div>;
        }
        
        const date = new Date(data.date);

        return (
            <div>
                <h1>{data.title}</h1>
                <p>{data.body}</p>
                <p>{date.toString()}</p>
            </div>
        );
    }
}

/* class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        };

        this.handleChangeField = this.handleChangeField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeField(key, event) {
        this.setState({
            [key]: event.target.value
        });
    }

    handleSubmit() {
        const { title, body } = this.state;

        axios.post(POSTS_URL + "/new", {
            title: title,
            body: body
        })
        .then(res => {
                this.props.history.push("/blog/posts/" + res.data.id);
            }
        )
        .catch(err => console.error(err));
    }

    render() {
        const { title, body } = this.state;

        return (
            <div>
                <input value={title}
                    onChange={ev => this.handleChangeField("title", ev)}
                    placeholder="Post Title"
                />
                <textarea value={body}
                    onChange={ev => this.handleChangeField("body", ev)}
                    placeholder="Post Body"
                />
                <button onClick={this.handleSubmit}>Submit</button>
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
        axios.get(POSTS_URL + "/" + this.state.postId + "/comments")
        .then(res => {
                this.setState({
                    isLoaded: true,
                    comments: res.data.comments
                });
            }
        )
        .catch(err => {
                this.setState({
                    isLoaded: true,
                    error: err.response.data
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

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: props.value,
            body: ""
        };

        this.handleChangeField = this.handleChangeField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeField(key, event) {
        this.setState({
            [key]: event.target.value
        });
    }

    handleSubmit() {
        const { postId, body } = this.state;

        axios.post(POSTS_URL + "/" + postId + "/comments/new", {
            body: body
        })
        .then(res => {
                this.setState({ body: "" });
            }
        )
        .catch(err => console.log(err));
    }

    render() {
        const { body } = this.state;

        return (
            <div>
                <textarea value={body}
                    onChange={ev => this.handleChangeField("body", ev)}
                    placeholder="Comment Body"
                />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
} */

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
        axios.get(POSTS_URL)
        .then(res => {
                this.setState({
                    isLoaded: true,
                    posts: res.data.posts
                });
            }
        )
        .catch(err => {
                this.setState({
                    isLoaded: true,
                    error: err.response.data
                });
            }
        );
    }

    render() {
        const { error, isLoaded, posts } = this.state;

        if (error) {
            return <div>Error: {error}</div>;
        }
        if (!isLoaded) {
            return (
                <div>
                    {LOADING}
                </div>
            );
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
