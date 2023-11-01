export const PostCard = (props) => {
    //(id, title, body, cover) --> dessa forma poderia passar uma prop por vez
    const post = props.props;
    return (
        <div className='post'>
            <img src={post.cover} alt={post.title}></img>
            <div className='post-content'>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    )
}