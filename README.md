# Job Application & Recruitment Management System

Portfolio-grade full-stack recruitment platform.

## Stack
React + Vite + JavaScript, React Router, Axios, CSS, Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs, Multer.

## Features
- Candidate/recruiter registration and login
- JWT authentication and role authorization
- Candidate profile, skills and PDF resume upload
- Job search, filtering, sorting and server-side pagination
- Recruiter job CRUD/closing and company profile
- Saved jobs
- Applications and status tracking
- Recruiter applicant management and statistics
- Transparent rule-based skill matching
- Seed data and demo credentials
- Centralized error handling and responsive UI

## Setup
Copy `server/.env.example` to `server/.env` and set your MongoDB URI and JWT secret.

Backend:
`cd server && npm install && npm run seed && npm run dev`

Frontend in another terminal:
`cd client && npm install && npm run dev`

Frontend: http://localhost:5173
API: http://localhost:5000
Health: http://localhost:5000/api/health

## Demo credentials
Candidate: candidate@example.com / Candidate@123
Recruiter: recruiter@example.com / Recruiter@123

## Note
Resume files use local disk storage for development. For production, replace it with object storage and keep only a file reference in MongoDB. Skill matching is rule-based and transparent, not an LLM.
