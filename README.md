# Company-Assignment-
Node.JS
Project Description
You are tasked with building a simple API that allows users to view, create, update, and delete notes. The notes should be stored in a JSON file on the server, and the API should be able to handle multiple users.

​

Requirements
Create a Node.js server that listens on port 3000.

Implement the following endpoints:

GET /notes: Returns an array of all notes.

GET /notes/:id: Returns the note with the specified ID.

POST /notes: Creates a new note with the provided title and content.

PUT /notes/:id: Updates the note with the specified ID with the provided title and content.

DELETE /notes/:id: Deletes the note with the specified ID.

Store the notes in a JSON file on the server. Each note should have an id, title, content, and user_id field. The id field should be a unique identifier for each note, and the user_id field should be used to associate notes with users.

Implement user authentication using JSON Web Tokens (JWT). Users should be able to sign up, sign in, and sign out. Only authenticated users should be able to access the API.

Implement error handling for all endpoints. If an error occurs, the API should return an appropriate HTTP status code and a descriptive error message.

Write unit tests for the API using the Jest testing framework.

​

Evaluation
To evaluate the candidate's proficiency in Node.js, you should assess the following:

Whether the candidate's implementation follows best practices for Node.js development, such as asynchronous programming and error handling.

The candidate's ability to implement user authentication using JWT.

The candidate's ability to write unit tests for the API.

The quality and completeness of the code.

The candidate's ability to complete the project within the given time frame.

​

Additional Instructions
Please provide a README.md file with instructions on how to run the server and the tests.

Please provide a brief explanation of your design decisions and any tradeoffs you made.

Please upload your code to a public GitHub repository and share the link