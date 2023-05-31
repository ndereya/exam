import Axios from 'axios';
import React, { useEffect } from 'react';

function Table(){
    useEffect(()=>{
        Axios.get("http://localhost:7000/students")
        .then(res=>console.log(res))
        .catch(er=>console.log(er))
    },[])

    return(
        <div>
            <table>
                <th>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Adress</td>
                    <td>contact</td>
                    <td>Emergency contact</td>
                    <td>Comment</td>
                    <td>Action</td>
                </th>
            </table>
        </div>
    )
}
export default Table;