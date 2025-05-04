const Incident = require('../models/incident');

exports.getAllIncidents = async (req, res) => {
  try {
    const incidents = await Incident.findAll();
    res.status(200).json(incidents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createIncident = async (req, res) => {
  try {
    const { title, description, severity } = req.body;
    
    if (!title || !description || !severity) {
      return res.status(400).json({ error: 'Title, description, and severity are required' });
    }

    const incident = await Incident.create({
      title,
      description,
      severity
    });

    res.status(201).json(incident);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getIncidentById = async (req, res) => {
  try {
    const incident = await Incident.findByPk(req.params.id);
    if (!incident) {
      return res.status(404).json({ error: 'Incident not found' });
    }
    res.status(200).json(incident);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteIncident = async (req, res) => {
  try {
    const incident = await Incident.findByPk(req.params.id);
    if (!incident) {
      return res.status(404).json({ error: 'Incident not found' });
    }
    await incident.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};