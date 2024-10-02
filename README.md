# AI web interface

## General description

This project is a web interface for an AI assistant app, similar in functionality and design to ChatGPT.
The application contains 2 pages: **registration** and **login**.

## Install and run

To start the project, you need to complete the following steps:

1. Install the necessary dependencies for the project. To do this, run the command in the root of the project:

```bash
$ npm ci
```

2. Add a file with environment variables(`.env`) to the root of the project.

List of variables in **.env** file:

| №   | Name                        | Description                                 |
| :-- | :-------------------------- | ------------------------------------------- |
| 1   | VITE_API_URL                | Sets API URL                                |
| 2   | VITE_GOOGLE_AUTH_CLIENT_ID= | Sets the client ID for Google authorization |

3.The last step is to launch the project with the command:

```bash
$ npm run dev
```

## Commands

```bash
# Run build project
$ npm run build

# Start
$ npm run dev

# Run lint
$ npm run lint
```

## Libraries

- <a alt="React logo" href="https://react.dev" target="_blank" rel="noreferrer"><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="35"></a>
- [React OAuth2 | Google](https://github.com/MomenSherif/react-oauth)
- [classnames](https://github.com/JedWatson/classnames)
