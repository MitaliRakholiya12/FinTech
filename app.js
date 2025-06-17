const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' }
}));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('index', { path: '/' });
});

app.get('/schemes', (req, res) => {
    res.render('schemes', { path: '/schemes' });
});


app.get('/loan-hub', (req, res) => {
    res.render('loanHub', { path: '/loan-hub' });
});

app.get('/emi-calculator', (req, res) => {
    res.render('emi-calculator', { path: '/emi-calculator' });
});

// Login Routes
app.get('/login', (req, res) => {
    res.render('login', { path: '/login' });
});

app.post('/login', (req, res) => {
    // TODO: Implement login logic
    const { email, password } = req.body;
    // For now, just redirect to home page
    res.redirect('/');
});

// Signup Routes
app.get('/signup', (req, res) => {
    res.render('signup', { path: '/signup' });
});

app.post('/signup', (req, res) => {
    // TODO: Implement signup logic
    const { name, email, password } = req.body;
    // For now, just redirect to login page
    res.redirect('/login');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 