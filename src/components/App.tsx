import { useGetAllPostsQuery } from "../redux/posts/postsApi";

function App() {
  const { data: posts = [], isError, isFetching } = useGetAllPostsQuery();

  return (
    <>
      {posts.map(p => (
        <div key={p.id}>
          <div>{p.title}</div>
          <div>{p.body}</div>
          <hr />
        </div>
      ))}
      {isError && <div>Wrong</div>}
      {isFetching && <div>Loading...</div>}
    </>
  );
}

export default App;
