import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import GroupIcon from '@mui/icons-material/Group';
import CelebrationIcon from '@mui/icons-material/Celebration';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import RemoveIcon from '@mui/icons-material/Remove';

export default function IconHelper(id){
    switch (id){
        case 1:
            return <PersonIcon/>;
        case 2:
            return <HomeIcon/>;
        case 3:
            return <InsertInvitationIcon/>;
        case 4:
            return <GroupIcon/>
        case 5:
            return <CelebrationIcon/>
        case 6:
            return <AddCircleIcon/>
        case 7:
            return <LogoutIcon/>
        case 8:
            return <RemoveIcon/>
        default:
            return null;
    }
}
