const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { body, validationResult } = require('express-validator');
const { sendConfirmationEmail } = require('../emailService');

const DATA_FILE = path.join(__dirname, '../data/registrations.json');

// Ensure data directory and file exist
const ensureDataFile = () => {
    const dataDir = path.join(__dirname, '../data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, JSON.stringify([]));
    }
};

// Input sanitization middleware
const sanitizeString = (str) => {
    if (typeof str !== 'string') return str;
    return str.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
};

// POST /api/register
router.post(
    '/register',
    [
        body('parentName').notEmpty().trim().escape(),
        body('email').isEmail().normalizeEmail(),
        body('phone').notEmpty().trim(),
        body('childName').notEmpty().trim().escape(),
        body('childAge').isInt({ min: 7, max: 16 }),
        body('plan').notEmpty().trim(),
        body('sessionType').notEmpty().trim(),
        body('program').notEmpty().trim(),
        body('message').optional().trim().escape()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: 'Validation failed', errors: errors.array() });
        }

        try {
            ensureDataFile();

            // Sanitize all inputs
            const registration = {
                id: Date.now().toString(),
                parentName: sanitizeString(req.body.parentName),
                email: sanitizeString(req.body.email),
                phone: sanitizeString(req.body.phone),
                childName: sanitizeString(req.body.childName),
                childAge: parseInt(req.body.childAge),
                plan: sanitizeString(req.body.plan),
                sessionType: sanitizeString(req.body.sessionType),
                program: sanitizeString(req.body.program),
                message: sanitizeString(req.body.message || ''),
                registeredAt: new Date().toISOString(),
                status: 'pending'
            };

            // Read existing data
            const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
            data.push(registration);

            // Write updated data
            fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

            // Send confirmation email
            const emailResult = await sendConfirmationEmail(registration);

            if (!emailResult.success) {
                console.warn('Email failed but registration saved:', emailResult.error);
            }

            res.status(201).json({
                success: true,
                message: 'Registration successful! Check your email for confirmation.',
                registrationId: registration.id,
                emailSent: emailResult.success
            });
        } catch (error) {
            console.error('Registration error:', error);
            res.status(500).json({ message: 'Failed to save registration', error: error.message });
        }
    }
);

// POST /api/create-payment
router.post('/create-payment', (req, res) => {
    const { registrationId, amount } = req.body;

    if (!registrationId || !amount) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // PLACEHOLDER: Replace with actual Paymob API integration
    const fakeCheckoutUrl = `https://paymob.com/checkout/${registrationId}?amount=${amount}`;

    res.json({
        success: true,
        checkoutUrl: fakeCheckoutUrl,
        message: 'Payment link generated (PLACEHOLDER - integrate Paymob API)'
    });
});

// GET /api/registrations (Admin endpoint)
router.get('/registrations', (req, res) => {
    try {
        ensureDataFile();
        const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        res.json({ success: true, registrations: data });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch registrations', error: error.message });
    }
});

module.exports = router;