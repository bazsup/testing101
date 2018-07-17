const TeamService = require('../service')

describe('Team service', () => {
  it('getTeam', async () => {
    const users = [
      {
        id: 1,
        name: 'Bas',
      },
      {
        id: 2,
        name: 'Boat',
      },
      {
        id: 3,
        name: 'Mackie',
      }
    ]

    const mockUSer = {
      find: () => Promise.resolve(users),
    }

    const Team = TeamService.create({ User: mockUSer })
    const teamRecieve = await Team.getTeam()
    expect(teamRecieve).toEqual(users)
  })

  it('getTeam', async () => {
    const users = [
      {
        id: 1,
        name: 'Bas',
      },
      {
        id: 2,
        name: 'Boat',
      },
      {
        id: 3,
        name: 'Mackie',
      }
    ]

    
    const mockUSer = {
      find: () => Promise.resolve(users),
      create: ({ id, name }) => {
        users.push({
          id,
          name,
        })
        Promise.resolve(users)
      }
    }
    
    const newUser = { id: 4, name: 'mock user 4' }
    const expectTeam = [...users, newUser]
    

    const Team = TeamService.create({ User: mockUSer })
    await Team.add(newUser)
    const recieveTeam = await Team.getTeam()
    expect(recieveTeam).toEqual(expectTeam)
  })
})