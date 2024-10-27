const Watch = ({ watch }) => {
  const { name, price } = watch;
  return (
    <div>
      <h2>Watch: {name}</h2>
      <h2>Price: {price}</h2>
    </div>
  );
};

export default Watch;
