import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>My name is Ethan Wang.</p>
                <p>Website TODO list:</p>
                <ul>
                    <li>new posts</li>
                    <li>new comments</li>
                    <li>sidebar menu</li>
                    <li>comment chains</li>
                    <li>q&a section?</li>
                </ul>
            </div>
        )
    }
}

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome!</h1>
            </div>
        )
    }
}

export { About, Welcome };
