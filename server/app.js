require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');
app.use(cors());
app.use(express.json());
const nodemailer = require("nodemailer");
const { log } = require('console');

function sendMail(name, email, message) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    const subject = "Mail regarding feedback!";
    const to = email;
    const from = process.env.EMAIL;
    const template = handlebars.compile(fs.readFileSync(path.join(__dirname, 'templates/', 'feedback.hbs'), 'utf8'));
    const html = template({ name: name, message: message });

    const mailOptionsToUser = {
        from,
        to,
        subject,
        html
    };

    const mailOptionsToSelf = {
        from,
        to: from, // Send to yourself
        subject: "New feedback received",
        text: `Feedback from ${name} (${email}): ${message}`
    };

    transporter.sendMail(mailOptionsToUser, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Mail sent to user");
        }
    });

    transporter.sendMail(mailOptionsToSelf, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Mail sent to self");
        }
    });
}

app.post("/", (req, res) => {
    const { name, email, message } = req.body;
    sendMail(name, email, message);
    res.json('Mail sent successfully!');
});

app.listen(5000, () => {
    console.log("Server running at 5000");
});
