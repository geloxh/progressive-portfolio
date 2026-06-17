const Project = require('../Models/Project')

const ProjectService = {
  
  getAll: async() => {
    return await Project.find().sort({ createdAt: -1 })
  },

  getById: async (id) => {
    const project = await Project.findById(id)
    if (!project) {
      const err = new Error('Project not found.')
      err.status = 404
      throw err
    }
    return project
  },

  create: async (data) => {
    const project = new Project(data)
    return await project.save()
  },

  update: async (id, data) => {
    return await Project.findByIdAndUpdate(id, data, {
      new: true, // return updated doc
      runValidators: true, // run schema validators
    })
  },
  
  delete: async (id) => {
    return await Project.findByIdAndDelete(id)
  },
}

module.exports = ProjectService