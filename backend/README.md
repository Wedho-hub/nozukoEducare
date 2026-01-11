# Nozuko Educare - Backend

This folder contains the Express backend for the Nozuko Educare site.

Environment variables (copy `.env.example` to `.env`):
- PORT
- MONGO_URI
- JWT_SECRET
- FRONTEND_URL

Scripts:
- `npm run dev` - start with nodemon
- `npm start` - start node server
- `npm test` - run Jest tests
- `npm run seed:admin` - create an admin user from `seeds/seedAdmin.js`

API endpoints (basic):
- `POST /api/auth/register` - register a user
- `POST /api/auth/login` - login
- `GET /api/blogs` - list published blog posts
- `POST /api/blogs` - create blog (admin only)
- `GET /api/classes` - list classes
- `POST /api/classes` - create class (admin only)

Notes:
- In production the backend will serve the frontend static build from `../frontend/dist`.
- Use `FRONTEND_URL` to restrict CORS in production.
