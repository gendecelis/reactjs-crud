import React, {useEffect, useState} from 'react'
import Card from '../Components/Card'
import classes from './UpdateContactList.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../Components/Button'
import axios from 'axios'
import {SlUser} from "react-icons/sl";

const UpdateContactList = () => {
  const navigate = useNavigate()

  const backHandle = () => {
    navigate('/')
  }

  const {id} = useParams()
  const [entry, setEntry] = useState ({
    name: '',
    contact: '',
    email: ''
  })
  

  useEffect(()=>{

    axios.get('http://localhost:3000/users/' + id)
    .then(response => {
      setEntry(response.data);
    })
    .catch(error => console.log(error));
}, [id])

  const updateHandler = (event) => {
    event.preventDefault()

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

    axios.put('http://localhost:3000/users/'+id, entry)
    .then(response => {
      console.log(response.data);
      window.alert('Updated Sucessfully')
      navigate('/')
    })
    .catch(error => console.log(error));

  }

  return (
    <Card className={classes.input}>
        <header className={classes.head}>
        <h3><SlUser size='28px' tabIndex={24} aria-label='Contact User Icon'/><span tabIndex={25} aria-label='Update Contact Form'>Update Contact</span></h3>
        <hr/>
      </header>
        <form>
           <label tabIndex={26}>Name:</label>
            <input type='text' 
            name='name'
            tabIndex={27} aria-label='Enter New Name Here'
            value={entry.name}
            onChange={event => setEntry({...entry, name: event.target.value})}/>

            <label tabIndex={28}>Email:</label>
            <input type='email' 
            name='email'
            tabIndex={29} aria-label='Enter New Email Here'
            value={entry.email}
            onChange={event => setEntry({...entry, email: event.target.value})}/>

            <label tabIndex={30}>Contact Number:</label>
            <input type='number' 
            name='contact'
            tabIndex={31} aria-label='Enter New Contact Number Here'
            value={entry.contact}
            onChange={event => setEntry({...entry, contact: event.target.value})}/>
        </form>

        <Button tabIndex={32} onClick={backHandle}>Back</Button> 

        <Button tabIndex={33} onClick={updateHandler}>Update</Button>
    </Card>
  )
}

export default UpdateContactList