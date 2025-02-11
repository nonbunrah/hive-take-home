# Reusable Dropdown Component

### Created by RJ Bamrah for Hive AI

A reusable dropdown component built using React, Typescript, and Vite. This component supports both **single-select** and **multi-select** modes.

## Project Setup

Cloning the Repo and running the project

```
git clone https://github.com/nonbunrah/hive-take-home.git
cd hive-take-home
npm install
npm run dev
```

This will start the server, typically on http://localhost:5173/.

## Usage

In `App.tsx`, create an array of `options` to use in the dropdown.

```js
const options = [
  { label: "Audi", value: "Audi" },
  { label: "BMW", value: "BMW" },
  { label: "Ford", value: "Ford" },
  { label: "Mercedes-Benz", value: "Mercedes-Benz" },
  { label: "Tesla", value: "Tesla" },
];
```

Pass that `options` array as a prop.

```jsx
<ReusableDropdown options={options} allowMultiSelect={isMultiSelect} />
```

Additional Notes:

- On the UI, we have a **single-select** and a **multi-select** mode.
- The top dropdown is a multi-select dropdown where multiple options can be selected.
- The lower dropdown is a single-select dropdown where only one option can be selected.

## Thank you

Thank you for reviewing my submission! I had a great 24 hours with this challenge!

### A quick programming joke before you go:

Why did the React component go fishing?

_To catch some hooks!_

Looking forward to your feedback!
