const Comments = async({promise}) => {
    const comments = await promise;
  return (
    <div>
      <h2 className="text text-blue-500 text-xl mt-6">Comments</h2>
      <ul className="mt-6">
        {comments.map((comment) => (
          <li key={comment.id}>
            <h3 className="text text-blue-500 text-lg">{comment.name}</h3>
            <p className="mt-3">{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
