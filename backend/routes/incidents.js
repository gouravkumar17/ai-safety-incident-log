const express = require('express');
const router = express.Router();
const incidentsController = require('../controllers/incidents');

router.get('/', incidentsController.getAllIncidents);
router.post('/', incidentsController.createIncident);
router.get('/:id', incidentsController.getIncidentById);
router.delete('/:id', incidentsController.deleteIncident);

module.exports = router;