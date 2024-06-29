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

app.get("/me", authenticateToken, async (req, res) => {
    try {
        const user = await Users.findById(req.user.id).select('-password'); // exclude password from the response
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).send("Internal server error");
        console.log("Failed to get user info:", err);
    }
});

app.get("/protected", authenticateToken, (req, res) => {
    res.send("This is a protected route, you are welcomed");
});
