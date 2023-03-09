import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';


function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        setError('Error fetching users. Please try again later.');
      });
  }, []);

  return (
    <div className="App">
      {error && <div>{error}</div>}
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile/:id">
          <Route exact path="/profile/:id" element={<Profile users={users} />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
 export default App;