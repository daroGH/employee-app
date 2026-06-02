# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Employee App

A modern React application built with Vite and styled with Tailwind CSS v4.

## 🚀 Quick Start Instructions

Follow these steps to get your local development environment up and running.

### 1. Prerequisites

Ensure you have **Node.js** installed on your machine.

- Check your version: `node -v`

### 2. Installation

Clone the repository (if downloading to a new machine) and install the dependencies:

```bash
npm install
```

### 3. Run the Development Server

Start the local hot-reloading development server:

```bash
npm run dev
```

- Open your browser and navigate to the local URL provided in your terminal (usually `http://localhost:5173`).

### 4. Build for Production

To compile and optimize the application for production deployment:

```bash
npm run build
```

- The production-ready files will be generated inside the `/dist` directory.

## 🛠️ Stack Components

- **Frontend Framework:** React
- **Build Tool:** Vite
- **Styling Engine:** Tailwind CSS v4 (Native Vite Plugin)

# Run out of time, Things I would aim to do

- Search input (debug filteredData)
- Filter input
- Sort input
- Embrace typescript before store the employee data useState
- Add test component/hooks
- Modal approach, use HeadlessUI to wrap in the modal
