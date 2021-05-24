const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5022;
app.use(cors());
app.use(express.json());
const uri = process.env.OHIF_DB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('MongoDB database etablished successfuly ');
});
const userRouter = require('./routes/users');
app.use('/users', userRouter);
const authRouter = require('./routes/auth');
app.use('/auth', authRouter);
const patientRouter = require('./routes/patients');
app.use('/patients', patientRouter);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('server is runing on port : ' + port);
});
