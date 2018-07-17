function Team(options) {
  this.options = options
}

Team.prototype = {
  getTeam: function(teamId) {
    return this.options.User.find({ teamId: teamId })
  },
  add: function({ id, name }) {
    return this.options.User.create({ id, name })
  }
}

function create(options) {
  return new Team(options)
}

module.exports.create = create