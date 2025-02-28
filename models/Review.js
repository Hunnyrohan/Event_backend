const db = require('../config/db');

class Review {
  static async getAll(limit = 10, offset = 0) {
    const query = `
      SELECT r.*, u.name as user_name, s.name as service_name, v.name as venue_name
      FROM reviews r
      LEFT JOIN users u ON r.user_id = u.id
      LEFT JOIN services s ON r.service_id = s.id
      LEFT JOIN venues v ON r.venue_id = v.id
      ORDER BY r.created_at DESC
      LIMIT $1 OFFSET $2
    `;
    const result = await db.query(query, [limit, offset]);
    return result.rows;
  }
  
  static async getById(id) {
    const query = `
      SELECT r.*, u.name as user_name, s.name as service_name, v.name as venue_name
      FROM reviews r
      LEFT JOIN users u ON r.user_id = u.id
      LEFT JOIN services s ON r.service_id = s.id
      LEFT JOIN venues v ON r.venue_id = v.id
      WHERE r.id = $1
    `;
    const result = await db.query(query, [id]);
    return result.rows[0];
  }
  
  static async getByUserId(userId, limit = 10, offset = 0) {
    const query = `
      SELECT r.*, s.name as service_name, v.name as venue_name
      FROM reviews r
      LEFT JOIN services s ON r.service_id = s.id
      LEFT JOIN venues v ON r.venue_id = v.id
      WHERE r.user_id = $1
      ORDER BY r.created_at DESC
      LIMIT $2 OFFSET $3
    `;
    const result = await db.query(query, [userId, limit, offset]);
    return result.rows;
  }
  
  static async getByServiceId(serviceId, limit = 10, offset = 0) {
    const query = `
      SELECT r.*, u.name as user_name
      FROM reviews r
      LEFT JOIN users u ON r.user_id = u.id
      WHERE r.service_id = $1
      ORDER BY r.created_at DESC
      LIMIT $2 OFFSET $3
    `;
    const result = await db.query(query, [serviceId, limit, offset]);
    return result.rows;
  }
  
  static async getByVenueId(venueId, limit = 10, offset = 0) {
    const query = `
      SELECT r.*, u.name as user_name
      FROM reviews r
      LEFT JOIN users u ON r.user_id = u.id
      WHERE r.venue_id = $1
      ORDER BY r.created_at DESC
      LIMIT $2 OFFSET $3
    `;
    const result = await db.query(query, [venueId, limit, offset]);
    return result.rows;
  }
  
  static async create(reviewData) {
    const { 
      user_id, 
      service_id, 
      venue_id, 
      rating, 
      comment, 
      event_date 
    } = reviewData;
    
    const query = `
      INSERT INTO reviews (
        user_id, service_id, venue_id, rating, comment, event_date, created_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, NOW())
      RETURNING *
    `;
    
    const result = await db.query(query, [
      user_id, service_id, venue_id, rating, comment, event_date
    ]);
    
    return result.rows[0];
  }
  
  static async update(id, userId, reviewData) {
    const { rating, comment } = reviewData;
    
    const query = `
      UPDATE reviews
      SET rating = $1, comment = $2, updated_at = NOW()
      WHERE id = $3 AND user_id = $4
      RETURNING *
    `;
    
    const result = await db.query(query, [rating, comment, id, userId]);
    return result.rows[0];
  }
  
  static async delete(id, userId) {
    const query = 'DELETE FROM reviews WHERE id = $1 AND user_id = $2 RETURNING id';
    const result = await db.query(query, [id, userId]);
    return result.rows[0];
  }
  
  static async getAverageRatingByService(serviceId) {
    const query = `
      SELECT AVG(rating) as average_rating, COUNT(*) as review_count
      FROM reviews
      WHERE service_id = $1
    `;
    const result = await db.query(query, [serviceId]);
    return result.rows[0];
  }
  
  static async getAverageRatingByVenue(venueId) {
    const query = `
      SELECT AVG(rating) as average_rating, COUNT(*) as review_count
      FROM reviews
      WHERE venue_id = $1
    `;
    const result = await db.query(query, [venueId]);
    return result.rows[0];
  }
}

module.exports = Review;