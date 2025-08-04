# Newses — News Website Built with Next.js 🌐📰

[![Next.js](https://img.shields.io/badge/Next.js-13.4-blue)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.1-blue)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-blue)](https://tailwindcss.com/) [![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running in Development](#running-in-development)
  - [Building and Deployment](#building-and-deployment)
- [Project Structure](#project-structure)
- [Authors](#authors)
- [License](#license)

## Overview

**Newses** is a modern news website built with Next.js and TypeScript.  
Users can register, log in, browse, create, and edit news articles.  
Admin-only access controls ensure only administrators can publish or modify news.

## Features

- **Authentication & Authorization**
  - Email/password registration & login
  - Google OAuth via NextAuth
  - Role-based access: **user** / **admin**
- **News CRUD**
  - List latest articles
  - View single article
  - Admin-only create & edit
- **Responsive UI** with Tailwind CSS & HeroUI
- Integration with external news API (`newsdata.io`)
- MongoDB Atlas for data persistence

## Technologies

- **Next.js** 13 (App Router)
- **TypeScript**
- **Tailwind CSS** + **HeroUI**
- **NextAuth.js** (Credentials & Google OAuth)
- **MongoDB Atlas** + **mongodb**
- **React Hook Form** for form handling
- **bcryptjs** for password hashing

## Getting Started

### Prerequisites

- Node.js ≥ 16.13.0
- npm or yarn
- MongoDB Atlas account
- Google OAuth credentials (Client ID & Secret)

### Installation

```bash
git clone https://github.com/wrtyyyx/next-news
cd newses
npm install
# or
yarn install
```

### Running in Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building and Deployment

```bash
npm run build
npm start
# or
yarn build
yarn start
```

---

## Project Structure

```
├── src/
│   ├── app/                # App Router pages & API routes
│   │   ├── api/
│   │   │   ├── auth/       # NextAuth ([...nextauth]/route.ts)
│   │   │   └── news/       # News CRUD API
│   │   ├── news/
│   │   │   ├── create/     # Admin-only create page
│   │   │   └── [id]/       # View & edit article
│   │   └── page.tsx        # Home page (news list)
│   ├── components/         # Reusable UI components
│   ├── config/             # Configuration & types
│   ├── lib/                # MongoDB client & utilities
│   ├── services/           # External API calls
│   └── theme/              # Tailwind & HeroUI setup
├── scripts/                # Seed/admin scripts
├── .env.local
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```


