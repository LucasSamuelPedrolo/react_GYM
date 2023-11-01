export const loadPosts = async () => {
    const connectPost = fetch('https://jsonplaceholder.typicode.com/posts');
    const connectImg = fetch('https://jsonplaceholder.typicode.com/photos');
    const [posts, photos] = await Promise.all([connectPost, connectImg]);
    const postsJson = await posts.json();
    const imgJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
        return { ...post, cover: imgJson[index].url }
    });

    return postsAndPhotos
}

