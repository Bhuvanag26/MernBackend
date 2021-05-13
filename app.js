require('dotenv').config()

const mongoose = require('mongoose');
const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// my routes
const authRoutes = require('./routes/auth');
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const paymentBRoutes = require("./routes/paymentBRoutes");




// db connection
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('DB CONNECTED')
});

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// routes
app.use("/api" , authRoutes);
app.use("/api" , userRoutes);
app.use("/api" , categoryRoutes);
app.use("/api" , productRoutes);
app.use("/api" , orderRoutes);
app.use("/api" , paymentBRoutes);

  
const port = process.env.PORT|| 8000;

app.listen(port,() => {
    console.log(`app is running at ${port}`);
});