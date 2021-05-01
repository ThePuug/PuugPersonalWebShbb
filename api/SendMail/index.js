const fetch = require('node-fetch');
const sgMail = require('@sendgrid/mail');

module.exports = async function (context, req) {
    sgMail.setApiKey(process.env.sendgrid_key)
    if(!req.body) throw 'Bad Request'
    await sgMail.send({
        "to": process.env.sendgrid_contact_recipient,
        "from": "admin@southhillbreadbox.com",
        "subject": "Contact request submitted from SouthhillBreadBox.com",
        "text": `name: ${req.body.Name}
email: ${req.body.Email}
---
${req.body.Message}`,
        "mailSettings": {
            "sandboxMode": {
                "enable": process.env.NODE_ENV == "development" ? true : false
            }
        }
    })
    context.res = {status: 200};
}