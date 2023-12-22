<div align="center"><img src="/src/assets/comic-letter-q-in-shape-of-bright-violet-balloon-vector-19384535.png" width="150px"></div>
<br />
<div align="center">
  <h2 align="center">Quizzo</h2>

  <p align="center">
    <br />
    <a href="https://samuelefrni-quizzo.netlify.app/"><strong>View Demo</strong></a>
    <br />
    <br />
    <a href="./src/assets/Progetto Typescript e React di Samuele Furnari.pdf">Presentation IT</a>
  </p>
</div>

## Introduction

A new agency in the selection phase has presented a challenge: demonstrate your skills in their most used technologies, TypeScript and React.

## About the project

The challenge consists in the creation of a quiz web app in React on the topic of the "circular economy" and "recycling". The goal is to create a quiz app that is engaging, fun and competitive.

## About my choices

For the realizzation of Quiz App, I adopted an architecture based on the concept of "features". The components are organized into folders corresponding to the different features of the app, ensuring a clear separation of responsibilities. This approach makes maintenance and adding new features easier in the future.

For navigation within the app, I implemented the react-router-dom. This allows us to manage navigation between the different sections of the Quiz App without having to completely reload the page.

I took full advantage of TypeScript's features to ensure correct typing of our code. Interfaces and types have been widely used to define data structure, improving the readability and maintainability of code.

The stylization of the components was managed through CSS modules, allowing a modular and clear definition of styles. I took a responsive design approach with Media Quiery in CSS to ensure a consistent user experience across different devices and screen sizes.

To enrich the user interface, I integrated react-icons, a library that provided us with a large set of customizable icons. This has simplified the integration of icons throughout the application, improving the overall aesthetic.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install` (or relevant command).

## Usage

1. Run the app with `npm start`.
2. Access the app at [localhost:3000](http://localhost:3000).

## Contributing

We welcome contributions! Follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)

## Creator

- **Samuele Furnari**
  - Email: samuelefurnari9@gmail.com
  - GitHub: [samuelefrni](https://github.com/samuelefrni)
  - LinkedIn: [Samuele Furnari](https://www.linkedin.com/in/samuele-furnari-a37567220/)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
