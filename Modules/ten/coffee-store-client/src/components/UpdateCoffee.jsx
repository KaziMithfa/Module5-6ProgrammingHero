import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    // we are creating an object here to send the data to the server

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Update Coffee: {name}</h2>

      <form onSubmit={handleUpdateCoffee}>
        {/* form row name and quantity */}
        <div className="md:flex mb-6">
          <div className="w-1/2">
            <label>Name</label>

            <div>
              <input
                className="input input-bordered join-item w-full"
                name="name"
                placeholder="Coffee Name"
                defaultValue={name}
              />
            </div>
          </div>

          <div className="w-1/2 ml-4">
            <label>Available Quantity</label>

            <div>
              <input
                className="input input-bordered join-item w-full"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
              />
            </div>
          </div>
        </div>
        {/* form Supplier and taste */}
        <div className="md:flex mb-6">
          <div className="w-1/2">
            <label>Supplier Name</label>

            <div>
              <input
                className="input input-bordered join-item w-full"
                name="supplier"
                defaultValue={supplier}
                placeholder="Supplier"
              />
            </div>
          </div>

          <div className="w-1/2 ml-4">
            <label>Taste</label>

            <div>
              <input
                className="input input-bordered join-item w-full"
                name="taste"
                defaultValue={taste}
                placeholder="Taste"
              />
            </div>
          </div>
        </div>
        {/* form row Category and Details */}
        <div className="md:flex mb-6">
          <div className="w-1/2">
            <label>Category</label>

            <div>
              <input
                className="input input-bordered join-item w-full"
                name="category"
                defaultValue={category}
                placeholder="Category"
              />
            </div>
          </div>

          <div className="w-1/2 ml-4">
            <label>Details</label>

            <div>
              <input
                className="input input-bordered join-item w-full"
                name="details"
                defaultValue={details}
                placeholder="Details"
              />
            </div>
          </div>
        </div>
        {/* form photo url row  */}
        <div>
          <div className="w-full mb-8">
            <label>Photo Url</label>

            <div>
              <input
                className="input input-bordered join-item w-full"
                name="photo"
                defaultValue={photo}
                placeholder="Photo Url"
              />
            </div>
          </div>
        </div>

        <input
          type="submit"
          className="btn btn-block bg-[#D2B48C]"
          value="Update Coffee"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
