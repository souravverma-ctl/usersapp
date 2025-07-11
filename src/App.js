import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./todo-with-axio-jsonserver/Todo";

function App() {

	return (
		<div className="wrapper bg-light">
			<div className="App w-50 m-auto">
				<Todo />
			</div>
		</div>
	)
}

export default App;