import { useState } from "react";

const Statefulform = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState("Rojoni Klanto");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("password must contain at least 6 character");
    } else {
      setError("empty");
      console.log(email, name, password);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" id="" />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          required
        />
        <br />
        <input type="submit" value="submit" />

        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Statefulform;
