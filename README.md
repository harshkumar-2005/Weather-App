# Weather Dashboard (Full-Stack)
A responsive, full-stack weather application built with React and Node.js/Express. This project features a custom proxy backend to securely fetch real-time weather data from the OpenWeatherMap API and is configured for testing across multiple devices on a local network.

## Key Features
Custom Express Proxy: Securely handles API requests to hide sensitive API keys from the client side.

Dynamic Search: Real-time fetching of weather data (temperature, humidity, wind speed, etc.) for any city.

Multi-Device Access: Pre-configured to be accessible by any device (mobile, tablet, etc.) connected to the same Wi-Fi.

Error Handling: Robust validation for empty inputs, invalid city names, and server connection issues.

Loading States: Improved User Experience (UX) with visual feedback during data fetching.

## Tech Stack
Frontend: React.js, Tailwind CSS, Vite.

Backend: Node.js, Express.js.

Integration: Fetch API, CORS.

API: OpenWeatherMap.

## Installation & Setup
1. Prerequisites Node.js installed on your machine.
An API Key from OpenWeatherMap.

2. Backend Setup
  ```
  cd backend
  npm install
  Create a .env file in the backend folder
  ```
Code snippet
```
PORT=3000
KEY=your_openweathermap_api_key
```
Start the server:
```
node index.js
```
3. Frontend Setup
```
cd frontend
npm install
Start the development server with network access:
```
```
npm run dev -- --host
```
# Local Network Access (Testing on Mobile)
To view the app on your phone while it's running on your computer:

Find your Local IP: Use ipconfig (Windows) or ifconfig (Mac/Linux) to find your IPv4 address ```(e.g., 192.168.1.15)```.

Update Frontend Request: Ensure the fetch call in App.jsx uses your Local IP instead of localhost.

Example: ```http://192.168.1.15:3000/v1/api/weather```

Connect: Open your phone's browser and navigate to ```http://<YOUR_LOCAL_IP>:5173```.

<img width="1234" height="547" alt="image" src="https://github.com/user-attachments/assets/402a00c9-528c-44fd-892d-eb64ecc60ebb" />

<img width="1234" height="547" alt="image" src="https://github.com/user-attachments/assets/8c56a18d-8414-438a-9096-6f2c6018d4ac" />

