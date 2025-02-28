const pool = require('./config/db');

async function seedData() {
  try {
    // Clear existing data (optional, be careful with production)
    await pool.query('TRUNCATE TABLE users, services, venues, pricing, reviews, gallery, contacts, bookings CASCADE');

    // Seed Users
    await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [
      'John Doe',
      'john@example.com',
      '$2b$10$XDK7w3n2c0o5ZQVnBP2u4O56s7u3v1O7J5k6L9pQ8r9s0tU2v3w4e', // Hashed password (use bcrypt in production)
    ]);

    // Seed Services
    await pool.query('INSERT INTO services (title, description, image) VALUES ($1, $2, $3)', [
      'Invitation Card Design',
      'Designing bespoke invitations that set the tone for your perfect event.',
      '/images/invitation-card.jpg',
    ]);

    // Seed Venues
    await pool.query('INSERT INTO venues (name, image, price, halls, area, capacity, location, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [
      'Quick 20 Event Venue',
      '/images/venue1.jpg',
      'NPR 17,000',
      2,
      '17,000 Sq Ft',
      1000,
      'Kathmandu, Nepal',
      'A spacious venue perfect for weddings and events...',
    ]);

    // Seed Pricing
    await pool.query('INSERT INTO pricing (title, amount, features, popular) VALUES ($1, $2, $3, $4)', [
      'Basic Plan',
      'NPR 10,000',
      '{1 Event Planning Session, Basic Venue Selection, Standard Catering, Basic Photography}',
      false,
    ]);

    // Seed Reviews
    await pool.query('INSERT INTO reviews (name, image, stars, event, text, user_id) VALUES ($1, $2, $3, $4, $5, $6)', [
      'Ahmed Z.',
      '/images/review1.jpg',
      5,
      'Engagement Ceremony',
      'The event planning team exceeded our expectations...',
      1, // Assuming user_id = 1 from users seeding
    ]);

    // Seed Gallery
    await pool.query('INSERT INTO gallery (src, alt, caption) VALUES ($1, $2, $3)', [
      '/images/gallery1.jpg',
      'Event Planning Setup',
      'A beautifully decorated wedding venue in Nepal.',
    ]);

    // Seed Contacts
    await pool.query('INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)', [
      'John Doe',
      'john@example.com',
      'I’d like to plan a wedding event.',
    ]);

    // Seed Bookings
    await pool.query('INSERT INTO bookings (user_id, service_id, venue_id, date, status) VALUES ($1, $2, $3, $4, $5)', [
      1, // user_id from users
      1, // service_id from services
      1, // venue_id from venues
      '2025-03-15 14:00:00', // date of the booking
      'pending', // status
    ]);

    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Seeding error:', err);
  } finally {
    pool.end(); // Close the database connection
  }
}

seedData();