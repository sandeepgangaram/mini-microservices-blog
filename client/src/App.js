import PostCreate from "./components/PostCreate";
import PostList from "./components/PostList";
function App() {
  return (
    <div className="container">
      <h1>Mini Blog</h1>
      <br />
      <PostCreate />
      <hr />
      <h3>List of Posts</h3>
      <PostList />
    </div>
  );
}

export default App;
