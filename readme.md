# Project SuperLearn

## ENV Setup

- Download the repo and cd
  ``git clone <repo uri> && cd SuperLearn``
- Install dependencies
  ``yarn add *``
- Install XCode Developer Tools (iPhone simulator)
  ``xcode-select --install``
- Accept Apple Developer Licence Conditions
- Install Android Emulator
  ``sudo npm install -g @aws-amplify/cli``
- Install brew (macOS)
  ``/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"``
- Install AWS command line tools + conf
  ``sudo npm install -g @aws-amplify/cli``
- Install serverless framework + conf
  ``sudo npm install -g serverless``

## Hot Reload
- Start the local dev server
```cd SuperLearn && yarn start```
  
- Download client app on mobile and scan QR code for Native App
- Open Chrome Dev Tools for Web App

## Engineering Team OnBoarding (in order, skip what you know)

- JavaScript ES6 Basics (1 hours) ``https://www.youtube.com/watch?v=nZ1DMMsyVyI``
- TypeScript Essentials (3 hours) ``https://www.linkedin.com/learning/typescript-essential-training``
- GraphQl Essentials (2 hours) ``https://www.linkedin.com/learning/graphql-essential-training``
- React Extended EcoSystem (3.5 hours) ``https://www.linkedin.com/learning/building-modern-projects-with-react``
- React Native Tutorial (1 hour) ``https://reactnative.dev/docs/tutorial``
- Expo Tutorial (2 hours) ``https://docs.expo.io/tutorial/planning/``
- AWS Certified Archietect (10 hours) ``https://www.udemy.com/course-dashboard-redirect/?course_id=362328``
- Learning AWS Amplify (2 hours) ``https://www.linkedin.com/learning/learning-aws-amplify``
- AWS Serverless Applications (12 hours) ``https://www.udemy.com/course-dashboard-redirect/?course_id=1241098``

## Core front end libraries
- Language - TypeScript ``https://www.typescriptlang.org``
- Client - React (Native, Web) ``https://reactnative.dev``
- Cloud Native - Amplify/AWS SDK ``https://aws.amazon.com/amplify/``
- State Management - Redux ``https://redux.js.org``
- Async I/O Management - Redux Sagas ``https://redux-saga.js.org``
- View Controller - React Navigation ``https://reactnavigation.org``
- Deployment - Expo ``https://expo.io``
- Time & Space Query Optimisation - Reselect ``https://www.npmjs.com/package/reselect``
- Run Time Dynamic Presentation - Styled Components ``https://styled-components.com``

## I/O, Time & Space Implementation Rationale

### Amplify DataStore + Redux
Datastore is an abstraction API layer that handles on device local storage and syncs automatically with AWS databases through magic (which can be configed for optimal performance). Redux is a commonly used state management process, which will tie directly into AWS abstracting all concerns related to backend.

### GraphQL + Redux Sagas
Redux sagas allow for async without side effects or race conditions. Sagas run the generator pattern on async operations for things that need to use business logic in real time (eg payments).

### Redux + Reselect
Reselect uses the memo pattern for complex business logic on the front end, to remove advanced queries on the back end. It can combine different datasets into one dataset for any given component. This allows for maximum  efficiency on where we place front and backend compute tasks. It will act as a default query engine on the front end with minimal i/o.

## Implementation Plan

### Day zero
- Unidirectional dataflow skeleton (redux, reselect)
- AWS application init
- Embed AWS into dataflow skeleton
  
### Day one
- Auth (cognito)
- GraphQl CRUD API's complete for MVP app lifecycle
- Components planned

### Week two
- Alpha testing of SMS
- Payments gateway

### Blockers
- No defined scope