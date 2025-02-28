const db = require('../config/db');

class Pricing {
  static async getAll() {
    const query = `
      SELECT p.*, s.name as service_name, v.name as venue_name
      FROM pricing p
      LEFT JOIN services s ON p.service_id = s.id
      LEFT JOIN venues v ON p.venue_id = v.id
      ORDER BY p.id
    `;
    const result = await db.query(query);
    return result.rows;
  }
  
  static async getById(id) {
    const query = `
      SELECT p.*, s.name as service_name, v.name as venue_name
      FROM pricing p
      LEFT JOIN services s ON p.service_id = s.id
      LEFT JOIN venues v ON p.venue_id = v.id
      WHERE p.id = $1
    `;
    const result = await db.query(query, [id]);
    return result.rows[0];
  }
  
  static async getByServiceId(serviceId) {
    const query = `
      SELECT p.*, v.name as venue_name
      FROM pricing p
      LEFT JOIN venues v ON p.venue_id = v.id
      WHERE p.service_id = $1
    `;
    const result = await db.query(query, [serviceId]);
    return result.rows;
  }
  
  static async getByVenueId(venueId) {
    const query = `
      SELECT p.*, s.name as service_name
      FROM pricing p
      LEFT JOIN services s ON p.service_id = s.id
      WHERE p.venue_id = $1
    `;
    const result = await db.query(query, [venueId]);
    return result.rows;
  }
  
  static async create(pricingData) {
    const { 
      service_id, 
      venue_id, 
      base_price, 
      weekend_price, 
      holiday_price, 
      hourly_rate,
      minimum_hours,
      additional_info
    } = pricingData;
    
    const query = `
      INSERT INTO pricing (
        service_id, venue_id, base_price, weekend_price, holiday_price,
        hourly_rate, minimum_hours, additional_info, created_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())
      RETURNING *
    `;
    
    const result = await db.query(query, [
      service_id, venue_id, base_price, weekend_price, holiday_price,
      hourly_rate, minimum_hours, additional_info
    ]);
    
    return result.rows[0];
  }
  
  static async update(id, pricingData) {
    const { 
      service_id, 
      venue_id, 
      base_price, 
      weekend_price, 
      holiday_price, 
      hourly_rate,
      minimum_hours,
      additional_info
    } = pricingData;
    
    const query = `
      UPDATE pricing
      SET service_id = $1, venue_id = $2, base_price = $3, weekend_price = $4,
          holiday_price = $5, hourly_rate = $6, minimum_hours = $7,
          additional_info = $8, updated_at = NOW()
      WHERE id = $9
      RETURNING *
    `;
    
    const result = await db.query(query, [
      service_id, venue_id, base_price, weekend_price, holiday_price,
      hourly_rate, minimum_hours, additional_info, id
    ]);
    
    return result.rows[0];
  }
  
  static async delete(id) {
    const query = 'DELETE FROM pricing WHERE id = $1 RETURNING id';
    const result = await db.query(query, [id]);
    return result.rows[0];
  }
}

module.exports = Pricing;