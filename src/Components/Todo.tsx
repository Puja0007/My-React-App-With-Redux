import React,{useState,useEffect} from "react";

export default function Todo(): JSX.Element {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then((json) => {
        setTodo(json);
        console.log(json);
      });
  });
  return (
    <ul>
      {todo.map((d: any) => (<li key={d.id}>{d.title}</li>))}
    </ul>
  );
}