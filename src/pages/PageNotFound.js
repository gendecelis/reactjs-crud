import React, { Fragment } from 'react'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom'
import classes from './PageNotFound.module.css'

const PageNotFound = () => {
  const navigate = useNavigate()

  const backToHomePage = () => {
  navigate('/')
}
  return (
    <Fragment>
      <div className={classes.title}>
        <h1>Error! Page Not Found!</h1>
        <Button onClick={backToHomePage}>Back to Home Page</Button>
      </div>
    </Fragment>
  )
}

export default PageNotFound