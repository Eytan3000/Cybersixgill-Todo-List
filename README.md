# Todo List

## Overview

The Todo List application helps you manage your tasks efficiently by providing a simple interface to add, edit, delete, and prioritize tasks.

## Features

- **Add** new tasks
- **Edit** existing tasks
- **Delete** tasks
- **Assign** tasks to individuals
- **Set** priority for each task

### Installation

1. Install dependencies:

```bash
   npm install
```

2. Run the application:

```bash
   npm run dev
```

### Running the Project

Open your browser and navigate to `http://localhost:5173` to see the project in action.

## Project Structure

project structure:

```
├── public
├── src
│   ├── components
│   │   ├── EditableCell.tsx
│   │   ├── Filter.tsx
│   │   └── PriorityCell.tsx
│   ├── screens
│   │   ├── form
│   │   │   ├── CreateForm.tsx
│   │   │   ├── DumbForm.tsx
│   │   │   └── EditForm.tsx
│   │   ├── table
│   │       ├── DeleteConfirmationModal.tsx
│   │       ├── EditFormModal.tsx
│   │       ├── Table.tsx
│   │       ├── TableHeader.tsx
│   │       └── TableRow.tsx
│   ├── App.tsx
│   ├── data.ts
│   ├── helperFunctions.ts
│   ├── types.ts
│   ├── main.tsx
│   └── index.html
├── .gitignore
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

## Notes

- **Technologies**: This project uses React, TypeScript, and Vite for development.
- **Folder Structure**:
  - `components/`: Contains reusable UI components.
  - `screens/`: Organizes screens and views.
    - `form/`: Handles form-related components for adding and editing tasks.
    - `table/`: Manages task display in tabular format, along with modals for editing and deleting.
  - `helperFunctions.ts`: Contains utility functions used across the app.
  - `types.ts`: Defines TypeScript types for better type safety.
