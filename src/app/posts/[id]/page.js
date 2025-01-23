import { Suspense } from "react";
import getPosts from "../../../../lib/getPost";
import getPostComment from "../../../../lib/getPostComment";
import Comments from "@/app/components/Comments";
import getAllPosts from "../../../../lib/getAllPosts";

export async function generateMetadata({params}) {
    const {id} = params;
    const post = await getPosts(id);
    return {
        title: post.title,
        description: post.body,
    };
}

const PostPage = async({params}) => {
    const {id} = params;
    const postPromise = getPosts(id);
    const commentsPromise = getPostComment(id);

    const post = await postPromise

    // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
    return (
        <div className="mt-6">
            <h1 className="text text-blue-500 text-2xl">{post.title}</h1>
            <p className="mt-3">{post.body}</p>
            <hr/>
            <Suspense fallback='<h1>Loading comments...</h1>'>
                <Comments promise={commentsPromise}/>
            </Suspense>           
        </div>
    );
};

export default PostPage;

export async function generateStaticParams() {
    const posts = await getAllPosts();
    
    return posts.map((post) => ({
        id: post.id.toString(),
    }));

}