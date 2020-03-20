import React,  {Component} from 'react'
class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            blogTitle: "",
            blogPost: "",
            
         }
    }
    handleSubmission = (event) => {
        event.preventDefault();
        this.setState({
            blogTitle: "",
            blogPost: "",
        })
        this.props.updateBlog(this.state)
    }
    handleChange = (event) => {
        if(event.target.name == "blogTitle"){
            this.setState({blogTitle :event.target.value})
        }else if (event.target.name == "blogPost"){
            this.setState({blogPost: event.target.value})
        }
    }
    render() { 
        return ( 
            <div>
                <form action="">
                    <fieldset>
                        <legend>Blog Entry</legend>
                        <label htmlFor="">Blog Title</label>
                        <input type="text" name="blogTitle" id="blogTitle" onChange = {this.handleChange} value = {this.state.blogTitle}/>
                        <label htmlFor="">Blog Post</label>
                        <input type="text" name="blogPost" id="blogPost" onChange = {this.handleChange} value = {this.state.blogPost}/>
                   <button onClick ={this.handleSubmission}>Submit Post</button>
                    </fieldset>
                </form>
                <div>
                
                </div>
            </div>
         );
    }
}
 
export default BlogPost;