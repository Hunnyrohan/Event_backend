const db = require('../config/db');

class Gallery {
  static async getAll(limit = 20, offset = 0) {
    const query = `
      SELECT * FROM gallery
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
    `;
    const result = await db.query(query, [limit, offset]);
    return result.rows;
  }
  
  static async getById(id) {
    const query = 'SELECT * FROM gallery WHERE id = $1';
    const result = await db.query(query, [id]);
    return result.rows[0];
  }
  
  static async getByServiceId(serviceId, limit = 20, offset = 0) {
    const query = `
      SELECT * FROM gallery
      WHERE service_id = $1
      ORDER BY created_at DESC
      LIMIT $2 OFFSET $3
    `;
    const result = await db.query(query, [serviceId, limit, offset]);
    return result.rows;
  }
  
  static async getByVenueId(venueId, limit = 20, offset = 0) {
    const query = `
      SELECT * FROM gallery
      WHERE venue_id = $1
      ORDER BY created_at DESC
      LIMIT $2 OFFSET $3
    `;
    const result = await db.query(query, [venueId, limit, offset]);
    return result.rows;
  }
  
  static async getByEventType(eventType, limit = 20, offset = 0) {
    const query = `
      SELECT * FROM gallery
      WHERE event_type = $1
      ORDER BY created_at DESC
      LIMIT $2 OFFSET $3
    `;
    const result = await db.query(query, [eventType, limit, offset]);
    return result.rows;
  }
  
  static async create(galleryData) {
    const { 
      title, 
      description, 
      image_url, 
      service_id = null, 
      venue_id = null,
      event_type = null,
      event_date = null,
      is_featured = false
    } = galleryData;
    
    const query = `
      INSERT INTO gallery (
        title, description, image_url, service_id, venue_id,
        event_type, event_date, is_featured, created_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())
      RETURNING *
    `;
    
    const result = await db.query(query, [
      title, description, image_url, service_id, venue_id,
      event_type, event_date, is_featured
    ]);
    
    return result.rows[0];
  }
  
  static async update(id, galleryData) {
    const { 
      title, 
      description, 
      image_url, 
      service_id, 
      venue_id,
      event_type,
      event_date,
      is_featured
    } = galleryData;
    
    const query = `
      UPDATE gallery
      SET title = $1, description = $2, image_url = $3, service_id = $4,
          venue_id = $5, event_type = $6, event_date = $7, is_featured = $8,
          updated_at = NOW()
      WHERE id = $9
      RETURNING *
    `;
    
    const result = await db.query(query, [
      title, description, image_url, service_id, venue_id,
      event_type, event_date, is_featured, id
    ]);
    
    return result.rows[0];
  }
  
  static async delete(id) {
    const query = 'DELETE FROM gallery WHERE id = $1 RETURNING id';
    const result = await db.query(query, [id]);
    return result.rows[0];
  }
  
  static async getFeatured(limit = 6) {
    const query = `
      SELECT * FROM gallery
      WHERE is_featured = TRUE
      ORDER BY created_at DESC
      LIMIT $1
    `;
    const result = await db.query(query, [limit]);
    return result.rows;
  }
}

module.exports = Gallery;