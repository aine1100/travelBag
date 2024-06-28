const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const app = express();

const emailApiKey = "5808d10a32f74e9bb86640fb8998bd2";
const Users = require("./models/user.model");
const SECRET_KEY = "12";

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

    async function verifyEmail(email) {
        try {
            const response = await axios.get(`https://api.neverbounce.com/v4/single/check`, {
                params: {
                    key: emailApiKey,
                    email: email
                }
            });
    
            if (response.data.status === 'auth_failure') {
                throw new Error(response.data.message);
            }
    
            console.log('API Response:', response.data);
            return response.data.result === "valid";
        } catch (err) {
            console.error('API Error:', err);
            return false;
        }
    }
    app.post("/register", async (req, res) => {
        const { username, password, email } = req.body;
    
        if (!validator.isEmail(email)) {
            return res.status(400).send("Invalid email format");
        }
    
        try {
            const emailValid = await verifyEmail(email);
            if (!emailValid) {
                return res.status(400).send("This email is not valid or there was an error validating the email");
            }
    
            const checkUser = await Users.findOne({ email: email });
            const isPasswordStrong = password.length > 5;
    
            if (checkUser || !isPasswordStrong) {
                return res.status(400).send(checkUser ? "That email has been used" : "Password must be at least 5 characters long");
            }
    
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new Users({
                username,
                email,
                password: hashedPassword
            });
            const saveUser = await newUser.save();
            res.status(201).send("User was created successfully");
            console.log(newUser);
    
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
         res.status(400).send("Wrong password");
         console.log("wrong password")
        }

        const token = jwt.sign({ id: checkUser._id, email: checkUser.email }, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ message: "Successfully logged in", token });
        console.log("login successfully")

    } catch (err) {
        res.status(500).send("Failed to login");
        console.log(err);
        console.log("failed to login")
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

app.get("/protected", authenticateToken, (req, res) => {
    res.send("This is a protected route, you are welcomed");
});
