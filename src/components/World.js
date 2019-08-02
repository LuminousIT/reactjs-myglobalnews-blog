import React, {Component} from 'react'
import axios from 'axios'

class World extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?sources=independent,the-washington-post,associated-press&apiKey=c7e164ceba2b427fa40d2873438d4627')
            .then(res =>{
                //console.log(res.data.articles)
                this.setState({
                    posts: res.data.articles 
                })
            })
    }

    render() {
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return ( 
                    <div className="post card">
                        <div className="card-content" >
                            <span className="card-title"> {post.title} </span>
                            <p>{post.description}</p>
                            <p> Post by: {post.author} </p>
                            <button className="button"><a href={post.url}> View Post </a></button>
                        </div>
                    </div>
                )
            })
        ) : (
            <h4> Loading Post... </h4>
        )

        return (
            <div>
                {postList}
            </div>
        )
    }
}

export default World