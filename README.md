# Form System

This project is a Form System inspired by [Google Forms](https://www.google.com/intl/en-GB/forms/about/), allowing users to login to their account, easily create, update and manage forms. Users can also answer forms and view the collected responses in the form of bar charts. The project is developed using TypeScript, React, SCSS, and features comprehensive testing and CI/CD pipeline.

## Project Features.

- User Authentication. Users can log in to their personal form management dashboard.
- Form Creation. Users can create new forms with customizable questions, e.g., change option types, add an image, make it required.
- Form Update. Existing forms can be updated and modified with all the functionality that is present in form creation.
- Form Responses. Users can submit answers to forms and view collected responses in bar chart format.

## Prerequisites.

Before setting up the project, ensure that the following software is installed on your system

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en)
- [Yarn](https://yarnpkg.com/)

## Running Front-end Locally.

Clone the repository

- git clone <repository-url>

Navigate to the repository

- cd .\form-system-template\form-system\front 

Install dependencies

- yarn

Start the development server

- yarn dev

Access the application by navigating to the provided URL address

## Running Tests.

To Run Component Tests

- yarn test

To Run Visual Tests

- yarn storybook

To Run Chromatic for Visual Regression Testing

- yarn chromatic

## Backend Integration.

Currently, the project does not have a backend, but it is being developed and will be integrated soon. Once integrated, it will allow for persistent data storage, enabling users to save and retrieve their forms and responses.
