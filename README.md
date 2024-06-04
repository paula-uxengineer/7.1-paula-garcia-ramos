# chat-socket.io

### Prerequisites

- Node.js and npm installed on your system.
- Docker installed on your system.

### Clone the project

1. Clone this repository on your local machine:

```bash
git clone https://github.com/paula-uxengineer/7.1-Paula-Garcia.git
```

2. Navigate to the project directory:

```bash
cd 7.1-paula-garcia
```

3. Open the directory:s

```bash
code .
```

### Get started

1. Navigate to back-end directory:

```bash
cd back-end
```

2. Install the project dependencies:

```bash
npm install
```

3. Run docker to container database:

```bash
npm run docker
```

(If you have the old version of docker try: npm run docker:old)

4. Navigate to back-end directory:

```bash
cd front-end
```

5. Install the project dependencies:

```bash
npm install
```

Copy the .env.example file and rename it to .env Make sure to configure the environment variables according to your preferences.

### Execute

1. Run the project in both directories

```bash
npm run dev
```

### Features

- Authetication with JWT: Registration, update, and deletion of players.
- Chat: Recording and deletion of dice rolls for players.
- Chat room: Multiple

### Technologies Used

- Node.js
- Express.js
- Socket.io
- JWT
- bcryptjs (to hash password to database)
- Mongoose (ORM for interacting with the database)
- MongoDB (NoSQL database)
