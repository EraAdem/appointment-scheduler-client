

#### App Screenshot:
![Screenshot](https://user-images.githubusercontent.com/54282250/70253453-3fe54000-1751-11ea-8072-29b877429ce1.png)

# Appointment Scheduler: A Description

 Appointment scheduling is important as it ensures that you make the best use of your time, it will also illustrate to others that you value your own time.This application allows the user to create an appointment with contact information and the available date and time for the appointment. The user can view the scheduled appointment,edit or delete it. Time is the most valuable thing and maybe here's a reason why wanted to do this project, or came up with this idea.


## Setup Steps

1.  Fork and Clone this repository.
1.  Run `install command` to install all dependencies
1.  Use `start command` to spin up the server.

## Important Links

-   [Client Repo](https://github.com/EraAdem/appointment-scheduler-client)
-   [API Repo](https://github.com/EraAdem/appointment-scheduler-api)
-   [Deployed API](https://boiling-mesa-32189.herokuapp.com)
-   [Deployed Client](https://github.com/EraAdem/appointment-scheduler-client)

## Planning Story

The first step of the planning story was the decision to work with the express-api template
for the backend and to work with react template for the client-side. I really wanted to have a SPA  built with React in my portfolio.  After creating user stories, drawing wireframes and ERD, I started working with backend part. This application is built with Express Api and MongoDB.I created resources, end points and tested  resource's end points with curl scripts. Next step was frontend part,using React(components) to connect user authorization to CRUD events. The last development step of the project was styling the application using Bootstrap.

### User Stories

-   As a user I want to sign in/up
-   As an unauthenticated user, I would like to sign up with email and password.
-   As an authenticated user, I would like to sign in with email and password.
-   As a signed in user, I would like to change password.
-   As a signed in user, I would like to sign out.
-   As a signed in user, I do not want to see sign-in/sign-up fields.
-   As a non-authenticated user, I would not want to see change-password/sign-out fields.
-   As a user, I would like forms to clear after submittal/failure.
-   As a user, I would like success/failure messages when I have completed an auth action.
-   As a user I want to Create a new appointment
-   As a user I want to Read multiple appointments
-   As a user I want to Read a single appointment
-   As a user I want to Update an appointment I own
-   As a user I want to Delete an appointment I own

### Technologies Used

-   REACT
-   Node.js
-   CSS
-   Bootstrap


### Catalog of Routes

Verb         |	URI Pattern
------------ | -------------
GET | /appointments
GET | /appointments/:id
POST | /appointments
PATCH | /appointments/:id
DELETE | /appointments/:id

### Unsolved Problems

-   Still need to work for the design of the application
-   Would like to eventually work and to connect with a third API.

## Images

---

#### Wireframe:
![Wireframe](https://user-images.githubusercontent.com/54282250/70253539-660ae000-1751-11ea-951c-00156b189ea0.jpg)

---


## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
