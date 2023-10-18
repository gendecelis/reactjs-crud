import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Components/Card'
import classes from './ContactList.module.css'
import CreateContact from './CreateContact'
import { NavLink } from 'react-router-dom'
import { GrEdit, GrFormView, GrFormTrash } from "react-icons/gr";

const ContactList = () => {

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete?");
        if(confirm) {
            axios.delete('http://localhost:3000/users/'+id)
            .then(response => {
                window.location.reload();
                window.alert('Deleted Sucessfully')
            }).catch(error => console.log(error));
        }
      }

    const [data, setData] = useState ([])

useEffect(()=>{

    axios.get('http://localhost:3000/users')
    .then(response => setData(response.data))
    .catch(error => console.log(error));
}, [])
    
  return (
    <Fragment>
    <div>
        <CreateContact/>
    </div>
    <Card>
        <div className={classes.lists}>
            <table>
                <caption>Contact List</caption>
                    <thead>
                        <tr>
                            <th>ID Number</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.contact}</td>
                            
                            <td>
                                <NavLink aria-label={`View Contact with ID Number' ${d.id}`} className={classes.view} to={`/view/${d.id}`}><GrFormView size='20px' color='white'/><span> View</span></NavLink>
                                <NavLink aria-label={`Update Contact with ID Number' ${d.id}`} className={classes.update} to={`/update/${d.id}`}><GrEdit size='20px'/><span> Update</span></NavLink>
                                <button aria-label={`Delete Contact with ID Number' ${d.id}`} onClick={event => handleDelete(d.id)} className={classes.delete}><GrFormTrash size='20px'/><span> Delete</span></button>
                            </td>
                            </tr>
                        ))
                        }
                            
                        </tbody>
            </table>
        </div>
    </Card>
    </Fragment>
  )
}

export default ContactList