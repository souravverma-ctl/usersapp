import { Link } from "react-router-dom";

function Todos({ users, updateTodo, deleteTodo }) {
    // const navigate = useNavigate();
    return (
        <div className="todo">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>
                                    <Link to="/editTodo" state={{user: user}}>
                                        <button type="button" className="btn btn-primary btn-sm">Edit</button>
                                    </Link>
                                    <button type="button" className="btn btn-danger btn-sm ms-2" onClick={() => deleteTodo(user.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Todos;