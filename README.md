# Car Craze - Toy Selling Website [Visit Car Craze](https://car-craze-94dda.web.app/)

**Greetings! Welcome to Car Craze, your ultimate destination for toys!**

Car Craze is a dynamic and interactive toy selling website built using React.js. The website offers a user-friendly interface for customers to browse, search, and purchase a wide range of toys.

## Front-end Technologies
- **React.js:** The website is developed using React.js, a popular JavaScript library for building user interfaces.
- **Tailwind CSS:** Tailwind CSS is used for styling and layout.
- **Daisy UI:** Daisy UI is a component library for Tailwind CSS.
- **React Router DOM:** React Router DOM is utilized for client-side routing.
- **LottieFiles:** LottieFiles is used for adding animations to different elements on the website.
- **Axios:** Axios is used for making HTTP requests to the backend server.
- **clsx:** clsx is used for conditionally applying CSS classes to elements.
- **React Icons:** React Icons is used for adding icons to the website.

## Authentication
- **Firebase:** Firebase is integrated into the website for authentication purposes. The Firebase authentication system allows users to log in with their Google account or email/password.

## User Interaction
- **React Hook Form:** React Hook Form is utilized for form validation and handling input fields, providing an interactive and efficient form experience for users.
- **SweetAlert2:** SweetAlert2 is used for displaying alerts and notifications to users.
- **React Toastify:** React Toastify is utilized for displaying toast notifications.

## Back-end Technologies
- **Node.js:** Node.js is used as the backend runtime environment.
- **Express.js:** Express.js is a popular web application framework for Node.js.
- **MongoDB:** MongoDB serves as the database for the website.

## Features

### Authentication Integration
- Integrate Firebase authentication into your React.js project.
- Provide options for users to log in with Google or email/password.
- Update the website's UI to reflect the user's authentication state (logged in or logged out).

### Restrict Interactivity for Non-Logged-in Users
- Modify the routes and components to restrict certain functionalities for non-logged-in users.
- For the "All Toy" route, allow non-logged-in users to view the total number of added toys but disable the detail button, which should redirect them to the sign-up page.

### All Toy Page with Search Functionality
- Create a route to display all the toy data added by all users.
- Fetch the toy data from the backend and display it in a table format.
- Implement search functionality, allowing users to search for toys by name.
- Consider implementing pagination or infinite scrolling if there is a large amount of data.

### My Toy Route (Private) with Sorting Functionality
- Create a private route that can only be accessed by logged-in users.
- Display the toys added by the currently logged-in user.
- Fetch the user's toy data from the backend and display it in a list or table format.
- Implement sorting functionality, allowing users to sort the toy data by price.
- Add options to update or delete individual toy entries.

### Add Toy Route (Private)
- Create a private route that can only be accessed by logged-in users.
- Display a form for adding new toy data.
- Implement form validation using **React Hook Form**, a powerful form validation library for React.
- When a user submits the form, store the toy data in the backend (MongoDB).

### Single Toy Route (Private)
- Create a private route that can only be accessed by logged-in users.
- Display the details of a specific toy.
- Fetch the toy data from the backend based on the toy's ID.

### Toy Details
- On clicking the Toy Details button, if the user is logged in, they will be taken to the single toy route, where they can view the details of the toy.
- If the user is not logged in, they will be redirected to the sign-in page.

### Display Toy Data by Category on Homepage
- Add a "Shop by Category" section on the homepage.
- Fetch the toy data from the backend, filtered by category.
- Display the filtered data in a card format, grouped by category.

## Visit Car Craze
To experience the exciting world of Car Craze, please visit the [Car Craze Website](https://car-craze-94dda.web.app/). Get ready to explore a wide range of toys and have a fantastic shopping experience!

By combining these technologies, Car Craze delivers a feature-rich toy selling platform with seamless navigation, secure authentication, visually appealing animations, efficient HTTP requests, and a powerful backend infrastructure.
