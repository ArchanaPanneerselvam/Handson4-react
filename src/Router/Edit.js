import React, { useContext }  from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ContextData from './Context'

const Edit = () => {
    const DataContext=useContext(ContextData)
    const index=useLocation().state.data
    const navi=useNavigate()

    const newData={
        name:DataContext.data[index].name, 
        age:DataContext.data[index].age,
        course:DataContext.data[index].course,
        batch:DataContext.data[index].batch
    }

    const handleChange=(e)=>{
        newData[e.target.name]=e.target.value;
        newData[e.target.age]=e.target.value;
         newData[e.target.course]=e.target.value;
         newData[e.target.batch]=e.target.value;
    }

    const handleSumbit=()=>{
        DataContext.data[index]=newData;
        navi(-1)
    }
  return (
    <div>
      NAME: <input type='text' id='text' placeholder={DataContext.data[index].name} onChange={handleChange} name='name'></input><br></br>
        AGE:  <input type='text' id='text1' placeholder={DataContext.data[index].age}onChange={handleChange} name='age'></input><br></br>
       COURSE: <input type='text' id='text2'placeholder={DataContext.data[index].course} onChange={handleChange} name='course'></input><br></br>
        BATCH:  <input type='text' id='text3' placeholder={DataContext.data[index].batch} onChange={handleChange} name='batch'></input><br></br>
        <button id='submit' onClick={handleSumbit}>Cancel</button>
        <button id='submit' onClick={handleSumbit}>Update</button>
    </div>
  )
}

export default Edit