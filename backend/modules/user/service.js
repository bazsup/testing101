module.exports = (options) => {
  return ({
    getUsers: () => options.User.findAll()
  })
}