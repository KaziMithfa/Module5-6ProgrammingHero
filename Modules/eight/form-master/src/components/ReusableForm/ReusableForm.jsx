const ReusableForm = ({
  formTitle,
  handleSubmit,
  submitButtonTxt = "submit",
  children,
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    handleSubmit(data);
  };

  return (
    <div>
      {children}

      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="text" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value={submitButtonTxt} />
      </form>
    </div>
  );
};

export default ReusableForm;
