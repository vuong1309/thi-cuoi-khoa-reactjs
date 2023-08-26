import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import AddTodoPage from './pages/AddTodoPage.js';
import ActiveTodoPage from './pages/ActiveTodoPage.js';
import CompletedTodoPage from './pages/CompletedTodoPage.js';

function App() {
  return (
    <>
      <h1 className='text'>#todo</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddTodoPage />} />
        <Route path="/active" element={<ActiveTodoPage />} />
        <Route path="/completed" element={<CompletedTodoPage />} />
      </Routes>
    </>
  );
}

export default App;
