import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const AppointmentForm = (props) => {
  const { appointment, handleChange, handleSubmit, cancelPath } = props
  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h2>Add an Appointment</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Enter your name"
              value={appointment.name}
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Enter the email"
              value={appointment.email}
              name="author"
              onChange={handleChange}
            />
          </Form.Group>
          
          <Button type="submit" variant="primary">Submit</Button>
          <Button type="button" href={cancelPath} variant="secondary" className="ml-2">Cancel</Button>
        </Form>
      </div>
    </div>
  )
}

export default AppointmentForm
