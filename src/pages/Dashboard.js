import React, { useContext, useEffect } from 'react';
import DisplayCard from '../components/DisplayCard'
import DisplayCardGuest from '../components/DisplayCardGuest'
import { UserContext } from '../context/UserContext'

const Dashboard = () => {
  const { user } = useContext(UserContext)

  useEffect(() => {
    console.log('test')
    console.log(user)
  }, [user])

  return (
    <div>
      <DisplayCard />
    </div>
  );
}

export default Dashboard;