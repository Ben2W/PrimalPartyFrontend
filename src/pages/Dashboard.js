import React from 'react';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/logout', {
      method: 'POST',
      headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      navigate('/');
    })
  }

  const handleProtected = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/protected', {
      method: 'GET',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      credentials: 'include',
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
  }

  const handleAccount = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/account', {
      method: 'GET',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      credentials: 'include',
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      navigate('/account',{ replace: true });
    })    
  }

  return (
    <div className="dashboard">
      <form onSubmit={ handleSubmit } >
        <Button
          type="submit"
        >
          Logout
        </Button>
        
      </form>

      <form onSubmit={handleProtected}>
      <Button
          type="submit"
        >
          Protected
        </Button>
      </form>

      <form onSubmit={handleAccount}>
      <Button
          type="submit"
        >
          Account
        </Button>
      </form>
    </div>
  );
}

export default Dashboard;