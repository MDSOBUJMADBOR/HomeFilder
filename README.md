
# 🏡 HomeFinder — Modern Real Estate Platform

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-4-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-8-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Better_Auth-Authentication-6366F1?style=for-the-badge" />
</p>

<p align="center">
  <strong>
    A modern full-stack real estate platform for discovering, managing,
    and exploring properties with a clean, responsive, and user-friendly experience.
  </strong>
</p>

<p align="center">
  <a href="https://home-filder.vercel.app">
    <img src="https://img.shields.io/badge/Live_Demo-Visit_Website-2563EB?style=for-the-badge" />
  </a>
  <a href="https://github.com/MDSOBUJMADBOR/HomeFilder">
    <img src="https://img.shields.io/badge/Client-GitHub-181717?style=for-the-badge&logo=github" />
  </a>
  <a href="https://github.com/MDSOBUJMADBOR/HomeFilder-Server">
    <img src="https://img.shields.io/badge/Server-GitHub-181717?style=for-the-badge&logo=github" />
  </a>
</p>

---

## 🌐 Live Demo

### 🚀 Live Website

**HomeFinder**

https://home-filder.vercel.app

### 💻 Frontend Repository

https://github.com/MDSOBUJMADBOR/HomeFilder

### ⚙️ Backend Repository

https://github.com/MDSOBUJMADBOR/HomeFilder-Server

---

# 📖 About The Project

**HomeFinder** is a modern full-stack real estate platform designed to make property discovery simple, efficient, and convenient.

Users can browse properties, search and filter listings, view detailed property information, save favorite properties, communicate with agents, and manage their own property listings through a personalized dashboard.

The application focuses on:

- Clean and modern UI
- Responsive design
- Secure authentication
- Property management
- Search and filtering
- User dashboards
- Real estate content
- Scalable full-stack architecture

---

# ✨ Key Features

## 🏠 Public Features

- Responsive modern homepage
- Browse all properties
- Property search
- Category filtering
- Location filtering
- Sorting options
- Featured properties
- Property details
- Property gallery
- Property status
- About page
- Blog system
- Contact page
- Privacy policy
- Responsive navigation
- Responsive footer
- Social media integration

---

## 🔐 Authentication

HomeFinder provides a secure authentication system powered by Better Auth.

### Authentication Features

- Email & password registration
- Email & password login
- Persistent authentication
- Protected routes
- Session management
- Logout functionality
- Role-based dashboard access

---

## 🏡 Property Management

Users can explore detailed information about properties.

### Property Features

- Property overview
- Property specifications
- Property gallery
- Property location
- Property status
- Property reviews
- Agent information
- Contact agent
- Call agent
- Live chat UI
- Add to favorites
- Remove from favorites

---

## 👤 User Dashboard

Authenticated users get access to a personalized dashboard.

### Dashboard Features

- Dashboard overview
- Property statistics
- Add new property
- My properties
- Manage listings
- Favorites
- My reviews
- Property analytics

---

## 📊 Dashboard Analytics

The dashboard provides useful property-related statistics.

- Total properties
- User properties
- Favorite properties
- Property statistics
- Listing management overview

---

## 📝 Blog System

HomeFinder includes a real-estate-focused blog system.

### Blog Categories

- Buying Guides
- Rental Tips
- Market News
- Investment Articles
- Home Maintenance
- Property Advice

Users can browse articles and open individual blog details pages.

---

## 📞 Contact System

The platform includes a dedicated contact experience.

### Contact Features

- Contact form
- Email information
- Phone information
- Office address
- Office hours
- Form validation
- Success/error notifications

---

# 🛠️ Technology Stack

## Frontend

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework |
| React 19 | UI development |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| HeroUI | UI components |
| Better Auth | Authentication |
| React Hook Form | Form management |
| Lucide React | Icons |
| React Icons | Icons |
| Recharts | Data visualization |

---

## Backend

| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | Backend framework |
| TypeScript | Type safety |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| Better Auth | Authentication |
| CORS | Cross-origin requests |
| dotenv | Environment configuration |

---

# 🏗️ Project Architecture

```text
                    ┌─────────────────────┐
                    │     HomeFinder      │
                    │    Web Platform     │
                    └──────────┬──────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
        ┌───────▼────────┐           ┌────────▼────────┐
        │    Frontend    │           │     Backend     │
        │    Next.js     │◄─────────►│    Express.js   │
        │    React       │   API     │    Node.js      │
        └───────┬────────┘           └────────┬────────┘
                │                             │
                │                             │
                │                      ┌──────▼──────┐
                │                      │   MongoDB   │
                │                      │  Database   │
                │                      └─────────────┘
                │
        ┌───────▼────────┐
        │  Better Auth   │
        │ Authentication │
        └────────────────┘
````

---

# 📁 Project Structure

## Frontend

```text
HomeFilder/
│
├── app/
├── components/
├── hooks/
├── lib/
├── providers/
├── types/
├── public/
│
├── .env.local
├── package.json
├── tsconfig.json
└── README.md
```

## Backend

```text
HomeFilder-Server/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.ts
│
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

---

# 🚀 Getting Started

Follow the steps below to run HomeFinder locally.

## 1. Clone the Frontend

```bash
git clone https://github.com/MDSOBUJMADBOR/HomeFilder.git
```

## 2. Clone the Backend

```bash
git clone https://github.com/MDSOBUJMADBOR/HomeFilder-Server.git
```

---

# 📦 Installation

## Frontend

```bash
cd HomeFilder
npm install
```

## Backend

```bash
cd HomeFilder-Server
npm install
```

---

# ⚙️ Environment Variables

Create a `.env.local` file inside the frontend project.

## Frontend `.env.local`

```env
NEXT_PUBLIC_API_URL=YOUR_API_URL

NEXT_PUBLIC_AUTH_URL=YOUR_AUTH_URL
```

Create a `.env` file inside the backend project.

## Backend `.env`

```env
PORT=5000

MONGODB_URI=YOUR_MONGODB_URI

DATABASE_NAME=YOUR_DATABASE_NAME

BETTER_AUTH_SECRET=YOUR_SECRET

BETTER_AUTH_URL=YOUR_SERVER_URL
```

> ⚠️ Never commit `.env` or `.env.local` files to GitHub.

---

# ▶️ Run the Application

## Start Frontend

```bash
cd HomeFilder
npm run dev
```

Frontend will run on:

```text
http://localhost:3000
```

---

## Start Backend

```bash
cd HomeFilder-Server
npm run dev
```

Backend will run on:

```text
http://localhost:5000
```

---

# 🏗️ Production Build

## Frontend

```bash
npm run build
npm start
```

## Backend

```bash
npm run build
npm start
```

---

# 📱 Application Pages

| Page                | Description                     |
| ------------------- | ------------------------------- |
| 🏠 Home             | Modern real estate landing page |
| 🔍 Explore          | Browse available properties     |
| 🏡 Property Details | Detailed property information   |
| ❤️ Favorites        | Saved properties                |
| 📞 Contact Agent    | Agent communication             |
| 💬 Chat             | Chat interface                  |
| 🔐 Login            | User authentication             |
| 📝 Register         | Create new account              |
| 📖 About            | About HomeFinder                |
| 📰 Blog             | Real estate articles            |
| 📄 Blog Details     | Individual article              |
| 📞 Contact          | Contact HomeFinder              |
| 📊 Dashboard        | User dashboard                  |
| ➕ Add Property      | Create property listing         |
| 🏘️ My Properties   | Manage listings                 |
| ⭐ My Reviews        | Manage reviews                  |

---

# 🔎 Core User Flow

```text
Visit HomeFinder
       │
       ▼
Explore Properties
       │
       ▼
Search / Filter
       │
       ▼
View Property Details
       │
       ├───────────────┐
       │               │
       ▼               ▼
 Add Favorite     Contact Agent
       │               │
       └───────┬───────┘
               ▼
         User Dashboard
               │
               ▼
      Manage Properties
```

---

# 🎯 Future Improvements

The following features are planned for future versions:

* 💳 Payment integration
* 📅 Property booking system
* 🗺️ Google Maps integration
* 🔎 Advanced property search
* ⚖️ Property comparison
* 🔔 Real-time notifications
* 🌙 Dark mode
* 🛡️ Admin dashboard
* 📸 Cloud image upload
* ⭐ Advanced reviews & ratings
* ✅ Property approval system
* 💬 Real-time messaging
* 📈 Advanced analytics

---

# 🔒 Security

HomeFinder follows several development best practices:

* Environment variables for sensitive credentials
* Protected authentication routes
* Session-based authentication
* Server-side API validation
* CORS configuration
* Secure database access
* Password authentication through Better Auth

---

# 📈 Project Highlights

### ⚡ Performance

Built with **Next.js** to take advantage of modern React and server-side rendering capabilities.

### 📱 Responsive Design

The interface is optimized for:

* Desktop
* Laptop
* Tablet
* Mobile

### 🎨 Modern UI

The application uses:

* Clean layouts
* Responsive cards
* Subtle shadows
* Blue/cyan visual accents
* Modern typography
* Smooth interactions
* Accessible navigation

### 🧩 Scalable Architecture

The frontend and backend are separated into independent applications, making the project easier to maintain, test, and scale.

---

# 👨‍💻 Developer

## MD Sobuj Madbor

**MERN Stack Developer | Full Stack Developer**

I enjoy building modern, responsive, and scalable web applications using JavaScript, TypeScript, React, Next.js, Node.js, Express.js, and MongoDB.

### Connect With Me

<p>
  <a href="https://github.com/MDSOBUJMADBOR">
    <img src="https://img.shields.io/badge/GitHub-MDSOBUJMADBOR-181717?style=for-the-badge&logo=github" />
  </a>
  <a href="https://www.linkedin.com/in/md-sobuj-madbor/">
    <img src="https://img.shields.io/badge/LinkedIn-MD_Sobuj_Madbor-0A66C2?style=for-the-badge&logo=linkedin" />
  </a>
</p>

<p>
  🌐 <strong>Portfolio:</strong>
  <a href="https://sobuj-madbor-portflio.vercel.app">
    sobuj-madbor-portflio.vercel.app
  </a>
</p>

<p>
  📧 <strong>Email:</strong>
  sobujmadbor660@gmail.com
</p>

---

# ⭐ Support

If you find **HomeFinder** useful or interesting, consider giving the repository a ⭐.

Your support helps motivate continued development and improvement.

---

<p align="center">
  Built with ❤️ by <strong>MD Sobuj Madbor</strong>
</p>

<p align="center">
  Next.js • React • TypeScript • Node.js • Express.js • MongoDB
</p>


