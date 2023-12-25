import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ContextData from './Context';

const AddNew = () => {
  const DataContext=useContext(ContextData)
  const navigation =useNavigate();

  const newObj={
    name:"",
    age:"",
    course:"",
    batch:""
  }
  const handleChange=(e)=>{
    newObj[e.target.name]=e.target.value;
    newObj[e.target.age]=e.target.value;
    newObj[e.target.course]=e.target.value;
    newObj[e.target.batch]=e.target.value;
  }
  const handleSumbit=()=>{
    DataContext.data.push(newObj)
    navigation(-1);
  }
  return (
    <div>
        NAME:<input type='text'id='text' placeholder='enter name' onChange={handleChange} name='name'></input><br></br>
        AGE:  <input type='text'  id='text1'placeholder='enter age ' onChange={handleChange} name='age'></input><br></br>
        COURSE:  <input type='text'id='text2' placeholder='enter course' onChange={handleChange} name='course'></input><br></br>
        BATCH: <input type='text' id='text3' placeholder='enter batch' onChange={handleChange} name='batch'></input><br></br>
        <button onClick={handleSumbit} id='submit'>Submit</button>
    </div>
  )
}

export default AddNew