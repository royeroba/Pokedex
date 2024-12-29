# Pokelist

This project was developed as a technical challenge using Vue 3 with the Composition API. Below is an overview of the technologies and approaches used in its implementation.

## Features and Technical Details

- **Framework**: Built with **Vue 3** using the **Composition API** for better code organization and reusability.
- **Routing**: Used **Vue Router** to manage navigation between different pages of the application.
- **State Management**: Implemented **Pinia** for global state management, allowing efficient handling of shared states like favorites.
- **Data Persistence**: Leveraged **localStorage** to persist non-sensitive data, such as the list of favorite items, ensuring a smooth user experience.
- **Styling**: Styled the application with **SASS** following a **mobile-first approach** for responsive design.
- **API Requests**: Used **Axios** to handle API requests, with a predefined base URL for consistency and easier maintenance.
- **Environment Variables**: Configured **environment variables** to securely store and manage sensitive information, such as API keys.
- **Project Structure**: Organized the project into:
  - **UI Components**: For specific elements like buttons or cards.
  - **Reusable Components**: To maximize code reusability.
  - **Full Views**: For complete page layouts, ensuring scalability and maintainability.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize Configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
