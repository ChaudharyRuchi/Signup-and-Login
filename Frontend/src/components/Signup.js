import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    axios
      .post('http://localhost:3001/signup', { email, password })
      .then(response => {
        console.log(response.data);
        alert('Signup successful! Please log in.');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrorMessage('');
      })
      .catch(error => {
        console.log(error);
        setErrorMessage('Signup failed. Please try again later.');
      });
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Confirm password:</label>
          <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Signup;
