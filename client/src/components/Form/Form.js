import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createReview } from '../../actions/index_actions'
import NavBar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const dispatch = useDispatch()
  const [rdata,setRdata] = useState({name:'',email:'',star:'5',message:''})
  const history = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createReview(rdata))

    setRdata({name: '', email: '',star:'5', message: ''});
    history('/rev')
  }
  return (
    <div  >
      <NavBar/>
        <div style={{padding:'15px'}} >
        <form autoComplete="off" validate="true" onSubmit={handleSubmit} >
            <div >
              <label >Name</label>
              <input className='form-control' required    
                placeholder="Name"
                value={rdata.name}
                onChange={(e)=> setRdata({...rdata, name:e.target.value})}
                 />
            </div>
            <div >
            <label >Email</label>
              <input className='form-control' required    
                placeholder="name@example"
                type='email'
                value={rdata.email}
                onChange={(e)=> setRdata({...rdata, email:e.target.value})  }
                 />
            </div>
            <div style={{marginTop:'7px',marginBottom:'7px'}}  >
              <label >Rate our service</label>
              <select style={{marginLeft:'10px'}} value={rdata.star} onChange={(e)=> setRdata({...rdata,star: e.target.value})} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            
            <div >
              <label >Drop a message</label>
              <textarea value={rdata.message} required className='form-control'  rows="3" onChange={ (e)=> setRdata({...rdata, message :e.target.value})} ></textarea>
            </div>
            <button type="submit" class="btn btn-primary"  >Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Form