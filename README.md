# Project Overview

This project is a web application built using Angular, TypeScript, and JavaScript. It aims to provide a comprehensive platform for managing patient information and conducting mental state examinations. The application includes features such as displaying patient details, exam information, and handling page not found errors.

## Technologies Used

- \*\*Angular\*\*: A platform for building mobile and desktop web applications.
- \*\*TypeScript\*\*: A typed superset of JavaScript that compiles to plain JavaScript.
- \*\*JavaScript\*\*: A programming language that conforms to the ECMAScript specification.
- \*\*npm\*\*: A package manager for the JavaScript programming language.

## Project Structure

- \*\*Components\*\*: The application is divided into several components, each responsible for a specific part of the UI.
  - \`mental-state-exam-card.component.html\`: Displays patient and exam information.
  - \`page-not-found.component.html\`: Handles 404 errors.
- \*\*Localization\*\*: The application supports multiple languages, with translations provided in JSON files.
  - \`en.json\`: English translations.
  - \`es.json\`: Spanish translations.

## Key Features

- \*\*Patient Information\*\*: Displays patient details such as name, birthdate, and photo.
- \*\*Exam Information\*\*: Shows details of the mental state examination, including the examiner's name, NPI, and total score.
- \*\*404 Handling\*\*: Provides a user-friendly page for handling "Page Not Found" errors.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the development server, run:
```bash
npm start
```
The application will be available at \`http://localhost:4200\`.

## Building the Application

To build the application for production, run:
```bash
npm run build
```
The build artifacts will be stored in the \`dist/\` directory.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (\`git checkout -b feature-branch\`).
3. Make your changes and commit them (\`git commit -m 'Add new feature'\`).
4. Push to the branch (\`git push origin feature-branch\`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the \`LICENSE\` file for more details.

## Contact

For any questions or feedback, please contact the project maintainer at \[email@example.com\].
