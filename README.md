# Post-it

![Db image](/postit db.png)

Post-it is a simple social media app that tallows you to post anything (text, images, video, and/or audio) on a single post-it

Table of Contents

How to Install and Run
How to use the API and its Endpoints
Credits
How to Contribute

How to Install and Run

This project is a NodeJs/Vanilla JavaScript app that runs with Express. Download the code locally into your machine and ensure you have NodeJs installed on your computer. Once done, open the console inside the folder, and either run node app.js or npm run app. All the appropriate node modules have been installed and are contained in the node-modules folder, so not to worry. Make sure you have an active internet connection as the database is hosted online. Once you run the code, you should see a message " Database connected successfully". Once connected you can proceed to any http response software, app or code to directly interface with the API.

How to use the API and its Endpoints
User Authentication
Before you can access the API, you need to create an account and login. Send a POST request to: localhost:5000/api/v1/auth and in the body, supply

first_name
last_name
email
password

Once successfully registered, go to:localhost:4000/post-it/users/login; supply it your email and password; you'll get a refresh token and access token, pass in the access token to the authorization header before making any requests, depending on your user type you should have access to most of the API resources.

These methods will be stated for each api endpoint.

GET
localhost:4000/ -- Base api endpoint. Simply returns a successful message, indicating the API is alive.
4000/post-it/users//all-users -- Fetches all users available in the database. It takes no parameters.
4000/post-it/posts/all-post" -- Fetches all posts available in the database.
4000/post-it/comments//all-comments -- Fetches all comments available in the database.

POST
localhost:4000/post-it/users/ -- Creates a user in the database. Takes 3 main parameters from the request body in JSON format. These are: name, email and password
Example: { "name": "Precious", "email": "akolite98@gmail.com", "password": akolite98 }

localhost:4000/post-it/users/login -- requires a login authentication token

localhost:4000/post-it/posts/post - creates a post
localhost:4000/post-it/posts/post/:id -- gets a post with the id specified

PATCH
localhost:4000/post-it/users/update/:userId -- Updates a user previously created in the database. Takes 1 query parameter(userId) and 3 main parameters from the request body in JSON format: name, email and password.
localhost:4000/post-it/posts/update-post/:id" --n updates a post

DELETE
localhost:4000/post-it/users/delete/:userId -- Deletes a particular user. Takes one query parameter(userIdmId) for identifying the particular user to delete.
localhost:4000/post-it/posts/delete/:id -- deletes a particular post. Takes one query parameter(postId)
