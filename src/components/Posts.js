import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';


 class Posts extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) { //checks to see if you need to add new post to post list
      console.log('Props changed');
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    console.log('POSTS', this);
    const postItems = this.props.posts.map( (post, id) =>
      <div key={id}><h3>{post.title}</h3>
      <p>{post.body}</p></div>);

    return (
      <div>
        <h1>
          Posts
        </h1>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item // adds to new post list
});

export default connect(mapStateToProps, { fetchPosts })(Posts);