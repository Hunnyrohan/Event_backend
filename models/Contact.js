const db = require('../config/db');

class Contact {
  static async getAll(limit = 20, offset = 0) {
    const query = `
      SELECT * FROM contacts
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
    `;
    const result = await db.query(query, [limit, offset]);
    return result.rows;
  }
  
  static async getById(id) {
    const query = 'SELECT * FROM contacts WHERE id = $1';
    const result = await db.query(query, [id]);
    return result.rows[0];
  }
  
  static async create(contactData) {
    const { 
      name, 
      email, 
      phone, 
      subject, 
      message, 
      event_date = null, 
      event_type = null,
      guest_count = null,
      service_id = null,
      venue_id = null
    } = contactData;
    
    const query = `
      INSERT INTO contacts (
        name, email, phone, subject, message, event_date, event_type,
        guest_count, service_id, venue_id, status, created_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 'new', NOW())
      RETURNING *
    `;
    
    const result = await db.query(query, [
      name, email, phone, subject, message, event_date, event_type,
      guest_count, service_id, venue_id
    ]);
    
    return result.rows[0];
  }
  
  static async updateStatus(id, status, notes = null) {
    const query = `
      UPDATE contacts
      SET status = $1, admin_notes = $2, updated_at = NOW()
      WHERE id = $3
      RETURNING *
    `;
    
    const result = await db.query(query, [status, notes, id]);
    return result.rows[0];
  }
  
  static async delete(id) {
    const query = 'DELETE FROM contacts WHERE id = $1 RETURNING id';
    const result = await db.query(query, [id]);
    return result.rows[0];
  }
  
  static async getByStatus(status, limit = 20, offset = 0) {
    const query = `
      SELECT * FROM contacts
      WHERE status = $1
      ORDER BY created_at DESC
      LIMIT $2 OFFSET $3
    `;
    const result = await db.query(query, [status, limit, offset]);
    return result.rows;
  }
}

module.exports = Contact;