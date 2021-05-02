const functions = require("firebase-functions");
const mail = require("@sendgrid/mail");

exports.contact = functions.https.onRequest((request, response) => {
  mail.setApiKey(functions.config().sendgrid.api_key);
  mail.send({
    to: functions.config().sendgrid.contact.recipient,
    from: "admin@southhillbreadbox.com",
    subject: "Contact requested from SouthHillBreadBox.com",
    text: `Name: ${request.body.Name}
Email: ${request.body.Email}
---
${request.body.Message}`,
    mailSettings: {
      sandboxMode: {
        enable: functions.config().runtime.env !== "production",
      },
    },
  }).then((res) => {
    response.sendStatus(200);
  }, (err) => {
    functions.logger.error(err);
    response.status(err.code).send(err.response.body);
  });
});
