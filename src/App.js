import { Component } from 'react';
import './App.css';
import { PostCard } from './components/PostCard';
import { loadPosts } from './components/utils/load-post'


class App extends Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  }

  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <div className="App">
          {posts.map(post => (
            <PostCard
              key={post.id}
              props={post}
            />
          ))}
        </div>
      </section>
    );
  }
}



export default App;
