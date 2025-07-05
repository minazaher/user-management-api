# User Management API

NestJS REST API for user management with MongoDB

## Setup Instructions

### Prerequisites
- Node.js v20+
- MongoDB (local or Atlas)
- npm

### Installation
```bash
# Clone repository
git clone https://github.com/minazaher/user-management-api

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your MongoDB credentials
```

### Running Locally
```bash
# Development mode (watch)
npm run start:dev

```

## API Usage

### Example cURL Commands

**1. Create User**
```bash
curl -X 'POST' \
  'http://localhost:3000/users' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "John Doe",
  "email": "user122@example.com",
  "age": 25
}'
```

**2. Get All Users**
```bash
curl -X 'GET' \
  'http://localhost:3000/users' \
  -H 'accept
```

**3. Get Single User**
```bash
curl -X 'GET' \
  'http://localhost:3000/users/<USER_ID>' \
  -H 'accept: */*'
```

**4. Update User**
```bash
curl -X 'PUT' \
  'http://localhost:3000/users/<USER_ID>' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "John Doe",
  "email": "user143@example.com",
  "age": 25
}'
```

**5. Delete User**
```bash
curl -X 'DELETE' \
  'http://localhost:3000/users/<USER_ID>' \
  -H 'accept: */*'
```

## Environment Configuration
Required variables in `.env`:
```ini
PORT=3000
MONGO_URI=mongodb://localhost:27017/user-management
```

## Documentation
Access Swagger UI at: `http://localhost:3000/api` when running locally
