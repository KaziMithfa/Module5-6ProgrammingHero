import PropTypes from "prop-types";

const Bookmark = ({ bookmark, idx }) => {
  console.log(bookmark);

  const { title, author, reading_time } = bookmark;

  return (
    <div className=" bg-blue-500 ">
      <div className=" ml-4">
        <table>
          <colgroup>
            <col className="w-1/7" />
            <col className="w-[50%]" />
            <col className="w-1/7" />
            <col className="w-1/7" />
            <col className="w-1/7" />
          </colgroup>
          <tbody>
            <tr>
              <td>{idx}</td>
              <td>{title}</td>
              <td>{author}</td>
              <td>{reading_time}</td>
              <td className="pl-3">
                <button className=" bg-green-800 ">Preparing</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};

export default Bookmark;
