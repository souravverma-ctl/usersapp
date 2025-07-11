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
        const update = await api.put(`users/${obj.id}`, obj);
        const updateData = update.data;
        const updateModifyTodo = users.map(user => {
            return user.id === updateData.id ? updateData : user
        })
        setUsers(updateModifyTodo);
    }

    const deleteTodo = async (id) => {
        await api.delete(`/users/${id}`);
        const filterTodo = users.filter(user => user.id !== id);
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
                <Route path="/" element={<Form addTodo={addTodo} updateTodo={updateTodo} />} />
                <Route path="/editTodo" element={<EditTodo updateTodo={updateTodo} />} />
            </Routes>
            <div className="todos">
                <Todos users={users} deleteTodo={deleteTodo} />
            </div>
        </>
    )
}

export default Todo;