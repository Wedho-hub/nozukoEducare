# Nozuko Educare — Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [How to Run the App](#how-to-run-the-app)
   - [Backend Setup](#backend-setup)
   - [Frontend Setup](#frontend-setup)
3. [How to Blog (Admin Guide)](#how-to-blog-admin-guide)
4. [Project Structure](#project-structure)
5. [API Endpoints](#api-endpoints)

---

## Project Overview
Nozuko Educare is a full-stack web application for a learning centre, featuring a React + Vite frontend and an Express/MongoDB backend. The platform supports blogging, class management, and user authentication, with a professional, mobile-friendly UI.

---

## How to Run the App

### Backend Setup
1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```
2. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in:
     - `PORT` (e.g. 5000)
     - `MONGO_URI` (your MongoDB connection string)
     - `JWT_SECRET` (a strong secret for JWT)
     - `FRONTEND_URL` (e.g. http://localhost:5173)
3. **Seed admin user (optional):**
   ```bash
   npm run seed:admin
   ```
4. **Start the backend server:**
   ```bash
   npm run dev
   ```
   The API will be available at `http://localhost:5000` (or your chosen port).

### Frontend Setup
1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```
2. **Start the frontend dev server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` by default.

---

## How to Blog (Admin Guide)

### Requirements
- You must be logged in as an admin. Obtain credentials from the project owner or seed an admin user.

### Steps to Create a Blog Post
1. **Login as admin:**
   - Go to `/admin/login` on the frontend and enter your credentials.
2. **Access the blog editor:**
   - Navigate to `/admin/write`.
3. **Fill in the blog form:**
   - **Title:** Required.
   - **Slug:** Optional (auto-generated from title if left blank).
   - **Meta description/Excerpt:** Optional, for SEO and previews.
   - **Cover image:** Optional. Upload an image file (JPG/PNG).
   - **Content:** Required. Supports markdown or plain text.
   - **Publish now:** Check to make the post public immediately.
4. **Submit:**
   - Click "Submit". On success, you’ll see a confirmation and be redirected to the blog page.

### Notes
- Only admins can create, edit, or delete blog posts.
- Blog posts are visible to all users once published.
- Images are uploaded to the backend and served from there.

---

## Project Structure

- `backend/` — Express API, MongoDB models, authentication, blog/class endpoints
- `frontend/` — React app (Vite), pages, components, hooks, and styles

---

## API Endpoints (Selected)

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT
- `GET /api/blogs` — List published blog posts
- `POST /api/blogs` — Create blog (admin only)
- `GET /api/classes` — List classes
- `POST /api/classes` — Create class (admin only)

---

For further details, see the `README.md` files in each folder or contact the developer.

---

**Site developed by [Tishbite Digital](https://tishbite.digital)**
