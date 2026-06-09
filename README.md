<<<<<<< HEAD
TaskFlow - Personal Task Manager
Dylan Wayne S. Fernandez
IT0063 - Advanced Web Design, TW291

TaskFlow is a transactional web application that allows users to manage tasks through full CRUD (Create, Read, Update, Delete) operations.

FEATURES INCLUDE:
- Create new tasks,
- View existing tasks,
- Update task status
- Delete tasks

TECHNOLOGIES USED:
- HTML
- CSS
- JavaScript
- JSON Server (local development backend)
- MockAPI (hosted backend)
- Fetch API

The project was developed using HTML, CSS, JavaScript, and REST API integration through the Fetch API.

PROJECT LINKS
Live Frontend: https://dylan-phi.github.io/taskflow/ 
GitHub Repository: https://github.com/Dylan-phi/taskflow 
Hosted Backend API: https://6a1d3348bcc4f20d5ca421e3.mockapi.io/tasks

RUNNING THE PROJECT:

Option 1: Using the Hosted Backend
1. Clone the repository
   git clone https://github.com/Dylan-phi/taskflow.git

2. Open project folder
   cd taskflow

3. Ensure the API constant inside js/app.js is set to:
   const API = "https://6a1d3348bcc4f20d5ca421e3.mockapi.io/tasks";

4. Open the project using VSCode Live Server

5. Access the application through browser


Option 2: Run Using Local JSON Server
This option creates a local REST API for development and testing.


1. Install Node.js https://nodejs.org (if you don't have one)
   Verify installation: node -v/npm -v

2. Install JSON Server 
   npm install -g json-server
   json-server --version

3. Create db.json
   Create file: db.json
   Example content:
    {
    "tasks": []
    }

4. Start Local Backend
   json-server --watch db.json --port 3000
   If successful, JSON Server will expose:

  "http://localhost:3000/tasks"

CONFIGURE FRONTEND FOR LOCAL BACKEND (OPTIONAL)

1. Open js/app.js

2. Replace const API = "https://6a1d3348bcc4f20d5ca421e3.mockapi.io/tasks";
   With const API = "http://localhost:3000/tasks"; 

3. Save the file

4. Start Frontend by opening the project using VSCode Live Server

The application should now communicate with your local JSON Server backend.

CRUD FEATURES

1. Create (POST)
   Users can create new tasks through the task form.

2. Read (GET)
   Tasks are automatically retrieved from the API and displayed when the application loads.

3. Update (PUT)
   Users can edit task information or mark tasks as completed.

4. Delete (DELETE)
   Users can permanently remove tasks from the system.

ERROR HANDLING

The application uses JavaScript try-catch blocks to handle API failures gracefully.

Example scenarios include:
 Server unavailable
 Network connection failure
 Invalid API response

Instead of crashing, the application displays an error message and logs details to the browser console.
=======
# taskflow
>>>>>>> d234263a272a71a5115270958f0a5c5b7db1c2e3
