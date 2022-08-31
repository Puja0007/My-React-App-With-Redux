import React from 'react';
import './App.css';
import Todo from './Components/Todo';
import Posts from './Components/Posts';
import {BrowserRouter,Routes, Route, Link, Navigate} from 'react-router-dom';


function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/todo">Todo List</Link>
      <Link to="/post">Post List</Link>
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/post" element={<Posts />} />
        </Routes>

      </BrowserRouter>
   
    </div>
  );
}

export default App;
