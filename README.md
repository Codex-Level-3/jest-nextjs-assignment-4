# Jest Next.js Assignment 4

# Objective

Enhance your Jest testing skills by focusing on Next.js components. This assignment requires you to write tests for two specific components, ensuring they render correctly and interact as expected within a Next.js application. By completing this task, you'll gain hands-on experience with testing in the context of a modern React framework.

## Project Setup

### 1. Creating a Next.js Application :

```bash
npx create-next-app@latest
```

### 2. Installing Dependencies & Configuring Jest:

#### **Manual Setup**

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

```bash
npm init jest@latest
```

#### **jest.config.js**

Replace with the following:

```js
const nextJest = require("next/jest");

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
```

## Testing Approach

### WelcomeMessage.jsx Component

This component is a simple functional component that takes a `message` prop and renders it inside a paragraph element.

### Tests

- **File :** `WelcomeMessage.test.jsx`
- **Approach :**
  1. **Render Component :** I used `render` from `@testing-library/react` to render the `WelcomeMessage` component with a specific message prop.
  2. **Query for Text :** I used `screen.getByText` to query for the rendered text within the component.
  3. **Assertion :** Finally, I used `expect` to assert that the queried text is present in the document.

### ToggleText.jsx Component

This component utilizes the `useState` hook to manage the visibility of a text message. It has a button that toggles the visibility of the text when clicked.

### Tests

- **File :** `ToggleText.test.jsx`
- **Approach :**
  1. **Initial State Test :**
     - **Render Component :** I rendered the `ToggleText` component.
     - **Query for Text :** I used `screen.queryByText` to check if the text "Yay, you can see me now!" is not present initially.
     - **Assertion :** I asserted that the text is `null`, indicating that it's not in the document initially.
  2. **Interaction Test :**
     - **Render Component :** I rendered the `ToggleText` component.
     - **Query for Button :** I used `screen.getByText` to query for the button element.
     - **Simulate Click :** I used `fireEvent.click` to simulate a click on the button.
     - **Query for Text :** I used `screen.getByText` to query for the text "Yay, you can see me now!" after the button click.
     - **Assertion :** I asserted that the text is present in the document after the button click.

## Summary

- **WelcomeMessage :** The testing approach focuses on ensuring that the component correctly displays the passed message by rendering the component and verifying the presence of the message in the rendered output.
- **ToggleText :** The testing approach covers both the initial state and the interaction of the component. I verify that the text is not visible initially and that clicking the button toggles the visibility of the text correctly.

By following this approach, I ensure that the components behave as expected under different scenarios, providing confidence in their functionality.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
