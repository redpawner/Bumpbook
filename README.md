# BUMPBOOK

## Introduction

Bumpbook is a responsive, desktop app for expectant mothers.

It provides users with a single-page, user-friendly dashboard to store and view key information throughout their pregnancy journey.

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

<h4><em>npx nodemon index.js</em></h4>

## Usage

Once you have initiated both the client and server you will be directed to the landing page where you can register an account. You can then begin exploring all the features of the app.

## Acknowledgments

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
