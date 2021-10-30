const nodemailer = require("nodemailer");

function sendMail(mailToSend, code) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CREATETOR_MAIL,
      pass: process.env.CREATOR_PASS,
    },
  });

  let mailOptions = {
    from: process.env.CREATETOR_MAIL,
    to: mailToSend,
    subject: "test",
    text: `the message to success email: ${code}`,
  };

  //3 step
  transporter.sendMail(mailOptions);
}

// , (err, data) => {
//     if (err) {
//       console.log("ERROR occurs", err);
//     } else {
//       console.log(data);
//     }
//   }

module.exports = { sendMail };
