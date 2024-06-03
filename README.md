# Contact Form Application

# Overview
This project consists of a React-based contact form that allows users to send messages. Upon submission, an email is sent to both the user and the administrator using Node.js with Nodemailer. This README provides an overview of the project setup, usage, and deployment.

# Table of Contents
1. Setup and Installation
2. Environment Variables
3. Running the Application
4. Usage
5. API Endpoints
6. Nodemailer Setup

# 1. Setup and Installation

<h3>Prerequisites</h3> <br>
 Node.js <br>
 npm  <br>

Client-side Setup
1. Navigate to the client directory:
   cd client
2. Install dependencies:
   npm install

Server-side Setup
1. Navigate to the server directory:
   cd server
2. Install dependencies:
   npm install

# 2.Environment Variables
Create a .env file in the server directory and add the following variables:

 .env file:- <br>
 EMAIL=your-email@gmail.com <br>
 PASSWORD=your-app-password (in your email account)

# 3. Running the Application
Client
1. Start the React application:
   npm start

Server
1. Start the Node.js server:
   npm run dev

The client will be available at http://localhost:3000 and the server at http://localhost:5000.

# 4. Usage
The contact form allows users to input their name, email, and message. Upon submission, the data is sent to the server, which handles the email dispatch using Nodemailer.

1. Contact Form (Client-side)<br>
   Contact.js: Contains the React component for the contact form.<br>
   contact.css: Contains the styles for the contact form.
2. Email Sending (Server-side)<br>
   app.js: Contains the server setup and Nodemailer configuration.<br>
   feedback.hbs: Handlebars template for the email sent to the user.

# 5. API Endpoints
<h3>POST / </h3>
Sends an email to the user and the administrator.

Request Body:<br>
 { <br>
  "name": "User's Name",<br>
  "email": "user@example.com",<br>
  "message": "User's message"<br>
}<br>
Response:<br>
{<br>
  "message": "Mail sent successfully!"<br>
}

# 6. Nodemailer Setup
The sendMail function in index.js is responsible for sending emails to the user and the administrator.






