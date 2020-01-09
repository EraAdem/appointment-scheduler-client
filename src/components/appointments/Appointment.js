import React, { useEffect, useState, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'

const Appointment= props => {
  const [appointment, setAppointment] = useState(null)
  // console.log(props)

  useEffect(() => {
    axios({
      url: `${apiUrl}/appointments/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(res => {
        setAppointment(res.data.appointment)
        console.log('res', res)
        console.log(props)
      })
      .catch(() => props.alert({ heading: 'That didn\'t work', message: 'Couldn\'t retrieve the requested appointment', variant: 'danger' }))
  }, [])

  const handleDelete = event => {
    axios({
      url: `${apiUrl}/appointments/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => {
        props.alert({ heading: 'Success', message: 'You deleted an appointment', variant: 'warning' })
        props.history.push('/')
      })
      .catch(() => {
        props.alert({ heading: 'Rut roh', message: 'Something went wrong', variant: 'danger' })
      })
  }

  if (!appointment) {
    return <p>Loading stuff...</p>
  }
if (appointment.owner === props.user._id) {
  console.log("equal")
  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <div className="contact">
      <h2>Information for the scheduled appointment:</h2>
        <h3>Name: {appointment.name}</h3>
        <h3>Email: {appointment.email}</h3>
        <h3>Phone: {appointment.phone}</h3>
        <h3>Date: {appointment.date.split('T')[0]}</h3>
        <h3>Time: {appointment.time}</h3>
        </div>
          <Fragment>
          <br></br>
            <Button href={`#appointments/${props.match.params.id}/edit`} variant="primary" className="mr-2">Update</Button>
            <Button onClick={handleDelete} variant="danger" className="mr-2">Delete</Button>
          </Fragment>

        <Button href="#/" variant="secondary">Back</Button>
      </div>
    </div>
  )
} else {
  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <div className="contact">
      <h2>Information for the scheduled appointment:</h2>
        <h3>Name: {appointment.name}</h3>
        <h3>Email: {appointment.email}</h3>
        <h3>Phone: {appointment.phone}</h3>
        <h3>Date: {appointment.date.split('T')[0]}</h3>
        <h3>Time: {appointment.time}</h3>
        </div>
          <Fragment>
          <br></br>

          </Fragment>

        <Button href="#/" variant="secondary">Back</Button>
      </div>
    </div>
  )

}

}

export default withRouter(Appointment)
