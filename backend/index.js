require('dotenv').config();  // Load environment variables at the very top

const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const app = express();
const Users = require("./models/user.model");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/booking")
    .then(() => {
        console.log("Connected to the database");
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });

const SECRET_KEY = process.env.SECRET_KEY;

// async function verifyEmail(email) {
//     try {
//         console.log("EMAIL_USER:", process.env.EMAIL_USER);
//         console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

//         let transporter = nodemailer.createTransport({
//             service:'gmail',
//             host: "smtp.gmail.com",
//             port: 587,
//             secure: false,
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASS
//             }
//         });

//         let info = await transporter.sendMail({
//             from: '"Travel Bag" <noreply@example.com>',
//             to: email,
//             subject: "Email verification",
//             text: "Please verify your email to complete registration.",
//             html: "<b>Please verify your email to complete registration.</b>"
//         });

//         console.log("Email sent: %s", info.messageId);
//         return true;
//     } catch (err) {
//         console.error("Error sending email:", err);
//         return false;
//     }
// }

app.post("/register", async (req, res) => {
    const { username, password, email } = req.body;

    if (!validator.isEmail(email)) {
        return res.status(400).send("Invalid email format");
    }

    try {
        const checkUser = await Users.findOne({ email: email });

        if (checkUser) {
            return res.status(400).send("That email has been used");
        }

        if (password.length <= 5) {
            return res.status(400).send("Password must be at least 6 characters long");
        }

        // const emailSent = await verifyEmail(email);

        // if (!emailSent) {
        //     return res.status(400).send("Failed to send verification email. Please check your email address.");
        // }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Users({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).send("User was created successfully");
    } catch (err) {
        res.status(500).send(err.message);
        console.log("Failed to register user:", err);
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const checkUser = await Users.findOne({ email: email });

        if (!checkUser) {
            return res.status(400).send("The user is not registered");
        }

        const passwordMatch = await bcrypt.compare(password, checkUser.password);

        if (!passwordMatch) {
            return res.status(400).send("Wrong password");
        }

        const token = jwt.sign({ id: checkUser._id, email: checkUser.email }, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ message: "Successfully logged in", token });
    } catch (err) {
        res.status(500).send("Failed to login");
        console.log("Failed to login:", err);
    }
});
app.get("/allusers",async(req,res)=>{
    try{

    }catch{

    }
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send("Access denied");
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).send("Invalid token");
        }
        req.user = user;
        next();
    });
}

app.get("/protected", authenticateToken, (req, res) => {
    res.send("This is a protected route, you are welcomed");
});
