const { getServices, createService } = require('../models/Service');

const getServicesHandler = async (req, res) => {
  try {
    const services = await getServices();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createServiceHandler = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const service = await createService(name, description, price);
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getServices: getServicesHandler,
  createService: createServiceHandler,
};