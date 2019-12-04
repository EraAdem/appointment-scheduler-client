import React, { useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import AppointmentForm from './AppointmentForm'

const AppointmentCreate = (props) => {
  const [appointment, setAppointment] = useState({ name: '', email: '', phone: '', date: '',time: '', originalLanguage: '' })

  const handleChange = event => {
    event.persist()
    setAppointment({ ...appointment, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/appointments`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { appointment }
    })
      .then(response => {
        props.alert({ heading: 'Success', message: 'You created an appointment', variant: 'success' })
        props.history.push(`/appointments/${response.data.appointment._id}`)
      })
      .catch(() => props.alert({ heading: 'Errr...', message: 'Something went wrong', variant: 'danger' }))
  }

  return (
    <AppointmentForm appointment={appointment} handleChange={handleChange} handleSubmit={handleSubmit} cancelPath='/' />
  )
}

export default withRouter(AppointmentCreate)
