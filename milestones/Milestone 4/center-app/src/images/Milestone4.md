# Grand Canyon University (GCU) Programming in Java III CST-339 - Milestone 4
# Lindsey DeDecker
# April 18th, 2026


## Project Status and Design Report

### Initial Planning

To start this project, I first organized all my projects correctly in git. I created and got my GitHub repository organized correctly to match the course format.  Making sure that my activity and Milestone assignments were in the correct folders.  I used Git Bash and became very farmiliar with that to complete the repository organization.

I then shifted the focus from planning the project to implementation and testing.  Work was completed in Visual Studio Code.  Backend functionality, database connectivity and API endpoints were the main goal with this project. I began integrating the application layers: backend logic in the application, Database connectivity using MySQL and APU testing using Postman.

#### Milestone 4

This week, the project was extended to incluse a front-end Angular application.  Here I connected the existing API that was created in Milestone 3 with an Angular front end that allows user to perform full CRUD operations on the daycare centers.

The front-end was created within Visual Studio Code and used Angular. The front end communicated with the backend API using HTTP requests.

Features added:
- Navigation using Angular routing and Bootstrap navigation bar
- List view to display all centers
- Detail view to display information for a single center
- Form view for creating and updating centers
- Delete functionality from the UI

---

### Retrospective Results

Successes
- Successful API endpoint testing.
- Establishing a working database connection
- Successfully built and tested the backend with the database and API endpoints
- Successfully connected Angular frontend to the REST API
- Implemented full CRUD functionality in the UI
- Used Angular services to manage API communication
- Created a responsive UI using Bootstrap

Small challenges
- Debugging database connection issue
- Creating a small flow error between the backend logic
- Resolving Angular change detection issues
- Ensuring proper data slow between frontend and backend

Any challenges were resolved during development and it is working as expected. 

---

## Design Documentation

### General Technical Approach

Layered architecture approach
- **Controller Layer**: Handles incoming API requests
- **Service Layer**: Contains business logic
- **Data Access Layer DAO**: Manages communication with the MySQL Database
- **Database Layer**: Stores persistent application data

Development is being done one step at a time through the milestones.  The layers are being tested as they are being created. Postman was used to validate the API endpoints before creating the UI. This layerd structure ensures clear seperation of concerns and allows each part of the application to be developed, tested, and maintained independently.

---

### Front-End Design

The front-end was developed using Angular and follows a component based architecture.

Key components:
- **Home Component**: Displays introdution and navigation options
- **List Component**: Displays all centers in a table format
- **Detail Componenet**: Displays information for a single center
- **Form Component**: Handle both create and update operations

A service later was implemented in Angular to handle the communication wtih the backend API using HTTP requests.

routing was configured to allow navigation between views:
- '/' - Home page
- '/centers' - List view
- '/centers/new' - create a new center
- '/centers/:id' - view a specific center
- '/centers/:id/edit' - edit an existing center

---

#### Back end design 

- **Visual Studio Code** for development.
- **REST API endpoints** for handling all application requests
- **Postman** for testing the API endpoints seperately from UI
- **MySQL Workbench** for database creation and storage
- Structred code into controllers, services and data access objects to allow it to be easy to maintain and scale

---

### Design Updates and Known Issues

| Item | Update Made | Status |
|------|-----------|--------|
| Angular Frontend | Created Angular UI application | Complete |
| Navigation | Added Bootstrap navbar and routing | Complete |
| CRUD UI | Implemented Create, Read, Update, Delete | Complete |
| API Integration | Connected Angular service to REST API | Complete |
| Validation | Form validation implemented | Partial |
| Error Handling | Error messages displayed | Partial |
| Search/Filter | Not implemented | Known Issue |

#### Risks

- Database connection issues could prevent data from being properly stored or retrieved
- Testing and proper documentation as creating will be important as the project grows to maintain it. 

--- 

### Division of Work (Solo Approach)

All aspects of development, design and documentation are done by Lindsey.

Responsibilities:
- Designing application
- Writing backend application in VSC
- Designing and testing API endpoints
- Creating and managing MySQL Database
- Debugging and validating application functionality
- Documenting progress and project details in Markdown

---

## Sitemap Diagram

![Sitemap Diagram](../Images/Sitemap.png)

## User Interface Diagram 

![UI](../Images/UI1.png)
![UI](../Images/UI2.png)
![UI](../Images/UI3.png)

## Class Diagram 

![Class Diagram](../Images/class.png)

## Service API Design 

The applicaiton uses REST API endpoints.

Examples:
- 'GET /centers' - Retrieves all centers from the database
- 'GET/centers/{id}' - Retrieves a specific center by ID
- 'POST /centers' - Create a new center
- 'PUT /centers{id}' - Update and existing center
- 'DELETE /centers{id}' - Delete a center

These endpoints have been tested in Postman and are now working correctly through the Angular frontend application. 

---

## Security Design 

Basic security has been implemented and security will be expanded in future projects as the milestone grows. It currently includes validating input data before processing it. 


## Screencast URL 

- [My Presentation](https://www.loom.com/share/650fef3a80374532a2366bb110557010)

This presentation demonstrates the completed application including the navigartion bar, creating, viewing, updateing and deleting centers and real time updated to the UI based on the user interactions. 


