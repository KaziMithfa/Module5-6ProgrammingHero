import { Link } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg";
import { MdDelete } from "react-icons/md";

// eslint-disable-next-line no-unused-vars, react/prop-types
const BlogCard = ({ blog, deleteable, handleDelete }) => {
  // eslint-disable-next-line react/prop-types
  const { cover_image, title, description, published_at, id } = blog;

  return (
    <div className="flex relative">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary hover:no-underline hover:border-secondary border-opacity-30 focus:no-underline bg-gray-900"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || placeHolderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>

      {deleteable && (
        <div
          onClick={() => handleDelete(id)}
          className="absolute bg-primary p-3 rounded-full hover:scale-105 -top-5 -right-5"
        >
          <MdDelete
            size={20}
            className="text-secondary group-hover:text-primary"
          ></MdDelete>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
