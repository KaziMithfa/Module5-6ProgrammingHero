import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const BookMarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="lg: w-1/3 bg-gray-300 ml-4 mt-2">
      <div>
        <h3 className="text-3xl">Reading Time: {readingTime}</h3>
      </div>
      <h2 className="text-3xl text-center ">
        Bookmarked blogs : {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

BookMarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default BookMarks;
