import React from 'react'
import AssigneeDisplayGuest from '../components/AssigneeDisplayGuest';

export default function TaskGuest(props){
    let assignees = [];

    for (var i=0; i<props.assignees.length; i++) {
        assignees.push(
            <AssigneeDisplayGuest assignees={props.assignees[i].firstName + " " + props.assignees[i].lastName}/>
        )
    }

    console.log(props.task)

    return (
        <>
            <td>{props.task}</td>
            <td>
                {assignees}
            </td>
        </>
    )
}