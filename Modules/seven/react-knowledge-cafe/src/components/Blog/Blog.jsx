import PropTypes from "prop-types";
import { BsBookmarkHeart } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookMark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    reading_time,
    author_img,
    posted_date,
    author,
    hashtags,
  } = blog;
  return (
    <div className="mt-20 space-y-4">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      ></img>

      <div className="flex justify-between mb-4 ">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>

        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookMark(blog)}
            className="ml-2 text-red-600 text-2xl"
          >
            <BsBookmarkHeart />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a></a>
            {hash}
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-600 font-bold underline"
      >
        Mark as Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blog;
