
# Healthify - Fitness Tracker Web App

Healthify is a fitness tracker web app that allows users to create an account and track their health and fitness activities, including workouts, nutrition, and goals.

## Features:
- User registration and login functionality.
- Allows users to store fitness data and track progress.
- Responsive UI to be used on mobile and desktop devices.
- Integrated with MongoDB for storing user data (back-end setup required).

## Quality Assurance (QA) Testing

### Overview:
The **Healthify - Fitness Tracker Web App** has undergone various testing methodologies to ensure high-quality performance, reliability, and user experience. Here are the types of testing implemented:

### 1. **Manual Testing**:
   - **Test Cases**: Created test cases for user registration and login functionality.
   - **Testing Flow**: Tested the flow of the app by entering valid and invalid input for registration and ensuring the correct error messages were displayed.
   - **User Experience Testing**: Evaluated UI elements for responsiveness and proper alignment.

### 2. **Automated Testing**:
   - **Selenium WebDriver**: Automated user registration testing to ensure that the user information is correctly stored in the database.
   - **Jest**: Implemented basic unit tests for JavaScript functionality (validating input fields, ensuring buttons trigger appropriate actions).
   - **API Testing**: Used **Postman** to test the registration API, checking the status codes and response data.

### 3. **Cross-Browser and Device Testing**:
   - Ensured that the app works seamlessly across different browsers (Chrome, Firefox, Safari, Edge).
   - **Mobile Responsiveness**: Tested on multiple screen sizes to verify that the UI is mobile-friendly and adapts correctly.

### 4. **Defect Tracking**:
   - **JIRA**: Managed defects, created issues, and tracked them through resolution with the development team.
   - **Bug Reports**: Regularly reported issues with details and steps to reproduce, ensuring efficient bug resolution.

### 5. **Security Testing**:
   - Ensured that sensitive user data (e.g., passwords) is securely handled (hashed passwords before saving them in MongoDB).
   - Validated that the registration form does not accept SQL injections or other malicious input.

### 6. **Test Automation Framework**:
   - Built an automated test framework using **Selenium** for the key user registration flow.
   - The framework can be extended to include additional user interactions for future testing cycles.

### 7. **Performance Testing**:
   - Conducted basic load testing to ensure that the app can handle multiple concurrent user registrations.
   - Used Chrome's Developer Tools to monitor performance and ensure that the app loads efficiently.

## Technologies Used:
- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js, MongoDB (for user data storage)
- **Tools:** Git, GitHub, JIRA for issue tracking, Postman for API testing

## How to Use:
1. Enter a username and password to create an account.
2. Click the "Register" button to submit the registration.
3. If registration is successful, a message will be displayed.

## Setup:

### 1. Clone the repository:
```
git clone https://github.com/yourusername/healthify.git
```

### 2. Install the necessary dependencies:
```
npm install
```

### 3. Run the backend (Node.js server):
```
node server/server.js
```

### 4. Open the app in your browser:
```
http://localhost:3000
```

## Testing:
- The application includes front-end registration functionality.
- For back-end API testing, you can use Postman to send `POST` requests to `http://localhost:5000/register`.

## Known Issues:
- No login functionality has been implemented yet (only registration).
- Error handling can be improved for better user feedback.

## Contributing:
- Fork the repository and submit a pull request with enhancements or bug fixes.
