const mongoose = require('mongoose');
(express = require('express')), (app = express());

const port = process.env.PORT || 3000;


uri = 'mongodb+srv://jhayeephi:jerome1985@cluster0.cofezco.mongodb.net/Exams23001'

mongoose.connect(uri);

// Create a Schema object
const examrecords = new mongoose.Schema({
  name: { type: String, required: true },
  sid: { type: Number, required: true },

});

// collections
const quizexamrecords = mongoose.model('Records', examrecords);

app.get('/', (req, res) => {
  const record = new quizexamrecords({
    name: 'Jerome Pinugu',
    sid: '300350408',

  });

  quizexamrecords.insertMany([record]);

  res.send(`<h1>Record Added</h1>`);
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
