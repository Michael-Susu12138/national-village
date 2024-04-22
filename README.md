# National Village

## Introduction

**National Village** is an informative website designed specifically for the NYU community, allowing both users and restaurant owners to engage in a dynamic and interactive way. Restaurant owners can register and publish discounts, while users can browse these offers and find guided routes via Google Maps to these locations. This site initially focuses on the NYU campuses including NYU Tandon, NYU CAS, and NYU Shanghai, with plans to expand nationwide.

## Team Members

- **Amanda Cuevas** - Frontend Developer
- **Christ Chen** - Frontend Developer
- **Michael Chen** - Backend Developer & Database Management

## Technologies Used

- **MERN Stack**:
  - **MongoDB** - Database
  - **Express.js** - Backend Framework
  - **React** - Frontend Framework
  - **Node.js** - Server Environment
- **Google Maps API** - For navigating users to restaurants

## Features

- User and restaurant owner registration and login.
- Ability for restaurant owners to post and manage discounts.
- Display of restaurants with available discounts on various NYU campuses.
- Interactive map guiding users to restaurant locations.

## Project Structure

/national-village
|-- /backend
| |-- /controllers
| |-- /models
| |-- /passports
| |-- /public
| |-- /routes
| |-- /test
| |-- package.json
| -- server.mjs
|-- /frontend
| |-- /public
| |-- /src
| | |-- /components
| | |-- /services
| | |-- /pages
| | -- App.jsx
| | -- main.jsx
| |-- package.json
-- README.md

## Setup and Installation

Ensure you have Node.js and npm installed before setting up the project.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Michael-Susu12138/national-village.git
   cd national-village
   ```
2. **Set up the Backend and it will be running on http://localhost:8000/ :**
   ```bash
   cd backend
   npm install
   npm start
   ```
3. **Set up the Frontend:**
   ```bash
   cd ../frontend
   npm install
   npm start
   ```
4. **The frontend will start on http://localhost:5173/**
   Environment Variables:
   Ensure to set up your MongoDB URI, Google Maps API key, and other required environment variables in a .env file in the backend and frontend directory.

## Contributions

- Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

## Fork the Project

- Create your Feature Branch (git checkout -b feature/AmazingFeature)
- Commit your Changes (git commit -m 'Add some AmazingFeature')
- Push to the Branch (git push origin feature/AmazingFeature)
- Open a Pull Request

## Contact

- Amanda Cuevas - aac676@nyu.edu
- Christ Chen - hc3539@nyu.edu
- Michael Chen - yc4557@nyu.edu

This README provides a clear description of your project, its structure, how to get started with it, and how to contribute, alongside essential contact information and acknowledgments. Adjust paths, URLs, and specific commands according to your actual project setup and repository details.
