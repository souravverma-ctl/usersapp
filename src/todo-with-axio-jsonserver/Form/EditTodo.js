import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditTodo({updateTodo}) {
    const location = useLocation();
    const {ID, firstname, lastname} = location.state.user;
    const navigate = useNavigate();
    const [fname, setFname] = useState(firstname);
    const [lname, setLname] = useState(lastname);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTodo({"id": ID, "firstname": fname, "lastname": lname});
        setFname("");
        setLname("");
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit}  className="bg-secondary-subtle w-75 p-4 m-auto mb-4">
            <h4>Update User</h4>
            <div class="row">
                <div class="col-6">
                    <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
                </div>
                <div class="col-6">
                    <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
                </div>
                <div class="col-4">
                    <input type="submit" value="Update" />
                </div>
            </div>
        </form>
    )
}

export default EditTodo;