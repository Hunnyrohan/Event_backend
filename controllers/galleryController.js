const Gallery = require('../models/Gallery');

exports.getAllGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findAll();
    res.json(gallery);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.createGallery = async (req, res) => {
  const { src, alt, caption } = req.body;
  try {
    const galleryItem = await Gallery.create({ src, alt, caption });
    res.status(201).json({ message: 'Gallery image added successfully', galleryItem });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};