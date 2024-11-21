# Medium App Clone Backend

This is the backend for the Medium App Clone project. It provides the necessary APIs and database interactions for the application.

## .env File Configuration

Create a `.env` file in the root directory of your project and add the following configurations:

```env
# Server Configuration
PORT=5000

# MongoDB Configuration
MONGO_URI=mongodb+srv://iroshlashan31:8XqEYQDliGg2N6Z6@medium-app-clone-db.do6pg.mongodb.net/?retryWrites=true&w=majority&appName=medium-app-clone-db
# Environment
NODE_ENV=development
```

## Running Setup

Follow these steps to set up and run the backend server:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/IroshPerera/medium-app-clone-back-end.git
    cd medium-app-clone-back-end
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up the database:**
    Ensure your database is running and properly configured. Run any necessary migrations or seed scripts if applicable.

4. **Start the server:**
    ```sh
    npm run dev
    ```

    The server should now be running on the port specified in your `.env` file (default is 5000).

## API Documentation

For detailed API documentation, refer to the [API Docs](https://www.postman.com/aviation-architect-59945650/3c5eaf62-6e90-44d8-b021-b84a08c43f6a/request/l3jbg8e/update).


