# IusR Client

Frontend for an open source code learning platform.

## Project Setup / Development Environment

### Setup Git and clone project

At the moment, there exist two repositories for this project, one on GitHub and one on GitLab. The GitHub repository is the official one, the GitLab repo is only used for deployment. We always push to both repos but only pull from the GitHub repo.

1. run `git clone git@github.com:lehrstuhl-boente/iusr-server.git`, this sets the pull remote to GitHub
2. run `git remote set-url origin --push --add git@gitlab.com:rwf-dev/lstboente/iusr-server.git`
3. run `git remote set-url origin --push --add git@github.com:lehrstuhl-boente/iusr-server.git`

### Setup Nuxt Project

1. run `npm install` from root directory
2. run `npm run dev` to run development server

## Deployment

1. make a change to the repository code
2. push the change (make sure it is properly pushed to the master branch of the GitLab repository)
3. build and push the docker image via GitLab pipeline **(option1, preferred)**
   1. go to https://gitlab.com/rwf-dev/lstboente/iusr-server/-/pipelines
   2. click "Run Pipeline"
   3. make sure the master branch is selected and click "Run Pipeline" again
4. build and push the docker image locally **(option2, may not work on all machines, e.g. Mac)**
   1. run `docker-compose build`
   2. run `docker-compose push`
5. from this point, the [RWI Informatik](https://rwi.app/team) team takes over

## Techstack

**Node Version:** 18.14  
**Framework:** Nuxt.js 3, https://nuxt.com/
