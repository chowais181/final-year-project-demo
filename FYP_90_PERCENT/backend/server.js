const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// mongodb+srv://EduTech:<password>@cluster0.1xhan.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const studentsRouter = require('./routes/students');
const teachersRouter = require('./routes/teachers');
const coursesRouter=  require('./routes/courses');
const classroomsRouter=  require('./routes/classrooms');
const participantsRouter=  require('./routes/participants');
const usersRouter = require('./routes/users');
const fileRouter = require('./routes/file');
const assesmentRouter = require('./routes/assesments');

app.use('/students', studentsRouter);
app.use('/teachers', teachersRouter);
app.use('/courses', coursesRouter);
app.use('/classrooms', classroomsRouter);
app.use('/participant', participantsRouter);
app.use('/users', usersRouter);
app.use('/file', fileRouter);
app.use('/assesment', assesmentRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});