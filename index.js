const express = require('express')
const app = express()
const path = require('path')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const session = require('express-session');

const User = require('./Models/User')
const PORT = process.env.PORT || 8080
const DB_URI = process.env.DB_URI || 'mongodb://127.0.0.1:27017/bus-Ticket-Software'


mongoose.connect(DB_URI).then(() => console.log('DB connected')).catch((err) => console.log(err));

app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "views"))
app.set('trust proxy', 1)


app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))



app.get('/', (req, res) => {
    res.render('HomePage');
})

function isAuthenticated(req, res, next) {
    if (!req.session.user) res.redirect('/login');
    else {
        res.locals.user = req.session.user;
        next();
    };
}

app.get('/signup', (req, res) => {
    res.render('auth/SignUp');
})

app.get('/login', (req, res) => {
    res.render('auth/login');
})


app.post('/signup', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const saltRounds = 10;
    try {
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            // Store hash in your password DB.
            if (err) throw new Error(err.message);
            const user = new User({ name, email, password: hash });
            await user.save();
            res.redirect('/login');
        });
    } catch (err) {
        console.log(err);
    }
})

app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const userObject = await User.findOne({ email });
    if (userObject && userObject.email == email) {
        try {
            const correctPassword = userObject.password;
            bcrypt.compare(password, correctPassword, function (err, result) {
                if (result == true) {
                    req.session.regenerate(function (err) {
                        if (err) next(err)
                        req.session.user = userObject.name;
                        res.locals.user = userObject.name;
                        req.session.save(function (err) {
                            if (err) return next(err)
                            res.redirect('/booking/dashboard')
                        })
                    })
                }
            });
        } catch (err) {
            console.log(err);
        }
    }
})



app.get('/booking/dashboard', isAuthenticated, (req, res) => {
    res.render('Booking/Dashboard');
})


app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`)
})