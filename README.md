# React
React is a popular JavaScript library for building user interfaces, developed and maintained by Facebook. It enables developers to create reusable UI components and efficiently manage the user interface's state. React uses a virtual DOM to improve performance by updating only the necessary parts of the interface when the data changes, rather than re-rendering the entire page. This makes React ideal for building dynamic, fast, and scalable web applications.

Key features of React include:

Component-Based Architecture: Build encapsulated components that manage their own state, then compose them to create complex UIs.
Declarative Syntax: Describe what the UI should look like, and React takes care of efficiently updating and rendering the right components.
Virtual DOM: Enhances performance by minimizing direct DOM manipulation, only updating the parts of the DOM that need to change.

Note: This is a learning based project and while making this project I learned about useState Hook, useCallBack, UseRef and useEffect.
 useState: Manages state in functional components. It returns the current state and a function to update it. Useful for tracking variables that change over time (e.g., user input, component visibility).

useCallback: Memoizes a function, returning the same instance between renders unless dependencies change. This is useful for performance optimization, especially when passing callbacks to child components.

useRef: Creates a mutable reference that persists between renders. Often used to directly interact with DOM elements or store values that don’t trigger re-renders when updated (e.g., timer IDs).

useEffect: Runs side effects in response to changes in component state or props. It’s commonly used for data fetching, subscriptions, or manually modifying the DOM. The dependencies array controls when the effect re-runs.

# Vite
Vite is a fast, modern build tool and development server for frontend projects, created by the developer of Vue.js. Designed to improve the development experience, Vite provides instant server start, fast hot module replacement (HMR), and efficient builds for production.

Key features of Vite include:

Lightning-Fast Development Server: Vite uses native ES modules in the browser, allowing for instant server start and quick updates with HMR.
Optimized Production Build: For production, Vite bundles code with Rollup, optimizing for performance.
Framework-Agnostic: Although it’s often used with Vue and React, Vite supports many frontend frameworks.
Rich Plugin Ecosystem: Vite has a powerful plugin system, with plugins available for various integrations and optimizations.

# Tailwind CSS
Tailwind CSS is a utility-first CSS framework that allows developers to design modern, responsive interfaces with ease. Unlike traditional CSS frameworks, Tailwind provides a comprehensive set of utility classes that can be composed directly in HTML, offering a more flexible and efficient approach to styling. This utility-first approach helps create custom designs quickly without writing any custom CSS.

Key features of Tailwind CSS include:

Utility-First Classes: A large collection of utility classes enables rapid development of custom designs by composing pre-defined styles.
Responsive Design: Built-in responsive utilities make it easy to adjust layouts and styles for different screen sizes.
Customizable and Themeable: Tailwind is fully customizable, allowing you to configure colors, spacing, typography, and more to match your project’s branding.
Built-In PurgeCSS Support: Automatically removes unused CSS, keeping the final build lightweight and optimized for performance.
Tailwind CSS streamlines the styling process, making it ideal for developers who want control over design while maintaining a rapid development workflow.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
