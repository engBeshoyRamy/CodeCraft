require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const testEmail = async () => {
    console.log('🤖 Testing Code Craft email...');
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '****' + process.env.EMAIL_PASS.slice(-4) : 'NOT SET');

    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_USER,
            subject: '🤖 Test Email from Code Craft',
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #00D9FF 0%, #1A1A2E 100%); color: white; border-radius: 10px;">
          <h1 style="text-align: center;">🤖 Code Craft</h1>
          <p style="font-size: 18px; text-align: center;">If you receive this, email is working! ✅</p>
        </div>
      `
        });
        console.log('✅ Email sent successfully!', info.messageId);
    } catch (error) {
        console.error('❌ Email failed:', error.message);
    }
};

testEmail();