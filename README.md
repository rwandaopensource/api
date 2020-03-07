# backend.opensource.org.rw

[![Build Status](https://dev.azure.com/urbainishimwe/opensource.org.rw/_apis/build/status/rwandaopensource.backend.opensource.org.rw?branchName=develop)](https://dev.azure.com/urbainishimwe/opensource.org.rw/_build/latest?definitionId=4&branchName=develop)
![Build and deploy Node.js app to Azure Web App - ros-api(staging)](https://github.com/rwandaopensource/backend.opensource.org.rw/workflows/Build%20and%20deploy%20Node.js%20app%20to%20Azure%20Web%20App%20-%20ros-api(staging)/badge.svg?branch=develop)

This is the Backend of opensource.org.rw, find the frontend [here](https://github.com/rwandaopensource/opensource.org.rw)

### DEPLOYMENTS

- develop branch(staging) is deployed at [api-staging.opensource.org.rw](https://api-staging.opensource.org.rw)
- master branch(production) is deployed at [api.opensource.org.rw](http://api.opensource.org.rw)

The main responsibility of the backend is to use **Github API** and **Slack API** to provide services listed below:

**Action:**

- Automatic invitation (users can invite themselves to be the member of the organization)
- add users to public teams automatically
- getting list of repositories and their details

**insights:**

- number of current members
- number of repository
- popular repositories
- insights about projects

**slack:**

- generate invitation for a user to join the workspace
- join slack channels
- slack workspace's token, only for members

**for members (API of cloudflare)**
- get a sub-domain of **opensource.org.rw**


### Have another good idea or feature\*\*

- join our [slack workspace](http://bit.ly/2VmpgVp)
- join slack channel called **#opensource_org_rw**
- check the [pivotal tracker](https://www.pivotaltracker.com/n/projects/2437162)
- raise a **ticket** on pivotal tracker(if you gonna work on it) or **issue** github(if you need someone else to work on it)

### SETTING UP

It's mandatory to use [NODE 12.X](https://nodejs.org/en/download/current/) and this project is fully **TypeScript**

- clone this repo and cd to the working directory
- follow instructions in `.env.sample` file and setup your `.env` file.
- install dependencies by `npm install` note that **yarn** is not configured
- start the app in development mode `npm run start:dev`
- start the app in production mode `npm start`
- running tests `npm test`
- to compile source down to **ES5** `npm run build`
- **HAPPY CODING! 😎**

### CONTRIBUTIONS

ARE VERY WELCOMED 🙏, once your PR is merged don't forget to add yourself in file called **AUTHORS**

### License

Licensed by BSD 3-Clause License
