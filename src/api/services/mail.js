const nodemailer = require("nodemailer");

require("dotenv").config();

class MailService {
  sendMail(user, mailOptionsObj, action) {
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: EMAIL_USER,
      to: user.email,
      subject: mailOptionsObj.subject,
      html: `
        <a href="http://localhost:3000/${action}?email=${user.email}&token=${mailOptionsObj.verifyStringParam}">
          ${mailOptionsObj.message}
        </a>`,
    };

    return transporter.sendMail(mailOptions).then(_ => true);
  }
}

module.exports = new MailService();
