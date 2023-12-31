var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail({ subject, fromEmail, toEmail, otpText }) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW,
        },
    });

    var mailOptions = {
        from: fromEmail,
        to: toEmail,
        subject: subject,
        text: otpText,
    };

    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailOptions, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
}