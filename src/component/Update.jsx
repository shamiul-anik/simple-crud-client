import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();
  console.log(loadedUser);
  const handleUpdateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    // console.log(name, email);
    const user = { name, email };
    console.log(user);

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User information updated successfully!")
        }
      });
  };
  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" id="name" defaultValue={loadedUser?.name} />
        <input type="email" name="email" id="email" defaultValue={loadedUser?.email} />
        <button type='submit'>Update</button>
      </form>
    </div>
  );
};

export default Update;