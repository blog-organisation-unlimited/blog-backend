# Project Notes


## Data Model

Posts

Post: {
  title
  text
  author
  imageUrl
  date
  likes
  dislikes
  comments: [
    {
      text
      author
      date
    },
    {
      text
      author
      date
    }
  ]
}

Comment: {
  text
  author
  date
}

Author: {
  name
  avatarUrl
}


### Project Folder Organisation

#### Folder-by-type

Same kind of items go into same folders
- routes, controllers, models, middleware, helpers

#### Folder-by-feature

To be continued....


### Branching & Merging

FEATURE BRANCH WORKFLOW => "GITHUB FLOW"

Features in BRANCHES - Cycle
- new branch based on main: `git checkout -b newBranch main`
- new branch finished => push to github
- pull request against main branch on github
- merge into main branch
- pull newest main `git checkout main; git pull`
- next branch `git checkout -b nextBranch main`


### Other notes

MongoDB Document limit = 16MB