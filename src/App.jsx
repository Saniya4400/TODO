/*import React from 'react';

const App = () => {
  return (
    <div className='test-2xl test-red-700'>app</div>
  );
}

export default App;
*/
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import TodoDetail from "./pages/TodoDetails";
import TodoList from "./pages/Todolist";

export default function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <nav className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Todo App</h1>
        <Link className="text-blue-600 hover:underline" to="/">All Todos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}