import './App.css'

function App() {

	const handleAddUser = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		// console.log(name, email);
		const user = { name, email };
		console.log(user);

		fetch("http://localhost:5000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.insertedId) {
					alert("User added successfully!")
				}
			});
	};
	return (
		<div>
			<h1>Simple CRUD</h1>
			<form onSubmit={handleAddUser}>
				<input type="text" name="name" id="name" />
				<input type="email" name="email" id="email" />
				<button type='submit'>Add User</button>
			</form>
		</div>
	)
}

export default App
