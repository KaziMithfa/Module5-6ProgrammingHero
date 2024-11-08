import PropTypes from "prop-types";
import "./Bookmark.css";

const Bookmark = ({ bookmarks }) => {
  return (
    <div className="mt-4">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>calorie</th>
          </tr>
        </thead>

        <tbody></tbody>
      </table>
    </div>
  );
};

Bookmark.propTypes = {
  bookmarks: PropTypes.object.isRequired,
};

export default Bookmark;
