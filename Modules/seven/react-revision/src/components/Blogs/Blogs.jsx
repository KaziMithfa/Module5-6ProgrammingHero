import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookMark, handleMarkasRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3">
      <h1 className="text-4xl">Blogs: {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookMark={handleAddToBookMark}
          handleMarkasRead={handleMarkasRead}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookMark: PropTypes.func.isRequired,
  handleMarkasRead: PropTypes.func.isRequired,
};

export default Blogs;
