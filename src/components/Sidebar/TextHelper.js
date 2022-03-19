import React from "react";

export default function TextHelper(id){
    switch(id){
        case 1:
            return "Aldrich";
            break;
        case 2:
            return "Home"
            break;
        case 3:
            return "Invites"
            break;
        case 4:
            return "Friends"
            break;
        case 5:
            return "My Events"
            break;
        case 6:
            return "Create"
            break;
        default:
            return "Default";
    }
}