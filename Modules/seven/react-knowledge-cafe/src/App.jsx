import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  // EventHandler

  const handleAddToBookMark = (blog) => {
    const newBookMarks = [...bookmarks, blog];

    setBookMarks(newBookMarks);
    //console.log(blog);
  };

  const handleMarkAsRead = (time) => {
    setReadingTime(readingTime + time);
    console.log("marking as read", time);
  };

  return (
    <>
      <Header></Header>

      <div className="lg:flex max-w-6xl mx-auto">
        <Blogs
          handleAddToBookMark={handleAddToBookMark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
      </div>
    </>
  );
}

export default App;
