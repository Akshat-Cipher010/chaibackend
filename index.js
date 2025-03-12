require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "Akshat-Cipher010",
    "id": 202948021,
    "node_id": "U_kgDODBi9tQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/202948021?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Akshat-Cipher010",
    "html_url": "https://github.com/Akshat-Cipher010",
    "followers_url": "https://api.github.com/users/Akshat-Cipher010/followers",
    "following_url": "https://api.github.com/users/Akshat-Cipher010/following{/other_user}",
    "gists_url": "https://api.github.com/users/Akshat-Cipher010/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Akshat-Cipher010/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Akshat-Cipher010/subscriptions",
    "organizations_url": "https://api.github.com/users/Akshat-Cipher010/orgs",
    "repos_url": "https://api.github.com/users/Akshat-Cipher010/repos",
    "events_url": "https://api.github.com/users/Akshat-Cipher010/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Akshat-Cipher010/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 1,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2025-03-12T11:09:25Z",
    "updated_at": "2025-03-12T11:12:07Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req , res) => {
    res.send('akshatdotcom')
})

app.get('/login', (req , res) => {
    res.send('<h1>Please login at chai aur code</h1>')
})
 
app.get('/github', (req , res) => {
    res.json(githubData)
})
app.get('/youtube', (req , res) => {
    res.send('<h2>Chai aur Code</h2>')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
