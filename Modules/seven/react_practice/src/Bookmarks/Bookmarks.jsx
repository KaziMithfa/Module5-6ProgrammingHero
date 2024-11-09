import PropTypes from "prop-types";
import Bookmark from "../components/Bookmark/Bookmark";
import "./Bookmarks.css";

const Bookmarks = ({ bookmarks, count }) => {
  console.log("Bookmarks in bookmarks", bookmarks);
  return (
    <div className=" border-[1px] border-red-600 border-solid ">
      <h3 className="text-center">Bookmarks: {count}</h3>

      <table className="ml-6">
        <colgroup>
          <col className="w-1/7" />
          <col className="w-[50%]" />
          <col className="w-1/7" />
          <col className="w-1/7" />
          <col className="w-1/7" />
        </colgroup>

        <thead>
          <tr>
            <th></th>
            <th>title</th>
            <th>author</th>
            <th>reading time</th>
            <th></th>
          </tr>
        </thead>

        <tbody></tbody>
      </table>

      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={bookmark.id} idx={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
