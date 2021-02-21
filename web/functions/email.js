// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

function createEmailTemplate(email, name, message) {
  const template = `
    <div><span><strong>Name: </strong>${name}</span></div>
    <div><span><strong>Email: </strong>${email}</span></div>
    <div><span><strong>Message: </strong>${message}</span></div>
  `;

  return template;
}

exports.handler = async function (event, context) {
  try {
    const body = JSON.parse(event.body);

    console.log('body', body);

    const mailOptions = {
      from: process.env.EMAIL,
      to: 'christianfarriscs@gmail.comv',
      subject: `CONTACT INQUIRY - ${body.subject}`,
      html: createEmailTemplate(body.email, body.name, body.message),
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.setHeader('Content-Type', 'application/json');
    return {
      data: { success: true },
      statusCode: 200,
    };
  } catch (error) {
    console.log('Error: ', error);

    return {
      statusCode: 500,
    };
  }
};
