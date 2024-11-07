import "./App.css";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <>
      <h1>Practicing React</h1>

      <div>
        <h4 className="bg-red-600 text-center">Our blogs</h4>

        <div className="container mx-auto mt-4">
          <div className="flex justify-between">
            <div className="blogs-container  outline-yellow-800 outline-4 outline-dotted">
              <Blogs></Blogs>
            </div>

            <div className="bookmark-container outline-green-800 outline-4 outline-dotted mr-4">
              <h3>high</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
