import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./Bookmarks/Bookmarks";
import Details from "./components/Details/Details";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [count, setCount] = useState(0);

  const handleAddToBookMark = (blog) => {
    const isExist = bookmarks.find((bookmark) => bookmark.id === blog.id);

    if (!isExist) {
      const newBookMarks = [...bookmarks, blog];
      setBookmarks(newBookMarks);
      setCount(count + 1);
    } else {
      toast("Already added");
    }
  };

  return (
    <>
      <h1>Practicing React</h1>

      <div>
        <h4 className=" text-center">Our blogs</h4>

        <div className="container mx-auto mt-4">
          <ToastContainer></ToastContainer>

          <div className="flex justify-between mt-12">
            <div className="blogs-container w-[60%]">
              <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
            </div>

            <div className="bookmark-container w-[40%]  mr-4">
              <Bookmarks count={count} bookmarks={bookmarks}></Bookmarks>

              <div className="mt-3">
                <Details></Details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
