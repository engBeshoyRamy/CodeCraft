const nodemailer = require('nodemailer');

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'codecraft698@gmail.com',  // YOUR EMAIL
    pass: 'ipnp aibp bdmv dcwh'  // YOUR APP PASSWORD
  }
});

// Send confirmation email
const sendConfirmationEmail = async (registrationData) => {
  const { parentName, email, childName, plan, sessionType, program } = registrationData;

  const mailOptions = {
    from: process.env.EMAIL_FROM || 'Code Craft <codecraft698@gmail.com>',
    to: email,
    subject: '🤖 Registration Confirmed - Code Craft',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #00D9FF 0%, #1A1A2E 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .robot { font-size: 60px; margin-bottom: 10px; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #00D9FF; }
          .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
          .detail-label { font-weight: bold; color: #666; }
          .detail-value { color: #1A1A2E; font-weight: 600; }
          .button { display: inline-block; background: linear-gradient(135deg, #00D9FF 0%, #1A1A2E 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; margin: 20px 0; font-weight: bold; }
          .next-steps { background: #E8F6FF; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .next-steps li { margin: 10px 0; }
          .footer { text-align: center; color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; }
          .highlight { color: #00D9FF; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="robot">🤖</div>
            <h1>Welcome to Code Craft!</h1>
            <p style="margin: 0; opacity: 0.9;">Programming Academy For Kids</p>
          </div>
          <div class="content">
            <h2>Hi ${parentName}! 👋</h2>
            <p>Thank you for registering <strong>${childName}</strong> with Code Craft! We're excited to start this coding journey together through our <span class="highlight">online platform</span>.</p>
            
            <div class="details">
              <h3 style="margin-top: 0; color: #1A1A2E;">📋 Registration Details</h3>
              <div class="detail-row">
                <span class="detail-label">Child's Name:</span>
                <span class="detail-value">${childName}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Plan:</span>
                <span class="detail-value">${plan}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Session Type:</span>
                <span class="detail-value">${sessionType}</span>
              </div>
              <div class="detail-row" style="border-bottom: none;">
                <span class="detail-label">Program:</span>
                <span class="detail-value">${program}</span>
              </div>
            </div>

            <div class="next-steps">
              <h3 style="margin-top: 0; color: #1A1A2E;">📅 What's Next?</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Our team will contact you within <strong>24 hours</strong> to schedule your first online session</li>
                <li>You'll receive a <strong>payment link</strong> to complete your enrollment</li>
                <li>We'll send you <strong>class materials and access details</strong> before your first session</li>
                <li>Get ready to join our <strong>interactive online classroom</strong>!</li>
              </ul>
            </div>

            <center>
              <a href="http://localhost:5173" class="button">Visit Our Website</a>
            </center>

            <p style="background: #FFF3E0; padding: 15px; border-radius: 8px; border-left: 4px solid #FFA500;">
              <strong>💬 Questions?</strong><br>
              Reply to this email or call us at <strong>01055001724</strong><br>
              We're here to help!
            </p>

            <p style="font-size: 18px; text-align: center; margin: 30px 0;">
              Let's code the future together! 🚀
            </p>
            
            <p>Best regards,<br>
            <strong style="color: #00D9FF;">The Code Craft Team</strong></p>
          </div>
          <div class="footer">
            <p><strong>Code Craft</strong> - Programming Academy For Kids</p>
            <p>© 2025 Code Craft. All rights reserved.</p>
            <p>📍 Online Courses - Cairo, Egypt</p>
            <p>📧 codecraft698@gmail.com | 📱 01055001724</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Confirmation email sent to:', email);
    return { success: true };
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return { success: false, error: error.message };
  }
};

module.exports = { sendConfirmationEmail };