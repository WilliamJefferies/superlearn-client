# Project SuperLearn

Principles:
- _Designed to be the best in the world in performance and development turn around time._
- _NoOps Lightspeed LifeCycle._
- _React Native in TypeScript for web, native apps._
- _Serverless functions deployed with unlimited bandwidth written in either python or node, you decide as you code_
- _No backend/API development ever required._
- _No DevOps ever required._
- _Global scale with best possible network I/O and time & space in mind, automatically._
- _Free for first 10k users, cheap for next ten million, expensive for second billion._
- _Build once, build beautiful, build perfect, build fast._
- _Be the best in the world at what we do._
- _Push to master for auto deploy._
- _One repo for everything._

Practices:
- _BizLogic stays in classes._
- _Write components that can be used across different screens._
- _Combine data with selectors on the front end, not by query building and relying on cloud data layer._
- _Tightly couple features to screens._
- _Write templates and generate ip. Slow is fast._

## ENV Setup


- Download the repo and cd ``git clone <repo uri> && cd SuperLearn``
- Request IAM dev and devOps service account from William ``Phone 0423 965 305``
- File Permissions For DevTools ``chmod a+rwx * && sudo chown -RW $(whoami) *``
- Install dependencies ``yarn add *``
- Install XCode Developer Tools (iPhone simulator) ``xcode-select --install``
- Accept Apple Developer Licence Conditions
- Install Android Emulator ``sudo npm install -g @aws-amplify/cli``
- Install brew (macOS) ``/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"``
- Install AWS command line tools + conf ``sudo npm install -g @aws-amplify/cli && amplify configure``
- Install serverless framework + conf ``sudo npm install -g serverless && serverless config credentials --provider provider --key key --secret secret``

## Hot Reload

- Start the local dev server
``cd SuperLearn && yarn start``
- Download client app on mobile and scan QR code for Native App
  ```
  ios: https://apps.apple.com/au/app/expo-client/id982107779
  andorid: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_AU&gl=US
  ```
- Open Chrome Dev Tools for Web App
- AWS dev-env push **[[DANGER ZONE, TODO PROD ACCESS CONF]]** ```amplify push```
- Serverless dev-env push  **[[DANGER ZONE, TODO PROD ACCESS CONF]]** ```serverless deploy```

## Engineering Team OnBoarding 
_Slow is fast here, take the time to learn before contributing, and then move at lightspeed_


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

#### Tech:
- Language - Python || Node.js (decide as you go for solo functions)
- Ops - Serverless Framework ``https://www.serverless.com``

#### Dev Automation
- React Native Components ``[[Script for this is broken!!]]``
- Generic Node Serverless ``yarn serverless-node --FUNC 'Function Name'``
- Generic Python Serverless ``yarn serverless-python --FUNC 'Function Name'``

#### Templates:
- Python ec2 start stop (compute tasks)
- Python s3 bucket (storage)
- NodeJS HTTP Crud W Database (speedy rest)
- NodeJS WebHook Triggered Functions (speedy pub sub design)



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

_Follow top to bottom. Unidirectional data flow when possible._


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


## Cloud Native Backend (Python && Node)

_Every cloud func has its own folder with devOps & devSecOps config. This is all our automated tasks in cloud. Pick the language depending on the task, use the command line to generate._


```
├───Node/*
├───Python/*
├───nodejs-crud-http-endpoint-trigger-template/
│   ├───todos/
│   │   ├───create.js
│   │   ├───delete.js
│   │   ├───get.js
│   │   ├───list.js
│   │   └───update.js
│   ├───.gitignore
│   ├───README.md
│   ├───package.json
│   └───serverless.yml
├───nodejs-generic-http-endpoint-trigger-template/
│   ├───.idea/
│   │   ├───codeStyles/
│   │   │   └───codeStyleConfig.xml
│   │   ├───.gitignore
│   │   ├───aws.xml
│   │   ├───modules.xml
│   │   ├───nodejs-example.iml
│   │   └───workspace.xml
│   ├───.gitignore
│   ├───handler.js
│   └───serverless.yml
├───python-ec2-start-stop-template/
│   ├───.serverless/
│   │   ├───cloudformation-template-create-stack.json
│   │   ├───cloudformation-template-update-stack.json
│   │   ├───python-ec2-start-stop.zip
│   │   └───serverless-state.json
│   ├───.gitignore
│   ├───handler.py
│   └───serverless.yml
├───python-serverless-s3-bucket-template/
│   ├───.serverless/
│   │   ├───cloudformation-template-create-stack.json
│   │   ├───cloudformation-template-update-stack.json
│   │   ├───hello-world-python.zip
│   │   └───serverless-state.json
│   ├───.gitignore
│   ├───handler.py
│   └───serverless.yml
├───.gitignore
├───handler.js
├───handler.py
└───serverless.yml ***DANGER ZONE HERE***
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
- Code Generation [x]
- Serverless Python [x]
- Serverless Node [x]
- Cloud Templates [x]
- Init Redux Store [x]
- AWS live [x]
- Embed AWS into dataflow skeleton [BLOCKED]
  
### Day one
- Auth (cognito) [x]
- GraphQl CRUD API's complete for current app lifecycle [x]
- Components mapped [x]
- DevOps completer [x]

### Week two
- Alpha testing of student management services [[Needs KPIS && Change Management Process]]
- Payments gateway [[Needs Scope]]

### Blockers
- No defined scope [[Actioned: Charlie Responsible]]


### Wishlist (T1-2021 PROD, Ugly UI)
- Browser video chat rather than zoom
- All student management in app
- All third party edu vendors launched from app with re-dir & auth
- All sections automated
- Learning pathways established

### Wishlist (T12-2021 PROD, Good UI)
- TBD

### Deploy Conf & Logs
```
├───cicd/
│   └───serverless.yml
└───logs/
    ├───api.txt
    └───cognito.txt
```