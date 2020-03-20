import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import PostList from './PostList'
import BlogPost from './BlogPost'

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            blogArray: []
         }
    }
    updateBlog = (blog) => {
        this.state.blogArray.push(blog);
        this.setState({blogArray: this.state.blogArray}) 

        }
    
    render() { 
        return ( 
            <div>
                <Header/>
                
               
                <BlogPost updateBlog = {this.updateBlog}/>
                <PostList  blogArray = {this.state.blogArray} />
                <Footer/>
            </div>
         );
    }
}
 
export default AppContainer;