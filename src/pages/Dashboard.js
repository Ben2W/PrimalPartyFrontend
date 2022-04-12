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
      <div>
        <DisplayCardGuest />
      </div>
      <div>
        <DisplayCard />
      </div>
    </div>
  );
}

export default Dashboard;