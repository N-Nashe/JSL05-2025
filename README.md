# Kanban Board Task Management

A fully functional Kanban board task management system built with **HTML**, **CSS**, and **JavaScript**. The application supports **local storage persistence**, allowing tasks to be saved and loaded dynamically. Tasks can be added, edited, and deleted through a user-friendly modal interface. The UI updates in real-time and remains consistent even after refreshing the page.

## Features

- **Task CRUD operations:** Create, Read, Update, Delete tasks.
- **Local Storage Persistence:** Tasks persist between page reloads.
- **Modal Interface:** Add or edit tasks via a modal popup.
- **Status Columns:** Tasks are grouped by status: To Do, Doing, Done.
- **Real-time UI updates:** Task changes immediately reflect on the board.
- **Modular JavaScript:** Code is organized in multiple modules for maintainability.
- **Responsive Design:** The board adapts well to different screen sizes.
- **Well-documented:** JSDoc comments for better code understanding and maintenance.

## Technologies Used

- HTML5
- CSS3
- Javascript

## How to Use

1. Clone or download the repository.
2. Open `index.html` in your preferred browser.
3. Click the **"+ Add New Task"** button to open the modal and add a task.
4. Click on any existing task to edit or delete it.
5. Tasks will be saved automatically in your browser's local storage.

## Project Structure

- `initialData.js` - Contains initial task data and localStorage load/save functions.
- `script.js` - Enables adding, editing, and displaying tasks on the Kanban board using a modal form.
- `storage.js` - Provides utility functions to save and load the tasks to the browser's local storage
- `index.html` - Contains all webpage content and what the page contains e.g. text, emojis e.t.c.
- `styles.css` - Has all thec styling on the webpage from colours and fonts to spacing and responsive functionality 

## Future Improvements

- Add user authentication for multiple boards.
- Drag and drop support for tasks between columns.
- Integration with a backend API for persistent storage.
- Task deadlines and notifications.

