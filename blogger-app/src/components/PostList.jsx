import React, { Component } from 'react'
class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                {this.props.blogArray.map((entry, Index) => {
                    return (
                        <div key = {Index}>
                            <p>Blog Title: {entry.blogTitle}</p>
                            <p>Blog Post: {entry.blogPost}</p>
                        </div>
                    )
                }
                )

                }
            </div>
        );
    }
}

export default PostList;