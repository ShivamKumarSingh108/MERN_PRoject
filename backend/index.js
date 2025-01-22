
// const express = require('express');
// const app = express();
// const cors = require('cors');
// const mongoDb = require("./db");
// mongoDb();
// app.use(cors());

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//       );
//       next();
// })
// app.use(express.json())
// app.use('/api', require("./Routes/CreateUser"));
// app.use('/api', require("./Routes/DisplayData"));
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(5000, () => {
//     console.log('Server is running on http://localhost:5000');
  
// });




const express = require('express');
const app = express();
const cors = require('cors');
const mongoDB = require("./db");

// const PDFDocument = require('pdfkit');
// const fs = require('fs');
// Connect to MongoDB
mongoDB();

// Middleware for CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

// Hello World Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/alpha', (req, res) => {
    res.send('Hello World!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
