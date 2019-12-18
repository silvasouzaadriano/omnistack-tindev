<h1 align="center">
    TINDEV - Omnistack #8 | Rocketseat
</h1>

<h4 align="center">
 Development of an application using the stack *Node.js*, *ReactJS* e *React Native*
 
## Concepts
 - The application created its similar to Tinder, however, for developers;
 - A developer must be added using Github user;
 - The information resulted from Githib API is used to be saved in database;
 - Its possible to give like and dislike for users;

 - Due to **Node** architecture, by using a **websocket**, will be done a communication between server (API) and frontend in real time; It means that when an user give a like to another, and the same user which reiceved the like also give the like to other user (despite of frontend or mobile), in real time will be appear on screen the match information.
</h4>

## Main Techologies used

### BACK-END
-   [Node.js](https://nodejs.org/en/)
-   [Express](https://expressjs.com/)
-   [Axios](https://github.com/axios/axios)
-   [Cors](https://www.npmjs.com/package/cors)
-   [Socket.IO](https://socket.io/docs/)
-   [nodemon](https://nodemon.io/)
-   [Docker](https://www.docker.com/docker-community)
-   [MongoDB](https://www.mongodb.com/)
-   [Mongoose](https://mongoosejs.com/)
-   [VS Code](https://code.visualstudio.com/) with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### FRONT-END
-   [ReactJS](https://reactjs.org/)
-   [Axios](https://github.com/axios/axios)
-   [ReactDom](https://reactjs.org/docs/react-dom.html)
-   [ReactRouterDom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
-   [ReactScripts](https://www.npmjs.com/package/react-scripts)
-   [Socket.IO.Client](https://github.com/socketio/socket.io-client)
-   [VS Code](https://code.visualstudio.com/) with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### MOBILE
-   [ReactJS](https://reactjs.org/)
-   [React Native](https://facebook.github.io/react-native/)
-   [Axios](https://github.com/axios/axios)
-   [React Native Gesture Handler](https://github.com/software-mansion/react-native-gesture-handler)
-   [React Navigation](https://reactnavigation.org/docs/pt-BR/getting-started.html)
-   [Socket.IO.Client](https://github.com/socketio/socket.io-client)
-   [VS Code](https://code.visualstudio.com/) with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## How To Use

To clone and run this application, you'll need [Docker](https://docs.docker.com/),  [Git](https://git-scm.com), [Node.js v10.16.1](https://nodejs.org/en/) or higher + [Yarn v1.19.1](https://yarnpkg.com/lang/en/) or higher installed on your computer. 

NOTE: The mobile application only was tested using Android Studio emulator. However, as the react native compile for both Android and IOS its expected it running in both application.

### Install Backend
```bash
# Clone this repository
$ git clone https://github.com/silvasouzaadriano/omnistack-tindev

# Go into the repository
$ cd omnistack-tindev/backend

# Install dependencies
$ yarn install

# Created Mongo Docker container
$ docker run --name tindev_mongo -p 27017:27017 -d -t mongo

# Run the API
$ yarn dev
```

### Install Frontend
```bash

# Go into the front path
$ cd omnistack-tindev/frontend

# Install dependencies
$ yarn install

# Run the Front
$ yarn start
```

### Install Mobile
```bash

# Go into the mobile path
$ cd omnistack-tindev/mobile

# Install dependencies
$ yarn install

# Run the mobile
- For Android
  $ adb reverse tcp:3333 tcp:3333
  $ yarn react-native run-android
  $ yarn react-native start

- For IOS
  $ yarn react-native start
```

---

Made with ♥ by Adriano Souza :wave: [Get in touch!](https://www.linkedin.com/in/adriano-souza-9b1a1b11)


