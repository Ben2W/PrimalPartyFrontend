import React from 'react';
import MyEventsHelper from "./MyEventsHelper"
import { UserContext } from '../../context/UserContext';

const MyEvents = () => {
    const { user } = React.useContext(UserContext);

    return (
        <div>
            <MyEventsHelper props={user.events} />
        </div>
    )
}

export default MyEvents