import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import ContextData from './Context';

const Table = () => {
    const DataContext=useContext(ContextData);
    const navigate=useNavigate();

  return (
    <div>
        <button id='add' onClick={()=>{navigate('/addNewStudent')}} >Add Student</button>
        <table id='table' >
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Edit</th>
            </tr>
            </thead>
            <tbody>
              {DataContext.data.map((item,index)=>(
                 <tr key={index}>
                 <td>{item.name}</td>
                 <td>{item.age}</td>
                 <td>{item.course}</td>
                 <td>{item.batch}</td>
                 <td>
                   <Link to='/editStudent' state={{data:index}}>Edit</Link>
                 </td>
               </tr>
              ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table