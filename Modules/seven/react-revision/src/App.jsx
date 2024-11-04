import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";

import Header from "./components/Header/Header";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setreadingTime] = useState(0);

  const handleAddToBookMark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkasRead = (time) => {
    setreadingTime(readingTime + time);
  };

  // const handleAddToBookMark = (blog) => {
  //   console.log("bookmark is adding soon");
  // };
  return (
    <>
      <Header></Header>
      <div className="lg:flex max-w-7xl mx-auto ">
        <Blogs
          handleAddToBookMark={handleAddToBookMark}
          handleMarkasRead={handleMarkasRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
