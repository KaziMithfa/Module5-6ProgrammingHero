import PropTypes from "prop-types";

const Details = (props) => {
  return (
    <div className="mt-14">
      <h1>Hello details</h1>

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
    </div>
  );
};

Details.propTypes = {};

export default Details;
