import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { OverView } from './pages/Overview';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.scss';
import { Login } from './pages/Login';
import { ScoreBoard } from './components/ScoreBoard';
import { NewGame } from './components/NewGame';

const App = () => {

  const isUserRegistered = useLocalStorage('foosUser')[0]
  console.log(isUserRegistered);

  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='login'>Login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<OverView />} >
          <Route path='/' element={<ScoreBoard />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='newGame' element={<NewGame />} />
      </Routes>
    </Router>
  );
}

export default App;
