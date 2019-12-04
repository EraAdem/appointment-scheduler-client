import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Appointments = props => {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    console.log('props', props.user)
    axios({
      url: `${apiUrl}/appointments`,
      method: 'GET'
    })
      .then(response => {
        setAppointments(response.data.appointments.reverse())
      })
      .then(console.log('props', props))
      .then(() => props.alert({ heading: 'Success', message: 'You got appointments', variant: 'success' }))
      .catch(() => props.alert({ heading: 'Not able to retrieve appointments', message: 'Sorry this isn\'t working', variant: 'success' }))
  }, [])

  const AppointmentsJsx = appointments.map(appointment => (
    <ListGroup.Item
      key={appointment._id}
      action
      href={`#appointments/${appointment._id}`}
    >
      {appointment.name}
    </ListGroup.Item>
  ))

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1 classname='scheduled-appointments'>Scheduled Appointments</h1>
          {props.user && <Link to="/create-appointment">Add an appointment</Link>}
        </div>
        <ListGroup>
          {AppointmentsJsx}
        </ListGroup>
      </div>
    </div>

  )
}

export default Appointments
