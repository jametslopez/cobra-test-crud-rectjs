import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';
import ShowEmployees from './components/ShowEmployees';

function App() {
  return (
    <div className="App">
      <header className='m-5'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ShowEmployees />} />
            <Route path='/create' element={<CreateEmployee />} />
            <Route path='/edit/:id' element={<EditEmployee />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
