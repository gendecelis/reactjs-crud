import React, { useState} from 'react'
import Card from '../Components/Card'
import classes from './CreateContact.module.css'
import Button from '../Components/Button'
import axios from 'axios'
import { TiUserAdd } from "react-icons/ti";
import {SlUser} from "react-icons/sl";

const CreateContact = (props) => {

  const [entry, setEntry] = useState ({
    name: '',
    contact: '',
    email: ''
  })
  
  const submitHandler = (event) => {
    event.preventDefault();

    if (entry.name.trim().length===0 || entry.email.trim().length===0 || entry.contact.trim().length===0){
      return (
            window.alert('Please fill in all fields!')
      )
    }

    if (!entry.email.match('@')){
      return (
        window.alert('Please enter a valid email address')
      )
    }

    if (entry.contact.trim().length<8 || entry.contact.trim().length>8){
      return (
        window.alert('Please enter a valid contact number')
      )
    }

    axios.post('http://localhost:3000/users', entry)
    .then(response => {
      console.log(response);
      window.alert('Contact Created Successfully')
      window.location.reload()
    })
    .catch(error => console.log(error));
  }

  return (
    <Card className={classes.input}>
      <header className={classes.head}>
        <h3><SlUser size='28px' aria-label='User Icon' tabIndex={1}/><span tabIndex={2} aria-label='Create Contact Form'>Create Contact</span></h3>
        <hr/>
      </header>
        <form>
           <label tabIndex={3}>Name:</label>
            <input type='text' 
            name='name'
            placeholder='Enter Your Name'
            required='required'
            tabIndex={4}
            onChange={event => setEntry({...entry, name: event.target.value})}/>

            <label tabIndex={5}>Email:</label>
            <input type='email' 
            name='email'
            placeholder='Enter Your Email'
            required='required'
            tabIndex={6}
            onChange={event => setEntry({...entry, email: event.target.value})}/>

            <label tabIndex={7}>Contact Number:</label>
            <input type='number' 
            name='contact'
            placeholder='Enter Your Number'
            required='required'
            tabIndex={8}
            onChange={event => setEntry({...entry, contact: event.target.value})}/>
            <Button tabIndex={9} onClick={submitHandler}><TiUserAdd size='18px'/><span>Add Contact</span></Button>
        </form>
    </Card>
  )
}

export default CreateContact