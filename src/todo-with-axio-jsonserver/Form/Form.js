import { useState } from "react";

function Form({ addTodo }) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ "id": new Date().getTime(), "firstname": firstname, "lastname": lastname });
        setFirstname("");
        setLastname("");
    }

    return (
        <form onSubmit={handleSubmit} className="bg-secondary-subtle w-75 p-4 m-auto mb-4">
            <h4>User Registration Form</h4>
            <div class="row">
                <div class="col-6">
                    <input type="text" value={firstname} placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div class="col-6">
                    <input type="text" value={lastname} placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div class="col-4">
                    <input type="submit" value="Add" />
                </div>
            </div>
        </form>
    )
}

export default Form;