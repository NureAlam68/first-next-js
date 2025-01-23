import getPosts from "../../../../lib/getPost";


const PostPage = async({params}) => {
    const {id} = params;
    const post = await getPosts(id);
    return (
        <div className="mt-6">
            <h1 className="text text-blue-500 text-2xl">{post.title}</h1>
            <p className="mt-3">{post.body}</p>            
        </div>
    );
};

export default PostPage;