import React from 'react'
import '../App.css';
import TaskGuest from './TaskGuest';

export default function TableGuest(props){

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Assignee</th>
                    </tr>
                </thead>

                <tbody>
                {
                    props.tasks.map((value, key) => {
                    return (
                        <tr key={key}>
                            <TaskGuest task={value.name} assignees={value.assignees}/>
                        </tr>
                    )
                    })
                }
                </tbody>
            </table>
        </>
    )
}