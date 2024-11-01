import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookMark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className=" lg:w-2/3">
      <h1 className="text-4xl">Blogs : {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookMark={handleAddToBookMark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
Blogs.propTypes = {
  handleAddToBookMark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
