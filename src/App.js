import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    posts: []
  }

  loadPosts = async () => {
    const connectPost = fetch('https://jsonplaceholder.typicode.com/posts');
    const connectImg = fetch('https://jsonplaceholder.typicode.com/photos');
    const [posts, photos] = await Promise.all([connectPost, connectImg]);
    const postsJson = await posts.json();
    const imgJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: imgJson[index].url }
    })

    this.setState({ posts: postsAndPhotos });

  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <div className="App">
          {posts.map(post => (
            <div className='post'>
              <img src={post.cover} alt={post.title}></img>
              <div key={post.id} className='post-content'>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}



export default App;
