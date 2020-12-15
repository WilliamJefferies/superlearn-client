# Project SuperLearn


## ENV Setup


- Download the repo and cd
  ``git clone <repo uri> && cd SuperLearn``
  
- File Permissions For DevTools
  ```chmod a+rwx * && sudo chown -RW $(whoami) *```
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
  ```
  ios: https://apps.apple.com/au/app/expo-client/id982107779
  andorid: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_AU&gl=US
  ```
- Open Chrome Dev Tools for Web App

## Engineering Team OnBoarding //skip what you know


- JavaScript ES6 Basics (1 hours) ``https://www.youtube.com/watch?v=nZ1DMMsyVyI``
- TypeScript Essentials (3 hours) ``https://www.linkedin.com/learning/typescript-essential-training``
- GraphQl Essentials (2 hours) ``https://www.linkedin.com/learning/graphql-essential-training``
- React Extended EcoSystem (3.5 hours) ``https://www.linkedin.com/learning/building-modern-projects-with-react``
- React Native Tutorial (1 hour) ``https://reactnative.dev/docs/tutorial``
- Expo Tutorial (2 hours) ``https://docs.expo.io/tutorial/planning/``
- AWS Certified Archietect (10 hours) ``https://www.udemy.com/course-dashboard-redirect/?course_id=362328``
- Learning AWS Amplify (2 hours) ``https://www.linkedin.com/learning/learning-aws-amplify``
- AWS Serverless Applications (12 hours) ``https://www.udemy.com/course-dashboard-redirect/?course_id=1241098``

## Core Libraries

### Client
- Language - TypeScript ``https://www.typescriptlang.org``
- Client - React (Native, Web) ``https://reactnative.dev``
- Cloud Native - Amplify/AWS SDK ``https://aws.amazon.com/amplify/``
- State Management - Redux ``https://redux.js.org``
- Async I/O Management - Redux Sagas ``https://redux-saga.js.org``
- View Controller - React Navigation ``https://reactnavigation.org``
- Deployment - Expo ``https://expo.io``
- Time & Space Query Optimisation - Reselect ``https://www.npmjs.com/package/reselect``
- Run Time Dynamic Presentation - Styled Components ``https://styled-components.com``

### CloudOps
- Language - Python
- Ops - Serverless Framework ``https://www.serverless.com``


## BizLogic Structure
_Seperation of concerns between who, what, document_



```
├───Operations/ <THINGS WE DO>
│   ├───Course.ts
│   ├───LearningOutcome.ts
│   ├───Lesson.ts
│   ├───Pathway.ts
│   ├───Schedule.ts
│   ├───Wallet.ts
│   └───interface.ts
├───People/ <WHO WE ARE>
│   ├───Coach.ts
│   ├───Parent.ts
│   ├───Person.ts
│   ├───Student.ts
│   └───interface.ts
├───Records/ <WHAT WE DOCUMENT>
│   ├───BillingRecord.ts
│   ├───CoachPerformanceRecord.ts
│   ├───FeedbackRecord.ts
│   ├───OutcomeRecord.ts
│   ├───Record.ts
│   ├───StudentActivityRecord.ts
│   └───interface.ts
└───namespace.ts
```

## Data Flow Structure 

_Follow top to bottom_


```
├───sagas/ <async i/o>
│   ├───*
├───reducers/ <state>
│   ├───*
├───navigation/ <view controller>
│   ├─── *
├───selectors/ <queries>
│   ├─── *
├───components/ <UI>
│   ├─── *
├───screens/ <view rendering>
│   ├───*
├───actions/ <user events>
│   ├─── *
├───middleware/ <side effect hooks>
│   ├───*
├───analytics/ *
```


## Cloud Native Backend (Python)

_Every cloud func will have its own folder with devOps & devSecOps config. This is all our automated tasks in cloud_


```
├───Functions/ <async i/o>
│   ├───DataEng/*
│   ├───MachineLearning/*
│   ├───PushNotifications/<func name>/*
│   ├───BizOps/<func name>/*
├───handler.py
├───serverless.yml
```


## I/O, Time & Space Implementation Rationale



### Amplify DataStore + Redux
Datastore is an abstraction API layer that handles on device local storage and syncs automatically with AWS databases through magic (which can be configed for optimal performance). Redux is a commonly used state management process, which will tie directly into AWS abstracting all concerns related to backend.

### GraphQL + Redux Sagas
Redux sagas allow for async without side effects or race conditions. Sagas run the generator pattern on async operations for things that need to use business logic in real time (eg payments).

### Redux + Reselect
Reselect uses the memo pattern for complex business logic on the front end, to remove advanced queries on the back end. It can combine different datasets into one dataset for any given component. This allows for maximum  efficiency on where we place front and backend compute tasks. It will act as a default query engine on the front end with minimal i/o.

## Implementation Plan


### Day zero
- Unidirectional dataflow skeleton (redux, reselect) [x]
- AWS application init [x]
- AWS deployed [x]
- Embed AWS into dataflow skeleton [wip]
  
### Day one
- Auth (cognito) [x]
- GraphQl CRUD API's complete for current app lifecycle [x]
- Components planned [x]

### Week two
- Alpha testing of student management services [[Needs KPIS && Change Management Process]]
- Payments gateway [[Needs Scope]]

### Blockers
- No defined scope [[Actioned: Charlie Responsible]]