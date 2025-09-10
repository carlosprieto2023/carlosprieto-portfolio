const nodemailer = require('nodemailer');

async function sendEmail(req, res) {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact Form: ${name}`,
      text: `
                You have a new message from your portfolio site:

                name: ${name}
                Email: ${email}
                Message: ${message}
                `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent succesfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
}

module.exports = { sendEmail };
