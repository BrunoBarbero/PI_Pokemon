const { Router } = require('express');

const getTypeHandler  = require('../handlers/typesHandler')

const typesRouter = Router()

typesRouter.get("/", getTypeHandler)

module.exports = typesRouter