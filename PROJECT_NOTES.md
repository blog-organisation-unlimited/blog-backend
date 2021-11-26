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

### Branching & Merging

FEATURE BRANCH WORKFLOW => "GITHUB FLOW"

Features in BRANCHES
- new branch
- pull request gegen main branch


### Other notes

MongoDB Document limit = 16MB