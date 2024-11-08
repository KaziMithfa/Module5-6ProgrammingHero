import PropTypes from "prop-types";

const Blog = ({ blog, handleAddToBookMark }) => {
  const { cover, title, author } = blog;
  return (
    <div className="mt-8">
      <img className="w-1/2" src={cover} alt="" />
      <h1 className="text-3xl">{title}</h1>
      <h2>{author}</h2>
      <button
        onClick={() => handleAddToBookMark(blog)}
        className="text-4xl text-center bg-slate-800"
      >
        Add to Bookmark
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMark: PropTypes.func.isRequired,
};

export default Blog;
