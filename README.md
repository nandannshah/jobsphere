# JobSphere

## Overview
**JobSphere** is a modern job portal that connects employers with potential employees. Employers can post job openings, while job seekers can browse, apply, and manage their applications efficiently. The platform aims to streamline the hiring process and provide a seamless experience for both parties.

## Features
- **User Authentication:** Secure sign-up and login for both employers and job seekers.
- **Job Posting:** Employers can create, update, and manage job listings.
- **Job Search & Filters:** Job seekers can search for jobs based on category, location, and experience level.
- **Application Management:** Users can apply for jobs and track application status.
- **Dashboard:** Personalized dashboards for employers and job seekers.
- **Bookmark Jobs:** Save jobs for later applications.
- **Responsive Design:** Fully optimized for mobile and desktop.

## Tech Stack
**Frontend:**
- React.js
- Tailwind CSS
- React Router

**Backend:**
- Node.js
- Express.js
- MongoDB (Neon Database)
- JWT Authentication

## Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/JobSphere.git
   cd JobSphere
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   Create a `config.env` file in the config folder in server and add the necessary configurations.
   ```
   PORT=8080
   CLOUDINARY_CLIENT_NAME=
   CLOUDINARY_CLIENT_API=
   CLOUDINARY_CLIENT_API_SECRET=
   FRONTEND_URL=http://localhost:5173
   MONGO_URI=
   JWT_SECRET_KEY=your_secret_key
   JWT_EXPIRE=7d
   COOKIE_EXPIRE=5
   ```
4. **Start the backend server:**
   ```bash
   npm start
   ```
5. **Start the frontend application:**
   ```bash
   npm run dev
   ```






