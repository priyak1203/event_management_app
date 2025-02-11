const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('express-async-errors');
require('dotenv').config();

// other packages
const cors = require('cors');

const app = express();

// routers
const authRouter = require('./routes/authRoutes');
const eventRouter = require('./routes/eventRoutes');

// error handlers
const notFoundHandler = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

// conditions for dev environment
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Event Management App');
});

app.use('/api/v1/event', eventRouter);
app.use('/api/v1/auth', authRouter);

// Not found route middleware
app.use(notFoundHandler);

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

const start = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log(`Connected to DB`));
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
