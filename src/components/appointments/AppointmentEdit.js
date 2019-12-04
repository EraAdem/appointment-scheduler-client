import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import AppointmentForm from './AppointmentForm'

const AppointmentEdit = (props) => {
  const [appointment, setAppointment] = useState({ name: '', email: '', phone: '' , date: '', time: ''  })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/appointments/${props.match.params.id}`)
      .then(res => setAppointment(res.data.appointment))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setAppointment(book => ({ ...appointment, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/appointments/${props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: { appointment }
    })
      .then(response => {
        props.alert({ heading: 'Success', message: 'You updated an appointment', variant: 'success' })
        setUpdated(true)
      })
      .catch(() => props.alert({ heading: 'Nah...', message: 'That didn\'t work', variant: 'danger' }))
  }

  if (updated) {
    return <Redirect to={`/appointments/${props.match.params.id}`} />
  }

  return (
    <AppointmentForm
      appointment={appointment}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath={`#appointments/${props.match.params.id}`}
    />
  )
}

export default withRouter(AppointmentEdit)
