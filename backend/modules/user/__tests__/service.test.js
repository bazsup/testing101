const createUserService = require('../service')

describe('User service', () => {
  it('getUsers', async () => {
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
      findAll: () => Promise.resolve(users),
    }

    const UserService = createUserService({ User: mockUSer })
    const usersRecieve = await UserService.getUsers()
    expect(usersRecieve).toEqual(users)
  })
})