import React from 'react'
import { Button } from '@mui/material';

import '../App.css';


export default function Table(props){

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Assignee</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bring Pizza</td>
                        <td>
                            <p>John Bruh <Button>X</Button></p>
                            <p>Joe Mama <Button>X</Button></p>
                            <p><Button>Add</Button></p>
                        </td>
                    </tr>

                    <tr>
                        <td>Bring Water</td>
                        <td>
                            <p>John Bruh <Button>X</Button></p>
                            <p><Button>Add</Button></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}