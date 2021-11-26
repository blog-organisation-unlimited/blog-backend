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


### Other notes

MongoDB Document limit = 16MB