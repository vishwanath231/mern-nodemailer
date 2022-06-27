import express from 'express';
const router  = express.Router();
import nodemailer from 'nodemailer';


router.post('/', (req, res) => {

    const { fromEmail, toEmail, subject, message } = req.body;

    const output = `
        <div style="font-family:'Sen',sans-serif;">
            <h3>Subject</h3>
            <p style="margin-left: 1rem;">${subject}</p>
            <h3>Message</h3>
            <p style="margin-left: 1rem;">${message}</p>
        </div>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true, // use SSL // true for 465, false for other ports
        auth: {
            user: `${fromEmail}`, // generated ethereal user
            pass: 'fqepeazarrgoydyy'  // generated ethereal password
        },
        tls:{
            rejectUnAuthorized:true
        }
    
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: `"Contact" <${fromEmail}>`, // sender address
        to: `${toEmail}`, // list of receivers
        subject: `${subject}`, // Subject line
        text: `${message}`, // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(401).json({
                msg: error
            });
        }
        // console.log('Message sent: %s', info.messageId);   
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        if (info) {
            return res.status(200).json({
                msg:`Message has been sent ${toEmail}`
            });
        }
    });
    
})



export default router;