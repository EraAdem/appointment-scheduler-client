import React, { useEffect, useState, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'

const Appointment= props => {
  const [appointment, setAppointment] = useState(null)
//  const userId = props.user ? props.user._id : null

  useEffect(() => {
    axios(`${apiUrl}/appointments/${props.match.params.id}`)
      .then(res => setAppointment(res.data.appointment))
      .catch(() => props.alert({ heading: 'That didn\'t work', message: 'Couldn\'t retrieve the requested appointment', variant: 'danger' }))
  }, [])

  const handleDelete = event => {
    axios({
      url: `${apiUrl}/books/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => {
        props.alert({ heading: 'Success', message: 'You deleted a book', variant: 'warning' })
        props.history.push('/')
      })
      .catch(() => {
        props.alert({ heading: 'Rut roh', message: 'Something went wrong', variant: 'danger' })
      })
  }

  if (!appointment) {
    return <p>Loading stuff...</p>
  }

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h2>{appointment.name}</h2>
          <Fragment>
            <Button href={`#appointments/${props.match.params.id}/edit`} variant="primary" className="mr-2">Update</Button>
            <Button onClick={handleDelete} variant="danger" className="mr-2">Delete</Button>
          </Fragment>
        )}
        <Button href="#/" variant="secondary">Back</Button>
      </div>
    </div>
  )
}

export default withRouter(Appointment)
