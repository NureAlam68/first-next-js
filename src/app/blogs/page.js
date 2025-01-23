import Link from "next/link";


const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "First Blog",
      content: "This is the first blog content.",
    },
    {
      id: 2,
      title: "Second Blog",
      content: "This is the second blog content.",
    }
  ]
  return (
    <main className="mt-10">
      <div>Blogs</div>
      <ul className="mt-4">
        {blogs.map((blog) => (
          <li className="mb-1" key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blogs;
