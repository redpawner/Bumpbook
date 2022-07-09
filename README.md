# BUMPBOOK


## Introduction


Bumpbook is a responsive, desktop app for expectant mothers.

It provides users with a single-page, user-friendly dashboard to store and view key information throughout their pregnancy journey.

Features include account login and registration with custom built authentication; a due date calculator; an interactive appointments list; a baby name generator API + baby name list; a useful links list that dynamically changes (using an NHS API) depending on how far along the user is in their pregnancy; and the ability to upload baby bump pictures in a scrollable view reel.


## Tech Stack


|**Frontend**|**Backend**|**Database**|
|---:|---:|---:|
|React|Express|MongoDB|
|Zustand|Multer|Mongoose|

Bumpbook's frontend was built with React and Zustand state-management solution. The backend server was built with Express using Multer middleware for local disk image storage. MongoDB with Mongoose ODM was used for the database.


## Installation


1. Run the following command in the top directory to download the relevant packages:

<h4><em>npm install</em></h4>

2. Set up a [MongoDB](https://www.mongodb.com/) database running on your local machine.

3. Create a .env file in the server folder with the relevant information and a second .env in the client folder with the relevant information.

Please see the .env.example.md files in each folder for an explanation of the required key value pairs.


## Available Scripts


In the <strong>CLIENT</strong> directory, you can run:

<h4><em>npm start</em></h4>

This will run the app client. Open [http://localhost:PORT](http://localhost:PORT) to view the app in your browser.

The page will reload when you make changes in the client directory.

<br>
In the <strong>SERVER</strong> directory, you can run:

<h4><em>node index.js</em></h4>

This will run the back-end server. Alternatively you can use nodemon which will automatically reload the server when you make changes in the server directory e.g.
