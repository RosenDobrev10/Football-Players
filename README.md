# Football Players

**Football Players** is my final project for the Angular course in SoftUni. The application is created with SoftUni practice server for backend and Angular for the frontend.

**Football Players** is a web application that allows users to see their favourite players. Basic authentication is available, depending on whether you are creator or not of the player there is different functionalities. If you are the creator you can edit or delete your player, otherwise you can like the player.  

## Table of Contents

1. [Overview](#overview)
2. [Local installation](#local-installation)
3. [Demo](#demo)
4. [Features](#features)
   - [User Features](#user-features)
5. [Deployment](#deployment)
   - [Backend Deployment](#backend-deployment)
   - [Frontend Deployment](#frontend-deployment)
   - [Database](#database)
6. [Architecture-Overview](#architecture-overview)
7. [Screenshots](#screenshots)
8. [License](#license)
   
## Overview

The main objective of Football Player application is to provide users with an easy-to-use platform to see their favourite players.

- **Not Logged-in User:** Can view each player profile without functionalities, login, register, search and home page.
- **Logged-in User:** Can add new players, view their own profile with added players, and edit/delete the players they added. They can also like players, that other users create.

- ## Local installation

### To install and preview locally, follow these steps:
1. Clone the repository to your local machine
2. Navigate to the server folder to start the server (cd .\server\)
    - Start the server with (node .\index.js) command to start the back-end
3. Navigate to the client folder (cd .\client\)
    - npm install - command for install all packages and dependencies
    - npm start - to start the development server and run the app
    - open your browser and go to http://localhost:4200 to access the application
  
## Demo

Check out the live demo of Football Players at [https://main--football-players-rd.netlify.app](https://main--football-players-rd.netlify.app)

**Demo Users:**

    - Email: peter@abv.bg
    - Password: 123456

    - Email: george@abv.bg
    - Password: 123456

## Features

### User Features

- Register and log in to an account
- Browse each player information
- Add new player
- Access a personal profile page with players they added
- Edit or delete their own players
- Like other users players

## Deployment

### Backend Deployment

The backend of Football Players is deployed on [Render](https://render.com/). The backend handles the core functionalities, including user authentication and CRUD operations for each player.

### Frontend Deployment

The Angular frontend of Football Players is deployed on [Netlify](https://www.netlify.com/). Netlify serves the frontend to users and provides a seamless browsing experience.

## Architecture-Overview

## App Module
The `AppModule` is the root module of the application. It sets up the main components and services, and it acts as the entry point to the application.

![AppModule](https://github.com/RosenDobrev10/Football-Players/assets/104829819/417f5fb7-cca6-406c-a216-65ae346d4aff)

## Auth Module
The `AuthModule` contains components about users.

![AuthModule](https://github.com/RosenDobrev10/Football-Players/assets/104829819/a9947a91-5ae8-4939-897a-2053bf194d2d)

## Players Module
The `PlayersModule` contains components about players.

![PlayersModule](https://github.com/RosenDobrev10/Football-Players/assets/104829819/c03b17a4-07d7-4a74-8a33-ab00e8f07578)

## Shared Module
The `SharedModule` includes components that are shared across the application.

![SharedModule](https://github.com/RosenDobrev10/Football-Players/assets/104829819/449cc300-4df5-4f5c-ba31-b9e011f53323)

## Routes
The routing configuration defines the navigation paths within the application, allowing users to access different views based on their roles and actions.

![Routes](https://github.com/RosenDobrev10/Football-Players/assets/104829819/a47cf93a-c391-4db5-8eb8-7618c70c7904)

## Entire overview
![Overview](https://github.com/RosenDobrev10/Football-Players/assets/104829819/23a2e762-2002-4c55-b80b-e14a49286835)

# Screenshots

## Home Page
![home-page](https://github.com/RosenDobrev10/Football-Players/assets/104829819/5248dd6b-7b63-44f7-8814-e4d0c7903e89)

## Login
![login](https://github.com/RosenDobrev10/Football-Players/assets/104829819/16ea197e-fb0b-45e4-bd4b-d0d64af92020)

## Register
![register](https://github.com/RosenDobrev10/Football-Players/assets/104829819/5deb83ea-f8b9-4546-b0cf-55b496ddf53a)

## User Profile
![profile](https://github.com/RosenDobrev10/Football-Players/assets/104829819/5b05f0a6-eb08-40a5-b78a-bfef3afd5448)

## Search
![search](https://github.com/RosenDobrev10/Football-Players/assets/104829819/c62d081d-b72f-4aa2-97e1-b656f304f663)

## Add
![add](https://github.com/RosenDobrev10/Football-Players/assets/104829819/02bb608b-a1f5-4e8b-adf4-70a771c8f807)

## Navigation - Not Logged In
![header-not-logged=in](https://github.com/RosenDobrev10/Football-Players/assets/104829819/0bded223-5a14-4518-96ff-b01f9f83fb38)

## Navigation - Logged In User
![header-logged-in](https://github.com/RosenDobrev10/Football-Players/assets/104829819/46966bee-1b7a-4437-b35b-7bed9075f98f)

## Footer
![footer](https://github.com/RosenDobrev10/Football-Players/assets/104829819/f5c27107-ea9b-437c-8ba0-cc51c3a6fc28)

## License

This project is licensed under the MIT License
