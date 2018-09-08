const nodemailer = require("nodemailer");
const amqp = require("amqplib/callback_api");
var AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.update({ region: "eu-central-1" });

// Create an SQS service object
var sqs = new AWS.SQS({ apiVersion: "2012-11-05" });

class MailService {
    sendMail(user, mailOptionsObj, action) {
        console.log(user, mailOptionsObj);
        const mailOptions = {
            from: "kudypoditys@gmail.com",
            to: user.email,
            subject: mailOptionsObj.subject,
            html: `
        <a href="http://localhost:3000/${action}?email=${user.email}&token=${
                mailOptionsObj.verifyStringParam
            }">
          ${mailOptionsObj.message}
        </a>`
        };

        var params = {
            DelaySeconds: 10,
            MessageBody: JSON.stringify(mailOptions),
            QueueUrl:
                "https://sqs.eu-central-1.amazonaws.com/048714216392/kudypoditys_email"
        };

        sqs.sendMessage(params, function(err, data) {
            if (err) {
                console.log("Error sqs");
            } else {
                console.log("Success");
            }
        });
    }

    sendData() {
        amqp.connect(
            "amqp://rabbitmq:5672",
            function(err, conn) {
                console.log(err);
                conn.createChannel(function(err, ch) {
                    var q = "hello";

                    ch.assertQueue(q, { durable: false });
                    // Note: on Node 6 Buffer.from(msg) should be used
                    ch.sendToQueue(q, new Buffer("Hello World!"));
                    console.log(" [x] Sent 'Hello World!'");
                });
            }
        );
    }

    sendEmailOld(user, mailOptionsObj, action) {
        const EMAIL_USER = process.env.EMAIL_USER;
        const EMAIL_PASS = process.env.EMAIL_PASS;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS
            }
        });

        const mailOptions = {
            from: EMAIL_USER,
            to: user.email,
            subject: mailOptionsObj.subject,
            html: `
        <a href="http://localhost:3000/${action}?email=${user.email}&token=${
                mailOptionsObj.verifyStringParam
            }">
          ${mailOptionsObj.message}
        </a>`
        };

        return transporter.sendMail(mailOptions).then(_ => true);
    }
}

module.exports = new MailService();
