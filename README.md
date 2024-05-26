# Kanban Board Backend

This repository contains the backend implementation for the Kanban Board project. The backend is responsible for handling API requests, managing data storage, and implementing business logic. It is built using Node.js with TypeScript and uses MongoDB for data storage.

## Tech Stack

- **Node.js**: JavaScript runtime for building scalable network applications.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Express**: Minimal and flexible Node.js web application framework.
- **MongoDB**: NoSQL database for storing board and card data.

## Features

- Create, update, delete boards.
- Add, update, delete cards within boards.
- Drag and drop functionality for moving cards between columns and changing their order.
- No user authentication; boards are managed anonymously.

## Endpoints

### Boards

- `GET /boards/:id`: Get a board by its ID.
- `POST /boards`: Create a new board.
- `PATCH /boards/:id`: Update an existing board.
- `DELETE /boards/:id`: Delete a board by its ID.

### Cards

- `GET /boards/:boardId/cards`: Get all cards for a specific board.
- `POST /boards/:boardId/cards`: Add a new card to a board.
- `PUT /boards/:boardId/cards/:cardId`: Update a card in a board.
- `DELETE /boards/:boardId/cards/:cardId`: Delete a card from a board.

## Testing

Testing is not implemented yet. Future improvements will include unit and integration tests.

## Deployment

The backend is deployed on Vercel and can be accessed at [https://kanban-board-back.vercel.app/](https://kanban-board-back.vercel.app/).

## Live Demo

- Frontend: [https://allagrey.github.io/kanban-board/](https://allagrey.github.io/kanban-board/)
- Backend: [https://kanban-board-back.vercel.app/](https://kanban-board-back.vercel.app/)

## Repositories

- Frontend Repository: [https://github.com/AllaGrey/kanban-board](https://github.com/AllaGrey/kanban-board)
- Backend Repository: [https://github.com/AllaGrey/kanban-board-backend](https://github.com/AllaGrey/kanban-board-backend)

## Possible Improvements

### Add a Select Dropdown for Existing Boards

- Implement a dropdown menu to select from existing boards (displaying ID and name).
- Limit the dropdown to show the 10 most recently modified boards.

### Enhanced Error Handling

- Implement more detailed error handling using notification systems (e.g., toasts).
- Provide clear and user-friendly error messages for various error scenarios.

### Add Authentication and Board Deletion Restrictions

- Implement user authentication to secure the application.
- Restrict board deletion to the author or authenticated users with appropriate permissions.

### Write Tests

- Implement unit tests and integration tests to ensure code quality and reliability.
- Use testing frameworks suitable for the tech stack, such as Jest for Node.js and TypeScript.

### Add Swagger for API Documentation

- Integrate Swagger to provide interactive API documentation.
- Enable easy testing and exploration of API endpoints through the Swagger UI.
