# Front-end Web Application with Next.js

This project is a web application built with Next.js for the front-end, which allows students to chat with each other and their teachers, view announcements from teachers, submit homework, and access educational resources.

## Getting Started

To run the project locally, follow these steps:

Clone the repository: `git clone https://github.com/USTHB-IN/usthb-in-web`
Navigate into the project directory: `cd usthb-in-web`
Install dependencies: `npm install`
Start the development server: `npm run dev`
The application should now be running at [LOCAL SERVER](http://localhost:3000).

## Project Structure

The project is structured as follows:

```javascript
├── pages/
|   ├── index.tsx
|   ├── chat.tsx
|   ├── homework.tsx
|   ├── resources.tsx
|   └── ...
├── components/
|   ├── Layout.tsx
|   ├── Chat.tsx
|   ├── Homework.tsx
|   ├── Resources.tsx
|   └── ...
├── public/
|   ├── images/
|   ├── styles/
|   └── ...
├── package.json
├── README.md
└── ...
```

- The `pages` directory contains the different pages of the application, such as the home page, chat page, homework page, and resources page.
- The `components` directory contains reusable components used throughout the application, such as the layout component, chat component, homework component, and resources component.
- The `public` directory contains any static assets, such as images and CSS stylesheets.
- The `package.json` file contains the project's dependencies and scripts.

## Technologies Used

The front-end of the application is built using Next.js, a popular React-based framework for building server-side rendered applications. It also utilizes other popular front-end technologies, such as React, CSS, and JavaScript.

## Contributing

Contributions are welcome! To contribute to the project, follow these steps:

1. Fork the repository
2. Create a new branch: git checkout -b my-new-branch
3. Make your changes and commit them: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-branch
5. Submit a pull request
