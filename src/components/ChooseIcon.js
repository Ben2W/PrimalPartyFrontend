import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GroupIcon from '@mui/icons-material/Group';

export default function ChooseIcon(index){
    if (index === 0)
        return <PersonIcon />;
    else if (index === 1)
        return <HomeIcon />;
    else if (index === 2)
        return <ContactMailIcon />;
    else
        return <GroupIcon />;
}
