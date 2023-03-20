// fetch 기본제공
// axios 라이브러리 설치
import {useEffect, useState} from "react";
import axios from "axios";

const SERVER_URL = 'http://localhost:4000/api/todo'
function App() {
  const [todoList, setTodoList] = useState([]);

  const fetchData = async () => {
    await axios.get(SERVER_URL)
      .then(res => setTodoList(res.data))
/*    fetch('http://localhost:4000/api/todo')
      .then(res => res.json())
      .then(data => setTodoList(data))*/
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const text = e.target.text.value
    const done = e.target.done.checked

    await axios.post(SERVER_URL, {text, done})
    fetchData()

/*    fetch('http://localhost:4000/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text,
        done
      })
    })
      .then(() => fetchData())*/
  }

  return (
    <div className="App">
      <h1>TodoList</h1>

      <form onSubmit={onSubmitHandler}>
        <input type="text" name="text"/>
        <input type="checkbox" name="done"/>
        <input type="submit" value="추가"/>
      </form>

      {todoList.map((todo) => (
        <div key={todo.id} style={{display: 'flex'}}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? 'Y' : 'N'}</div>
        </div>
      ))}

    </div>
  );
}

export default App;
