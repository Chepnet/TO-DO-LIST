import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import React, { useState } from "react";


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Button = styled.button`
  display:inline-block;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 30px;
  width: 50px;
  border-radius: 2px;
  cursor: pointer;
`;
const Text = styled.input`
  border: 2px solid #000;
`;
const TaskCount1 = styled.span`
  margin: 10px;
`;
const Tasks1 = styled.div`
`;
const TaskCount = styled.span`
  margin: 10px;
`;
const Tasks = styled.div`
`;
const LIST = styled.li`
    listStyle:"none";
    text-decoration: "line-through";
`;

function App() {
  const handleClick = () => {
    const id = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        complete: false,
      },
    ]);
    setInput("");
  };
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {};
      if (task.id == id) {
        if (!task.complete){
            //Task is pending, modifying it to complete and increment the count
            setCompletedTaskCount(completedTaskCount + 1);
        } 
        else {
            //Task is complete, modifying it back to pending, decrement Complete count
            setCompletedTaskCount(completedTaskCount - 1);
        }
item = { ...task, complete: !task.complete };
      } else item = { ...task };
return item;
    });
    setTodoList(list);
  };
  return (
   <Container>
    <div>
      <img src="logo.svg"alt='image here'/>
      <h2>To Do List</h2>
<Text value={input} onInput={(e) =>setInput(e.target.value)}/>
<Button onClick={() => handleClick()}>Add</Button>
<Tasks>
          <TaskCount>
            <b>Pending Tasks </b> 
            {todoList.length - completedTaskCount}
          </TaskCount>
          <TaskCount>
            <b>Completed Tasks </b>{completedTaskCount}
          </TaskCount>
        </Tasks>
        <div>
          <ul>
              /* List items consisting of tasks will be listed here */
              {todoList.map((todo) => {
    return (
      <LIST
        complete={todo.complete}
        id={todo.id}
        onClick={() => handleComplete(todo.id)}
        style={{
          listStyle: "none",
          textDecoration: todo.complete && "line-through",
        }}
      >
        {todo.task}
      </LIST>
    );
  })}
          </ul>
        </div>
    </div>
   </Container>
  );
}

export default App;
