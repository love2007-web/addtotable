import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Firstapp from './Firstapp';
import Users from './Users';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Firstapp/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </>
  );
}

export default App;
