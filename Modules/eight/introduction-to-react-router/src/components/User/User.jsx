import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email } = user;

  const userstyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "20px",
  };
  return (
    <div style={userstyle}>
      <h2>Name : {name}</h2>
      <h2> Id: {id}</h2>
      <h2>Email: {email}</h2>
      <Link to={`/user/${id}`}>
        <button>Click Me</button>
      </Link>
    </div>
  );
};

export default User;
