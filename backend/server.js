const express = require('express')
const app = express()
const Team = require('./modules/team/service')
const teamData = require('./data.json')

const port = 3001

app.get('/', async (req, res) => {
  res.send('running!')
})

const user = {
  find: () => Promise.resolve(teamData.teams)
}

app.get('/team', async (req, res) => {
  const itemService = Team.create({ User: user })
  const result = await itemService.getTeam()
  res.send(result)
})


app.listen(port, (err) => {
  if (err) throw err
  console.log('> Ready on localhost', port)
})