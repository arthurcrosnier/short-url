# ShortURL

A modern URL shortener built with NestJS and React. This application allows users to create shortened URLs and resolve them back to their original form.

## 🚀 Features

- Create shortened URLs from long URLs
- Resolve shortened URLs to their original form
- Dark/Light mode support
- Rate limiting to prevent abuse
- SQLite database for simple deployment

## 🛠️ Tech Stack

### Backend

- NestJS
- TypeORM
- SQLite

### Frontend

- React
- Vite
- Chakra UI
- React Query
- React Hook Form

## 🏃‍♂️ Quick Start

1. Clone the repository:

```bash
git clone https://github.com/arthurcrosnier/short-url.git
cd short-url
```

2. Launch with Docker:

```bash
docker-compose up --build
```

3. Access the application:

- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## 🎯 Usage

1. **Create Short URL**:

   - Enter a long URL in the top form
   - Click "Shorten URL"
   - Copy the generated short URL

2. **Resolve URL**:
   - Enter a short URL or code in the bottom form
   - Click "Retrieve Original URL"
   - Get the original URL

## 🔜 Potential Improvements

1. **Features**:

   - URL click tracking and analytics
   - Custom URL aliases
   - URL expiration dates
   - QR code generation

2. **Technical**:

   - Add comprehensive test coverage
   - Implement caching
   - Set up monitoring and logging
   - Add error reporting service

3. **Security**:
   - Add CSRF protection
   - Implement URL scanning for malicious content
   - Add request validation middleware
