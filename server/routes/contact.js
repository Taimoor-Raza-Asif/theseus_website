import express from 'express';
import pool from '../db/index.js';

const router = express.Router();

// POST /api/contact
router.post('/', async (req, res) => {
  const { email, country, phone, reason, message } = req.body;

  if (!email || !reason) {
    return res.status(400).json({ success: false, error: 'Email and reason are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email address.' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO contact_submissions (email, country, phone, reason, message)
       VALUES ($1, $2, $3, $4, $5) RETURNING id, created_at`,
      [email, country || null, phone || null, reason, message || null]
    );

    return res.status(201).json({
      success: true,
      data: { id: result.rows[0].id, created_at: result.rows[0].created_at },
    });
  } catch (err) {
    console.error('Contact submission error:', err.message);
    return res.status(500).json({ success: false, error: 'Server error. Please try again.' });
  }
});

// GET /api/contact (admin — list submissions)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT 100'
    );
    return res.json({ success: true, data: result.rows });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
