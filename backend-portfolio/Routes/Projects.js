const router = require('express').Router()
const { body } = require('express-validator')
const Auth = require('../Middleware/Auth')
const Validate = require('../Middleware/Validate')
const ProjectService = require('../Services/ProjectService')

const ProjectRules = [
    body('title').trim().notEmpty().isLength({ max: 100 }),
    body('description').trim().notEmpty().isLength({ max: 500 }),
]

router.get('/', async (req, res, next) => {
    try {
        const Projects = await ProjectService.getAll()
        res.json(Projects)
    } catch (err) { next(err) }
})

router.get('/:id', async (req, res, next) => {
    try {
        const Project = await ProjectService.create(req.body)
        res.status(201).json(Project)
    } catch (err) { next(err) }
})

// Protected - Developer/Owner can add/edit/delete
router.post('/', auth, projectRules, validate, async (req, res, next) => {
    try {
        const Project = await ProjectService.create(req.body)
        res.status(201).json(Project)
    } catch (err) { next(err) }
})

router.put('/:id', auth, projectRules, validate, async (req, res, next) => {
    try {
        const Project = await ProjectService.update(req.params.id, req.body)
        res.json(project)
    } catch (err) { next(err) }
})

router.delete('/:id', auth, async (req, res, next) => {
    try {
        await ProjectService.delete(req.params.id)
        res.json({ success: true })
    } catch (err) { next(err) }
})

module.exports = router