import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Card from '../Components/Card'
import classes from './ViewContact.module.css'
import Button from '../Components/Button'
import {SlUser} from "react-icons/sl";

const ViewContact = (props) => {
  const {id} = useParams()
  const [data, setData] = useState ([])

const navigate = useNavigate()

const backHandle = () => {
    navigate('/')
}

useEffect(()=>{

    axios.get('http://localhost:3000/users/' + id)
    .then(response => setData(response.data))
    .catch(error => console.log(error));
}, [id])

  return (
    <Card className={classes.input}>
      <header className={classes.head}>
        <h3><SlUser size='28px' tabIndex={31} aria-label='Contact User Icon'/><span tabIndex={32} aria-label='View Contact Form'>View Contact</span></h3>
        <hr/>
      </header>
        <div tabIndex={33}>
          <strong>Name: </strong>{data.name}
          </div>
        
        <div tabIndex={34}>
          <strong>Email: </strong>{data.email}
          </div>

        <div tabIndex={35}>
          <strong>Contact: </strong>{data.contact}
          </div>
        <Button tabIndex={36} onClick={backHandle}>Back</Button>

    </Card>
  )
}

export default ViewContact