import useInputState from "../../hooks/useInput.Js";

const Hookform = () => {
  //const [name, handleNameChange] = useInputState("Rajoni hooked");
  const emailState = useInputState("rojoni@sojoni.go");

  const handleSubmit = (e) => {
    console.log("form data", emailState.value);
    e.preventDefault();
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
        <input {...emailState} type="text" name="email" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Hookform;
