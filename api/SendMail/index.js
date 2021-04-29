const fetch = require('node-fetch');
const sgMail = require('@sendgrid/mail');

module.exports = async function (context, req) {
    context.log(process.env.NODE_ENV)
    sgMail.setApiKey(process.env.sendgrid_key);
    const name = req.query.name || (req.body && req.body.name)
    const email = req.query.body || (req.body && req.body.email)
    const message = req.query.message || (req.body && req.body.message)

    const res = await sgMail.send({
        "to": process.env.sendgrid_contact_recipient,
        "from": process.env.sendgrid_contact_sender,
        "subject": process.env.sendgrid_contact_subject,
        "text": `name: ${name}
email: ${email}
---
${message}`,
        "mailSettings": {
            "sandboxMode": {
                "enable": true
            }
        }
    })
    context.res = {status: 200};
}