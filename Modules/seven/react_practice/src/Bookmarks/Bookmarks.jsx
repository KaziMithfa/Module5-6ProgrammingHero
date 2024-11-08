import PropTypes from "prop-types";
import Bookmark from "../components/Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, count }) => {
  return (
    <div>
      <h3 className="text-center">Bookmarks: {count}</h3>

      <Bookmark bookmarks={bookmarks}></Bookmark>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
