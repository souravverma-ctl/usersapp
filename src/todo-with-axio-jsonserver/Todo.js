import { useEffect, useState } from "react";
import Todos from "./Todos/Todos";
import Form from "./Form/Form";
import api from "./api";
import EditTodo from "./Form/EditTodo";
import { Route, Routes } from "react-router-dom";

function Todo() {
    const [users, setUsers] = useState([]);

    const addTodo = async (obj) => {
        const res = await api.post("/users", obj);
        setUsers([...users, res.data])
    }

    const updateTodo = async (obj) => {
        try {
            const response = await api.put(`/users/${obj.id}`, obj);
            const updatedUser = response.data;

            const updatedUsers = users.map(user =>
                user.id === updatedUser.id ? updatedUser : user
            );

            setUsers(updatedUsers);
        } catch (error) {
            console.error("Failed to update user:", error);
        }
    };

    const deleteTodo = async (id) => {
        await api.delete(`/users/${id}`);
        const filterTodo = users.filter(user => user.ID !== id);
        setUsers(filterTodo)
    }

    useEffect(() => {
        const getTodos = async () => {
            const getTodosData = await api.get("/users");
            if (getTodosData) setUsers(getTodosData.data);
        }
        getTodos();
    }, [])

    return (
        <>
            <Routes>
                <Route path="/" element={<Form addTodo={addTodo} />} />
                <Route path="/editTodo" element={<EditTodo updateTodo={updateTodo} />} />
            </Routes>
            <div className="todos">
                <Todos users={users} deleteTodo={deleteTodo} />
            </div>
        </>
    )
}

export default Todo;