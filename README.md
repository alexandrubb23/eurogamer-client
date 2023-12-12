# Eurogamer Client

[![Chakra UI](https://img.shields.io/badge/Chakra_UI-^2.8.2-blueviolet)](https://chakra-ui.com/)
[![React Query](https://img.shields.io/badge/React_Query-^5.13.4-yellow)](https://react-query.tanstack.com/)
[![Axios](https://img.shields.io/badge/Axios-^1.6.2-red)](https://axios-http.com/)
[![React Router Dom](https://img.shields.io/badge/React_Router_Dom-^6.20.1-orange)](https://reactrouter.com/)
[![Zustand](https://img.shields.io/badge/Zustand-^4.3.8-ff69b4)](https://zustand.surge.sh/)
[![ViteJS](https://img.shields.io/badge/ViteJS-^5.0.0-brightgreen)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-^5.2.2-blue)](https://www.typescriptlang.org/)

## Overview

Eurogamer Client is a frontend application for displaying gaming news and videos. This project works in conjunction with the Eurogamer API to fetch and display content.

## Features

- Display a list of news articles and videos.
- Pagination support for browsing through content.
- Responsive design for optimal viewing on various devices.

## Technologies Used

- React.js
- ViteJS
- React Router
- Axios for API requests
- React Query

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository:

```bash
git clone https://github.com/alexandrubb23/eurogamer-client.git
```

2. Navigate to the project directory:

```bash
cd eurogamer-client
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open `http://localhost:3000`` to view it in the browser.

## Deployment

Add additional notes about how to deploy this on a live system.

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the tags on this repository.

## Authors

**Alexandru Barbulescu **- Initial work - alexandrubb23
See also the list of contributors who participated in this project.

License
This project is licensed under the [Your License] - see the LICENSE.md file for details.

## TODO - Things to be Implemented

1. Implement Zustand Store Manager

- Integrate Zustand for efficient and intuitive global state management.
- Replace local component states with Zustand stores where applicable, to streamline state handling across the application.
- Ensure that the Zustand store is set up to handle asynchronous actions, like API requests, in a scalable and maintainable way.

2. Implement Kebab Navigation Menu on Mobile Devices

- Design and implement a responsive kebab (three-dot vertical) menu for mobile users.
- nsure that the menu provides easy access to all key navigation links and features of the application.
- Incorporate smooth animations and transitions for menu interactions to enhance the user experience on mobile devices.
- Test the navigation menu across various device sizes for consistency and usability.
